import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';

const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer className='border-t border-neutral-200 dark:border-white/10'>
      <div className='mx-auto max-w-content px-5 py-8 text-sm text-neutral-500 dark:text-neutral-400'>
        <p>
          © {new Date().getFullYear()} {t('fullName')}
        </p>
      </div>
    </footer>
  );
};

export default Footer;
