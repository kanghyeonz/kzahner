#!/usr/bin/env python3
"""Build the Korean webfonts and their @font-face rules.

Crimson Pro and Inter have no Hangul, so Hangul is set in Noto Serif KR (body)
and Noto Sans KR (chips and cards), served from this site so that every
computer shows the same letters. Each weight is cut twice:

  <name>-<weight>-page.woff2  the syllables the site's text uses now
  <name>-<weight>.woff2       the 2,350 syllables of KS X 1001

A browser fetches the small "page" file; it fetches the large one only when
the text has a syllable the small file lacks, so the page stays correct when
its text changes. Run this again after changing Korean text to keep the small
files complete:

  python3 scripts/build-korean-font.py

Sources are looked up in scripts/font-sources/ (not tracked) and then in
~/Library/Fonts, as static files (NotoSerifKR-Regular.ttf, ...) or as the
variable font (NotoSansKR[wght].ttf), both from
https://github.com/google/fonts/tree/main/ofl (notoserifkr, notosanskr).

Needs fontTools, and for WOFF2 the brotli module or the brotli command.
"""
import pathlib
import shutil
import subprocess
import sys
import types

try:
    import brotli  # noqa: F401
except ImportError:
    exe = shutil.which('brotli')
    if not exe:
        sys.exit('WOFF2 needs the brotli module or the brotli command')
    shim = types.ModuleType('brotli')
    shim.MODE_FONT = 2
    shim.compress = lambda data, mode=0, quality=11, **kw: subprocess.run(
        [exe, '-c', '-q', str(quality)], input=data, stdout=subprocess.PIPE, check=True
    ).stdout
    shim.decompress = lambda data: subprocess.run(
        [exe, '-d', '-c'], input=data, stdout=subprocess.PIPE, check=True
    ).stdout
    sys.modules['brotli'] = shim

from fontTools import subset  # noqa: E402
from fontTools.ttLib import TTFont  # noqa: E402
from fontTools.varLib import instancer  # noqa: E402

ROOT = pathlib.Path(__file__).resolve().parent.parent
SOURCE_DIRS = [ROOT / 'scripts' / 'font-sources', pathlib.Path('~/Library/Fonts').expanduser()]
STYLES = {400: 'Regular', 500: 'Medium', 700: 'Bold'}
FAMILIES = [
    # Hangul fills its em square, so beside Crimson Pro's enlarged scale the
    # serif is drawn smaller; beside Inter the sans keeps its size.
    {'family': 'Noto Serif KR', 'file': 'NotoSerifKR', 'weights': [400, 500, 700], 'size_adjust': '90%'},
    {'family': 'Noto Sans KR', 'file': 'NotoSansKR', 'weights': [400, 500], 'size_adjust': None},
]
HANGUL = range(0xAC00, 0xD7A4)


def page_syllables():
    found = set()
    files = [ROOT / 'index.html', *sorted((ROOT / 'src').rglob('*.js*'))]
    for path in files:
        found.update(ord(c) for c in path.read_text(encoding='utf-8') if ord(c) in HANGUL)
    return found


def ksx1001_syllables():
    return {
        ord(bytes([lead, trail]).decode('euc_kr'))
        for lead in range(0xB0, 0xC9)
        for trail in range(0xA1, 0xFF)
    }


def open_source(name, weight):
    """The font at one weight: a static file, or the variable font pinned to it."""
    for folder in SOURCE_DIRS:
        static = folder / f'{name}-{STYLES[weight]}.ttf'
        if static.exists():
            # Keep the source's timestamp, so that a rerun gives the same bytes.
            return TTFont(static, recalcTimestamp=False)
        variable = folder / f'{name}[wght].ttf'
        if variable.exists():
            font = TTFont(variable, recalcTimestamp=False)
            return instancer.instantiateVariableFont(font, {'wght': weight})
    sys.exit(f'{name}: no source font in {", ".join(map(str, SOURCE_DIRS))}')


def cut(name, weight, codepoints, target):
    options = subset.Options()
    options.flavor = 'woff2'
    options.hinting = False
    options.layout_features = []
    options.notdef_outline = True
    font = open_source(name, weight)
    subsetter = subset.Subsetter(options)
    subsetter.populate(unicodes=sorted(codepoints))
    subsetter.subset(font)
    font.flavor = 'woff2'
    font.save(target)
    return target.stat().st_size


def unicode_range(codepoints):
    runs, points = [], sorted(codepoints)
    start = prev = points[0]
    for cp in points[1:] + [None]:
        if cp is not None and cp == prev + 1:
            prev = cp
            continue
        runs.append(f'U+{start:04X}' if start == prev else f'U+{start:04X}-{prev:04X}')
        start = prev = cp
    return ', '.join(runs)


def face(family, weight, file, urange, size_adjust):
    adjust = f'  size-adjust: {size_adjust};\n' if size_adjust else ''
    return (
        '@font-face {\n'
        f"  font-family: '{family}';\n"
        '  font-style: normal;\n'
        f'  font-weight: {weight};\n'
        '  font-display: swap;\n'
        f'{adjust}'
        f"  src: url('/fonts/{file}') format('woff2');\n"
        f'  unicode-range: {urange};\n'
        '}\n'
    )


def license_file(name, target):
    """The font's own copyright line over the OFL text."""
    for folder in SOURCE_DIRS:
        for source in sorted(folder.glob(f'{name}*.ttf')):
            notice = TTFont(source, lazy=True)['name'].getDebugName(0)
            ofl = (target.parent / 'crimsonpro-OFL.txt').read_text(encoding='utf-8')
            body = ofl[ofl.index('This Font Software is licensed under'):]
            target.write_text(f'{notice}\n\n{body}', encoding='utf-8')
            return


def main():
    page = page_syllables()
    full = ksx1001_syllables() | page
    fonts = ROOT / 'public' / 'fonts'
    rules = [
        '/* Generated by scripts/build-korean-font.py. Do not edit by hand. */\n',
        '/* Noto Serif KR and Noto Sans KR, self-hosted; see /fonts/notoserifkr-OFL.txt\n'
        '   and /fonts/notosanskr-OFL.txt. For each weight the later rule wins where\n'
        '   the two ranges overlap, so the small file is fetched first and the large\n'
        '   one only for a syllable it lacks. */\n',
    ]
    for spec in FAMILIES:
        prefix = spec['file'].lower()
        for weight in spec['weights']:
            big = cut(spec['file'], weight, full, fonts / f'{prefix}-{weight}.woff2')
            small = cut(spec['file'], weight, page, fonts / f'{prefix}-{weight}-page.woff2')
            print(
                f"{spec['family']} {weight}: page {small / 1024:.0f} KB "
                f'({len(page)} syllables), full {big / 1024:.0f} KB'
            )
            rules.append(face(spec['family'], weight, f'{prefix}-{weight}.woff2', 'U+AC00-D7A3', spec['size_adjust']))
            rules.append(
                face(spec['family'], weight, f'{prefix}-{weight}-page.woff2', unicode_range(page), spec['size_adjust'])
            )
        license_file(spec['file'], fonts / f'{prefix}-OFL.txt')
    (ROOT / 'src' / 'fonts-ko.css').write_text('\n'.join(rules), encoding='utf-8')


if __name__ == '__main__':
    main()
