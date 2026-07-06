import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';

const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer className='border-t border-neutral-200 dark:border-white/10'>
      <div className='mx-auto flex max-w-content flex-col items-center justify-between gap-3 px-5 py-8 text-sm text-neutral-500 dark:text-neutral-400 sm:flex-row'>
        <p>
          © {new Date().getFullYear()} {t('fullName')}
        </p>
        <div className='flex items-center gap-5'>
          <span>kanghyeon.kim (at) polytechnique.edu</span>
          <a
            href='https://www.linkedin.com/in/kanghyeon-k-29ba44192/'
            target='_blank'
            rel='noopener noreferrer'
            className='transition-colors hover:text-neutral-900 dark:hover:text-neutral-100'
          >
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
