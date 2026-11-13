import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { FiMail } from 'react-icons/fi';
import { FaLinkedinIn } from 'react-icons/fa';
import { SiGooglescholar } from 'react-icons/si';
import { useLanguage } from '../contexts/LanguageContext';
import SectionHeader from '../components/SectionHeader';
import { FLAG_SHADOW } from '../languages';

const sectionMotion = {
  initial: { opacity: 0, y: 14 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-60px' },
  transition: { duration: 0.4 },
};

const Section = ({ title, children }) => (
  <motion.section {...sectionMotion} className='mt-14 sm:mt-16'>
    <SectionHeader>{title}</SectionHeader>
    <div className='mt-6 space-y-10'>{children}</div>
  </motion.section>
);

// The link of an entry's title: an institution, a lab, a paper.
const TitleLink = ({ href, children }) => (
  <a
    href={href}
    target='_blank'
    rel='noopener noreferrer'
    className='transition-colors hover:text-accent dark:hover:text-accent-soft'
  >
    {children}
  </a>
);

const Entry = ({ title, titleHref, sub, date, location, children }) => (
  <div>
    <div className='flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1 sm:flex-nowrap'>
      <h3 className='min-w-0 font-medium text-neutral-900 dark:text-neutral-100'>
        {titleHref ? <TitleLink href={titleHref}>{title}</TitleLink> : title}
      </h3>
      <span className='shrink-0 text-sm text-neutral-400 dark:text-neutral-500'>
        {date}
      </span>
    </div>
    {sub && (
      <p className='mt-1 text-sm text-neutral-600 dark:text-neutral-400'>
        {sub}
      </p>
    )}
    {children}
    {location && (
      <p className='mt-2 text-xs text-neutral-400 dark:text-neutral-500'>
        {location}
      </p>
    )}
  </div>
);

const Bullets = ({ children }) => (
  <ul className='mt-3 space-y-2 text-sm leading-relaxed text-neutral-600 dark:text-neutral-400'>
    {children}
  </ul>
);

const Bullet = ({ children }) => (
  <li className='flex gap-2.5'>
    <span
      aria-hidden='true'
      className='mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent/50'
    />
    <span>{children}</span>
  </li>
);

const PdfLink = ({ href, label = 'PDF' }) => (
  <a
    href={href}
    target='_blank'
    rel='noopener noreferrer'
    className='ml-1.5 whitespace-nowrap text-sm font-medium text-accent transition-colors hover:text-accent-dim dark:text-accent-soft dark:hover:text-accent'
  >
    [{label}]
  </a>
);

// A sidebar card: a waving flag beside a short phrase, its details listed
// under the phrase.
const FlagCard = ({ flagSrc, main, items }) => (
  <li className='rounded-2xl border border-neutral-200 bg-white px-3 py-2 font-sans text-xs leading-relaxed shadow-sm dark:border-white/10 dark:bg-white/5 dark:shadow-none'>
    <div className='flex items-center gap-2'>
      <img
        src={flagSrc}
        alt=''
        aria-hidden='true'
        className='h-5 w-5 shrink-0'
        style={FLAG_SHADOW}
      />
      <span className='font-medium text-neutral-700 dark:text-neutral-200'>
        {main}
      </span>
    </div>
    <ul className='mt-0.5 space-y-0.5 pl-7 text-neutral-500 dark:text-neutral-400'>
      {items.map((item) => (
        <li key={item} className='flex gap-2'>
          <span
            aria-hidden='true'
            className='mt-[0.6em] h-1 w-1 shrink-0 rounded-full bg-neutral-300 dark:bg-neutral-600'
          />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  </li>
);

// A small pill: a short label, and a quieter detail after it.
const Chip = ({ main, detail }) => (
  <li className='inline-flex items-center gap-2 rounded-2xl border border-neutral-200 bg-white px-3 py-1 font-sans text-xs leading-relaxed shadow-sm dark:border-white/10 dark:bg-white/5 dark:shadow-none'>
    <span>
      <span className='font-medium text-neutral-700 dark:text-neutral-200'>
        {main}
      </span>
      {detail && (
        <span className='text-neutral-500 dark:text-neutral-400'>
          {' · '}
          {detail}
        </span>
      )}
    </span>
  </li>
);

// Contact row: a pill holds an icon and text, a round chip holds one icon.
const pillClass =
  'inline-flex h-8 items-center gap-2 rounded-full border border-neutral-200 bg-white px-3 tracking-tight shadow-sm dark:border-white/10 dark:bg-white/5 dark:shadow-none';
const roundChipClass =
  'inline-flex h-8 w-8 items-center justify-center rounded-full border border-neutral-200 bg-white shadow-sm transition-colors hover:border-neutral-400 dark:border-white/10 dark:bg-white/5 dark:shadow-none dark:hover:border-white/40';

const Chips = ({ children }) => (
  <ul className='flex flex-wrap gap-2'>{children}</ul>
);

// Language-independent skill lists.
const PROGRAMMING = ['C', 'Python', 'Scala', 'F#', 'SQL'];
const LIBRARIES = [
  'PyTorch',
  'Hugging Face (Transformers, Datasets, Accelerate)',
  'PyTorch Geometric',
  'scikit-learn',
  'NumPy',
  'SciPy',
  'pandas',
  'Git',
  'Linux',
  'LaTeX',
];

// A name (a person, a department) linked to its homepage, inside running text.
const PersonLink = ({ href, children }) => (
  <a
    href={href}
    target='_blank'
    rel='noopener noreferrer'
    className='underline decoration-neutral-300 underline-offset-4 transition-colors hover:text-accent hover:decoration-accent dark:decoration-neutral-600 dark:hover:text-accent-soft'
  >
    {children}
  </a>
);

// An element's height, kept current as its content changes.
const useHeight = () => {
  const ref = useRef(null);
  const [height, setHeight] = useState(0);
  useEffect(() => {
    if (!ref.current || typeof ResizeObserver === 'undefined') return undefined;
    const observer = new ResizeObserver(([entry]) =>
      setHeight(Math.round(entry.contentRect.height)),
    );
    observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);
  return [ref, height];
};

export default function Home() {
  const { t } = useLanguage();
  const [sidebarRef, sidebarHeight] = useHeight();

  return (
    <div className='mx-auto max-w-content px-5 lg:flex'>
      {/* Sidebar: photo, name, contact, the three flag cards. Beside the main
          column it stays in view: under the navbar when the window is tall
          enough to show all of it, otherwise scrolling until its last card
          is in view and holding there. */}
      <motion.aside
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className='pt-10 lg:w-[18.5rem] lg:shrink-0 lg:pb-24 lg:pr-10 lg:pt-16'
      >
        <div
          ref={sidebarRef}
          className='lg:sticky'
          style={{
            top: `min(4.5rem, calc(100vh - ${sidebarHeight}px - 1rem))`,
          }}
        >
          <div className='flex items-center gap-5 lg:block'>
            {/* The frame clips the photo, which is zoomed in on the face: closely
                in the small frame, less so in the sidebar-wide one. */}
            <div className='h-24 w-24 shrink-0 overflow-hidden rounded-lg shadow-md dark:shadow-none lg:aspect-[5/4] lg:h-auto lg:w-full'>
              <img
                src='/img/kanghyeon.png'
                alt={t('fullName')}
                className='h-full w-full origin-[64.7%_39.3%] scale-[1.6] object-cover lg:scale-[1.25]'
              />
            </div>
            <h1 className='text-2xl font-bold tracking-tight lg:mt-3 lg:text-center lg:text-3xl'>
              {t('fullName')}
            </h1>
          </div>
          <div className='mt-4 font-sans text-xs text-neutral-600 dark:text-neutral-300'>
            <span className={pillClass}>
              <FiMail aria-hidden='true' className='h-3.5 w-3.5' />
              kanghyeon.kim (at) polytechnique.edu
            </span>
            <div className='mt-2 flex items-center gap-2'>
              <a
                href='https://scholar.google.com/citations?hl=en&user=Nvj623YAAAAJ'
                target='_blank'
                rel='noopener noreferrer'
                aria-label='Google Scholar'
                title='Google Scholar'
                className={roundChipClass}
              >
                <SiGooglescholar
                  aria-hidden='true'
                  className='h-3.5 w-3.5 text-[#4285F4]'
                />
              </a>
              <a
                href='https://www.linkedin.com/in/kanghyeon-k-29ba44192/'
                target='_blank'
                rel='noopener noreferrer'
                aria-label='LinkedIn'
                title='LinkedIn'
                className={roundChipClass}
              >
                <FaLinkedinIn
                  aria-hidden='true'
                  className='h-3.5 w-3.5 text-[#0A66C2]'
                />
              </a>
            </div>
          </div>
          <hr className='mt-4 border-neutral-200 dark:border-white/10' />
          <ul className='mt-4 space-y-2'>
            <FlagCard
              flagSrc='/img/flags/kr.svg'
              main={t('chipKrMain')}
              items={t('chipKrItems')}
            />
            <FlagCard
              flagSrc='/img/flags/ch.svg'
              main={t('chipChMain')}
              items={t('chipChItems')}
            />
            <FlagCard
              flagSrc='/img/flags/fr.svg'
              main={t('chipFrMain')}
              items={t('chipFrItems')}
            />
          </ul>
        </div>
      </motion.aside>

      {/* Main column, set off from the sidebar by a thin rule */}
      <div className='mb-24 mt-8 min-w-0 flex-1 border-t border-neutral-200 pt-8 dark:border-white/10 lg:mt-16 lg:border-l lg:border-t-0 lg:pl-12 lg:pt-0'>
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className='text-lg leading-relaxed text-neutral-700 dark:text-neutral-300'
        >
          {t('bio')}
        </motion.p>

        {/* Education */}
        <Section title={t('education')}>
          <Entry
            title={t('edu1School')}
            titleHref='https://ens-paris-saclay.fr/en'
            sub={
              <>
                {t('edu1DegreePre')}
                <PersonLink href='https://www.master-mva.com/'>
                  {t('edu1DegreeMain')}
                </PersonLink>
                {t('edu1DegreeRest')}
              </>
            }
            date={t('edu1Date')}
            location={t('gifFrance')}
          >
            <Bullets>
              <Bullet>
                <span className='font-medium text-neutral-800 dark:text-neutral-200'>
                  {t('edu1CourseworkLabel')}
                </span>{' '}
                — {t('edu1Coursework')}
              </Bullet>
            </Bullets>
          </Entry>
          <Entry
            title={t('edu2School')}
            titleHref='https://www.ip-paris.fr/en'
            sub={
              <>
                {t('edu2DegreePre')}
                <PersonLink href='https://dataai.telecom-paris.fr'>
                  {t('edu2DegreeMain')}
                </PersonLink>
              </>
            }
            date={t('edu2Date')}
            location={t('palaiseauFrance')}
          >
            <Bullets>
              <Bullet>{t('edu2Point1')}</Bullet>
            </Bullets>
          </Entry>
          <Entry
            title={t('edu3School')}
            titleHref='https://www.kaist.ac.kr'
            sub={
              <>
                <PersonLink href='https://cs.kaist.ac.kr'>
                  {t('edu3DegreeMain')}
                </PersonLink>
                {t('edu3DegreeRest')}
              </>
            }
            date={t('edu3Date')}
            location={t('daejeonKorea')}
          />
        </Section>

        {/* Publications */}
        <Section title={t('publications')}>
          <Entry
            title={t('pub1Title')}
            titleHref='https://arxiv.org/abs/2610.16709'
            sub={
              <>
                <span className='font-medium text-neutral-800 dark:text-neutral-200'>
                  Kanghyeon Kim
                </span>
                , Johannes F. Lutzeyer, Yanzhu Guo
              </>
            }
            date={t('pub1Date')}
          >
            <p className='mt-1 text-sm text-neutral-600 dark:text-neutral-400'>
              {t('pub1Venue')}
              <PdfLink href='https://arxiv.org/abs/2610.16709' label='arXiv' />
              <PdfLink
                href='https://openreview.net/forum?id=LY0W4Qcohd'
                label='OpenReview'
              />
            </p>
          </Entry>
        </Section>

        {/* Research experience */}
        <Section title={t('experience')}>
          <Entry
            title={
              <>
                <TitleLink href='https://www.telecom-paris.fr/en/home'>
                  {t('exp1Org')}
                </TitleLink>
                {' & '}
                <TitleLink href='https://www.polytechnique.edu/en'>
                  {t('exp1Org2')}
                </TitleLink>
              </>
            }
            sub={
              <>
                {t('exp1Role')} — {t('supervisedBy')}{' '}
                <PersonLink href='https://johanneslutzeyer.com'>
                  {t('supLutzeyer')}
                </PersonLink>{' '}
                {t('andWord')}{' '}
                <PersonLink href='https://yanzhuguo.github.io'>
                  {t('supGuo')}
                </PersonLink>
              </>
            }
            date={t('exp1Date')}
            location={t('palaiseauFrance')}
          >
            <Bullets>
              <Bullet>{t('exp1Point1')}</Bullet>
              <Bullet>{t('exp1Point2')}</Bullet>
              <Bullet>{t('ongoingResearch')}</Bullet>
            </Bullets>
          </Entry>
          <Entry
            title={t('exp2Org')}
            titleHref='https://uilab.kr'
            sub={
              <>
                {t('exp2Role')} — {t('supervisedBy')}{' '}
                <PersonLink href='https://aliceoh9.github.io'>
                  {t('supOh')}
                </PersonLink>
              </>
            }
            date={t('exp2Date')}
            location={t('daejeonKorea')}
          >
            <Bullets>
              <Bullet>
                <span className='font-medium text-neutral-800 dark:text-neutral-200'>
                  {t('proj1Name')}
                </span>{' '}
                — {t('proj1Desc')}
                <PdfLink href='/documents/AAfLM.pdf' />
              </Bullet>
              <Bullet>
                <span className='font-medium text-neutral-800 dark:text-neutral-200'>
                  {t('proj2Name')}
                </span>{' '}
                — {t('proj2Desc')}
                <PdfLink href='/documents/FERT.pdf' />
              </Bullet>
            </Bullets>
          </Entry>
        </Section>

        {/* Talks */}
        <Section title={t('talks')}>
          <Entry
            title={t('talk1Title')}
            titleHref='https://arxiv.org/abs/2610.16709v1'
            sub={t('talk1Venue')}
            date={t('talk1Date')}
          />
        </Section>

        {/* Awards */}
        <Section title={t('awards')}>
          <Entry
            title={t('award1Title')}
            sub={t('award1Desc')}
            date={t('award1Date')}
          />
          <Entry
            title={t('award2Title')}
            sub={t('award2Desc')}
            date={t('award2Date')}
          />
        </Section>

        {/* Military service */}
        <Section title={t('military')}>
          <Entry
            title={t('milOrg')}
            sub={t('milDesc')}
            date={t('milDate')}
            location={t('busanKorea')}
          />
        </Section>

        {/* Skills & languages */}
        <Section title={t('skillsTitle')}>
          <dl className='grid items-baseline gap-x-8 gap-y-4 text-sm sm:grid-cols-[11rem_1fr]'>
            <dt className='text-neutral-500 dark:text-neutral-400'>
              {t('programmingLanguages')}
            </dt>
            <dd>
              <Chips>
                {PROGRAMMING.map((item) => (
                  <Chip key={item} main={item} />
                ))}
              </Chips>
            </dd>
            <dt className='text-neutral-500 dark:text-neutral-400'>
              {t('librariesTools')}
            </dt>
            <dd>
              <Chips>
                {LIBRARIES.map((item) => (
                  <Chip key={item} main={item} />
                ))}
              </Chips>
            </dd>
            <dt className='text-neutral-500 dark:text-neutral-400'>
              {t('researchAreas')}
            </dt>
            <dd>
              <Chips>
                {t('interests').map((item) => (
                  <Chip key={item} main={item} />
                ))}
              </Chips>
            </dd>
            <dt className='text-neutral-500 dark:text-neutral-400'>
              {t('languagesLabel')}
            </dt>
            <dd>
              <Chips>
                {t('languages').map(([name, level]) => (
                  <Chip key={name} main={name} detail={level} />
                ))}
              </Chips>
            </dd>
          </dl>
        </Section>

        {/* Recommendation */}
        <Section title={t('recommendation')}>
          <div>
            <blockquote className='border-l-2 border-accent/50 pl-5 leading-relaxed text-neutral-600 dark:text-neutral-400'>
              “{t('recQuote')}”
            </blockquote>
            <p className='mt-3 pl-5 text-sm text-neutral-500 dark:text-neutral-400'>
              —{' '}
              <PersonLink href='https://hikoseon12.github.io/'>
                {t('recAuthorName')}
              </PersonLink>
              {t('recAuthorRest')}
            </p>
          </div>
        </Section>
      </div>
    </div>
  );
}
