import React from 'react';
import { motion } from 'framer-motion';
import { FiLinkedin, FiMail, FiMapPin } from 'react-icons/fi';
import { useLanguage } from '../contexts/LanguageContext';
import SectionHeader from '../components/SectionHeader';

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

const Entry = ({ title, titleHref, sub, date, location, children }) => (
  <div>
    <div className='flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1'>
      <h3 className='font-semibold text-neutral-900 dark:text-neutral-100'>
        {titleHref ? (
          <a
            href={titleHref}
            target='_blank'
            rel='noopener noreferrer'
            className='transition-colors hover:text-accent dark:hover:text-accent-soft'
          >
            {title}
          </a>
        ) : (
          title
        )}
      </h3>
      <span className='shrink-0 font-mono text-xs text-neutral-400 dark:text-neutral-500'>
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

const PdfLink = ({ href }) => (
  <a
    href={href}
    target='_blank'
    rel='noopener noreferrer'
    className='ml-1.5 whitespace-nowrap text-sm font-medium text-accent transition-colors hover:text-accent-dim dark:text-accent-soft dark:hover:text-accent'
  >
    [PDF]
  </a>
);

const About = () => {
  const { t } = useLanguage();

  return (
    <div className='mx-auto max-w-content px-5 pb-24'>
      {/* Header & contact */}
      <motion.header
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className='pt-14 sm:pt-20'
      >
        <h1 className='text-3xl font-bold tracking-tight sm:text-4xl'>
          {t('aboutMe')}
        </h1>
        <div className='mt-5 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-neutral-600 dark:text-neutral-400'>
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
            Kanghyeon Kim
          </a>
          <span className='inline-flex items-center gap-2'>
            <FiMapPin aria-hidden='true' />
            {t('currentAddress')}
          </span>
        </div>
        <p className='mt-4 max-w-2xl text-xs leading-relaxed text-neutral-400 dark:text-neutral-500'>
          {t('citizenInfo')} · {t('nameExplanation')}
        </p>
      </motion.header>

      {/* Research interests */}
      <Section title={t('interestsTitle')}>
        <p className='leading-relaxed text-neutral-600 dark:text-neutral-400'>
          {t('interestsBody')}
        </p>
      </Section>

      {/* Research experience */}
      <Section title={t('experience')}>
        <Entry
          title={t('exp1Org')}
          titleHref='https://www.telecom-paris.fr/en/home'
          sub={`${t('exp1Role')} — ${t('exp1Sup')}`}
          date={t('exp1Date')}
          location={t('palaiseauFrance')}
        >
          <Bullets>
            <Bullet>{t('exp1Point1')}</Bullet>
            <Bullet>{t('exp1Point2')}</Bullet>
            <Bullet>{t('exp1Point3')}</Bullet>
            <Bullet>{t('acceptedPaper')}</Bullet>
            <Bullet>{t('ongoingResearch')}</Bullet>
          </Bullets>
        </Entry>
        <Entry
          title={t('exp2Org')}
          titleHref='https://uilab.kr'
          sub={`${t('exp2Role')} — ${t('exp2Sup')}`}
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

      {/* Education */}
      <Section title={t('education')}>
        <Entry
          title={t('edu1School')}
          titleHref='https://www.master-mva.com/'
          sub={t('edu1Degree')}
          date={t('edu1Date')}
          location={t('gifFrance')}
        />
        <Entry
          title={t('edu2School')}
          titleHref='https://www.ip-paris.fr/en/education/masters/computer-science-program/master-year-1-data-and-artificial-intelligence'
          sub={t('edu2Degree')}
          date={t('edu2Date')}
          location={t('palaiseauFrance')}
        >
          <Bullets>
            <Bullet>{t('edu2Point1')}</Bullet>
            <Bullet>{t('edu2Point2')}</Bullet>
          </Bullets>
        </Entry>
        <Entry
          title={t('edu3School')}
          titleHref='https://cs.kaist.ac.kr'
          sub={t('edu3Degree')}
          date={t('edu3Date')}
          location={t('daejeonKorea')}
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
        <dl className='grid gap-x-8 gap-y-3 text-sm sm:grid-cols-[11rem_1fr]'>
          <dt className='text-neutral-500 dark:text-neutral-400'>
            {t('programmingLanguages')}
          </dt>
          <dd className='text-neutral-800 dark:text-neutral-200'>
            {t('programmingValue')}
          </dd>
          <dt className='text-neutral-500 dark:text-neutral-400'>
            {t('librariesTools')}
          </dt>
          <dd className='text-neutral-800 dark:text-neutral-200'>
            {t('librariesValue')}
          </dd>
          <dt className='text-neutral-500 dark:text-neutral-400'>
            {t('researchAreas')}
          </dt>
          <dd className='text-neutral-800 dark:text-neutral-200'>
            {t('researchAreasValue')}
          </dd>
          <dt className='text-neutral-500 dark:text-neutral-400'>
            {t('languagesLabel')}
          </dt>
          <dd className='space-y-1 text-neutral-800 dark:text-neutral-200'>
            <p>{t('koreanNative')}</p>
            <p>{t('englishLevel')}</p>
            <p>{t('frenchLevel')}</p>
            <p>{t('germanLevel')}</p>
          </dd>
        </dl>
      </Section>
    </div>
  );
};

export default About;
