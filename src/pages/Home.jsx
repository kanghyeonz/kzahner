import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FiLinkedin, FiMail, FiMapPin, FiArrowRight } from 'react-icons/fi';
import { useLanguage } from '../contexts/LanguageContext';
import SectionHeader from '../components/SectionHeader';

const fadeUp = {
  initial: { opacity: 0, y: 12 },
  animate: { opacity: 1, y: 0 },
};

export default function Home() {
  const { t } = useLanguage();

  const nowRows = [
    ['now1Title', 'now1Org', 'now1Date'],
    ['now2Title', 'now2Org', 'now2Date'],
    [
      'now3Title',
      'now3Org',
      'now3Date',
      'https://openreview.net/forum?id=LY0W4Qcohd',
    ],
  ];

  return (
    <div className='mx-auto max-w-content px-5'>
      {/* Hero */}
      <motion.section
        {...fadeUp}
        transition={{ duration: 0.4 }}
        className='flex flex-col gap-10 pt-14 sm:flex-row sm:items-center sm:justify-between sm:pt-20'
      >
        <div className='min-w-0'>
          <p className='text-sm font-medium text-accent dark:text-accent-soft'>
            {t('role')}
          </p>
          <h1 className='mt-2 text-4xl font-bold tracking-tight sm:text-5xl'>
            {t('fullName')}
          </h1>
          <p className='mt-2 text-lg text-neutral-400 dark:text-neutral-500'>
            {t('altNames')}
          </p>
          <p className='mt-5 leading-relaxed text-neutral-600 dark:text-neutral-400'>
            {t('bio')}
          </p>
          <div className='mt-6 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-neutral-600 dark:text-neutral-400'>
            <span className='inline-flex items-center gap-2'>
              <FiMail aria-hidden='true' />
              kanghyeon.kim (at) polytechnique.edu
            </span>
            <a
              href='https://www.linkedin.com/in/kanghyeon-k-29ba44192/'
              target='_blank'
              rel='noopener noreferrer'
              className='inline-flex items-center gap-2 transition-colors hover:text-accent dark:hover:text-accent-soft'
            >
              <FiLinkedin aria-hidden='true' />
              LinkedIn
            </a>
            <span className='inline-flex items-center gap-2'>
              <FiMapPin aria-hidden='true' />
              {t('currentAddress')}
            </span>
          </div>
          <p className='mt-3 text-xs text-neutral-400 dark:text-neutral-500'>
            {t('nameNote')}
          </p>
        </div>
        <img
          src='/img/kanghyeon.png'
          alt={t('fullName')}
          className='h-40 w-40 shrink-0 self-start rounded-2xl object-cover sm:h-48 sm:w-48 sm:self-auto'
        />
      </motion.section>

      {/* Currently */}
      <motion.section
        {...fadeUp}
        transition={{ duration: 0.4, delay: 0.1 }}
        className='mt-16 sm:mt-20'
      >
        <SectionHeader>{t('nowTitle')}</SectionHeader>
        <div className='mt-3 divide-y divide-neutral-200 dark:divide-white/10'>
          {nowRows.map(([title, org, date, href]) => (
            <div
              key={title}
              className='flex flex-col gap-1 py-4 sm:flex-row sm:items-baseline sm:gap-6'
            >
              <div className='min-w-0 flex-1'>
                <p className='font-medium text-neutral-900 dark:text-neutral-100'>
                  {t(title)}
                </p>
                <p className='mt-0.5 text-sm text-neutral-500 dark:text-neutral-400'>
                  {href ? (
                    <a
                      href={href}
                      target='_blank'
                      rel='noopener noreferrer'
                      className='transition-colors hover:text-accent dark:hover:text-accent-soft'
                    >
                      {t(org)}
                    </a>
                  ) : (
                    t(org)
                  )}
                </p>
              </div>
              <span className='shrink-0 font-mono text-xs text-neutral-400 dark:text-neutral-500'>
                {t(date)}
              </span>
            </div>
          ))}
        </div>
        <Link
          to='/about'
          className='mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-accent transition-colors hover:text-accent-dim dark:text-accent-soft dark:hover:text-accent'
        >
          {t('viewCV')}
          <FiArrowRight aria-hidden='true' />
        </Link>
      </motion.section>

      {/* Recommendation */}
      <motion.section
        {...fadeUp}
        transition={{ duration: 0.4, delay: 0.2 }}
        className='mb-24 mt-16 sm:mt-20'
      >
        <SectionHeader>{t('recommendation')}</SectionHeader>
        <blockquote className='mt-4 border-l-2 border-accent/50 pl-5 leading-relaxed text-neutral-600 dark:text-neutral-400'>
          “{t('recQuote')}”
        </blockquote>
        <p className='mt-3 pl-5 text-sm text-neutral-500 dark:text-neutral-400'>
          — {t('recAuthor')}
        </p>
      </motion.section>
    </div>
  );
}
