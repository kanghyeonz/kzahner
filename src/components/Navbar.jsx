import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import ThemeToggle from './ThemeToggle';
import LanguageToggle from './LanguageToggle';
import { useLanguage } from '../contexts/LanguageContext';

export default function Navbar() {
  const { t } = useLanguage();

  const linkClass = ({ isActive }) =>
    `px-3 py-1.5 text-sm transition-colors ${
      isActive
        ? 'font-medium text-neutral-900 dark:text-neutral-100'
        : 'text-neutral-500 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-neutral-100'
    }`;

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
          <NavLink to='/' end className={linkClass}>
            {t('navHome')}
          </NavLink>
          <NavLink to='/about' className={linkClass}>
            {t('navAbout')}
          </NavLink>
          <span
            className='mx-2 h-4 w-px bg-neutral-200 dark:bg-white/10'
            aria-hidden='true'
          />
          <LanguageToggle />
          <ThemeToggle />
        </div>
      </nav>
    </header>
  );
}
