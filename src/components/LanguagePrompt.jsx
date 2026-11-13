import React, { useEffect, useRef } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { FiGlobe } from 'react-icons/fi';
import { useLanguage } from '../contexts/LanguageContext';
import { LANGUAGES, FLAG_SHADOW } from '../languages';

// Asks a first-time visitor for a language. The page behind it is already in
// the browser's preferred language, and that card is the one marked and in
// focus; Escape or a click outside keeps it.
const LanguagePrompt = () => {
  const { language, changeLanguage, needsChoice, t } = useLanguage();
  const currentRef = useRef(null);

  useEffect(() => {
    if (!needsChoice) return undefined;
    if (currentRef.current) currentRef.current.focus();
    const onKey = (event) => {
      if (event.key === 'Escape') changeLanguage(language);
    };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [needsChoice, language]);

  return (
    <AnimatePresence>
      {needsChoice && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className='fixed inset-0 z-[60] flex items-center justify-center bg-neutral-900/20 px-5 backdrop-blur-sm dark:bg-black/50'
          onClick={() => changeLanguage(language)}
        >
          <motion.div
            role='dialog'
            aria-modal='true'
            aria-label='Language · Sprache · 언어'
            initial={{ opacity: 0, y: 10, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 6, scale: 0.98 }}
            transition={{ duration: 0.25 }}
            className='w-full max-w-sm rounded-2xl border border-neutral-200 bg-white px-6 pb-5 pt-7 shadow-xl dark:border-white/10 dark:bg-neutral-900'
            onClick={(event) => event.stopPropagation()}
          >
            <h2 className='text-center text-2xl font-bold tracking-tight text-neutral-900 dark:text-neutral-100'>
              Kanghyeon Kim
            </h2>
            <p className='mt-1 text-center text-sm text-neutral-500 dark:text-neutral-400'>
              Language · Sprache · 언어
            </p>
            <div className='mt-6 grid grid-cols-3 gap-2.5'>
              {LANGUAGES.map((lang) => (
                <button
                  key={lang.code}
                  ref={lang.code === language ? currentRef : null}
                  onClick={() => changeLanguage(lang.code)}
                  aria-pressed={lang.code === language}
                  className={`flex flex-col items-center gap-2 rounded-xl border px-2 pb-3 pt-4 text-sm shadow-sm transition hover:-translate-y-0.5 hover:border-neutral-400 hover:shadow focus:outline-none focus-visible:ring-2 focus-visible:ring-accent/40 dark:shadow-none dark:hover:border-white/40 ${
                    lang.code === language
                      ? 'border-accent/60 bg-accent/5 text-neutral-900 dark:border-accent-soft/60 dark:bg-accent-soft/10 dark:text-neutral-100'
                      : 'border-neutral-200 bg-white text-neutral-700 dark:border-white/10 dark:bg-white/5 dark:text-neutral-300'
                  }`}
                >
                  <img
                    src={lang.flag}
                    alt=''
                    aria-hidden='true'
                    className='h-9 w-9'
                    style={FLAG_SHADOW}
                  />
                  <span>{lang.fullName}</span>
                </button>
              ))}
            </div>
            <p className='mt-5 flex items-center justify-center gap-1.5 font-sans text-xs text-neutral-400 dark:text-neutral-500'>
              <FiGlobe aria-hidden='true' className='h-3.5 w-3.5 shrink-0' />
              {t('languageHint')}
            </p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default LanguagePrompt;
