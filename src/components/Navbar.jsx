import React from 'react';
import { Link } from 'react-router-dom';
import ThemeToggle from './ThemeToggle';
import LanguageToggle from './LanguageToggle';
import { useLanguage } from '../contexts/LanguageContext';

export default function Navbar() {
  const { t } = useLanguage();

  return (
    <header className='fixed inset-x-0 top-0 z-50 border-b border-neutral-200/70 bg-neutral-50/85 backdrop-blur dark:border-white/10 dark:bg-neutral-950/85'>
      <nav className='mx-auto flex h-14 max-w-content items-center justify-between px-5'>
        <Link
          to='/'
          className='font-semibold tracking-tight text-neutral-900 dark:text-neutral-100'
        >
          <span className='sm:hidden'>KK</span>
          <span className='hidden sm:inline'>{t('fullName')}</span>
        </Link>
        <div className='flex items-center gap-1'>
          <LanguageToggle />
          <ThemeToggle />
        </div>
      </nav>
    </header>
  );
}
