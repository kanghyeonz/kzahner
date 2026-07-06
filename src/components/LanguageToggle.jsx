import React, { useState, useRef, useEffect } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { FiGlobe } from 'react-icons/fi';

const LanguageToggle = () => {
  const languages = [
    { code: 'en', fullName: 'English' },
    { code: 'de', fullName: 'Deutsch' },
    { code: 'ko', fullName: '한국어' },
  ];

  const { language, changeLanguage } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);
  const buttonRef = useRef(null);

  // Handle clicks outside to close the dropdown
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target) &&
        buttonRef.current &&
        !buttonRef.current.contains(event.target)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('touchstart', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('touchstart', handleClickOutside);
    };
  }, []);

  const toggleDropdown = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsOpen(!isOpen);
  };

  const handleLanguageChange = (langCode, e) => {
    if (e) {
      e.preventDefault();
      e.stopPropagation();
    }
    changeLanguage(langCode);
    // Keep dropdown open briefly to provide visual feedback of selection
    setTimeout(() => {
      setIsOpen(false);
    }, 300);
  };

  return (
    <div className='relative inline-block'>
      <button
        ref={buttonRef}
        onClick={toggleDropdown}
        className='rounded-full p-2 text-neutral-500 transition-colors hover:bg-neutral-200/60 hover:text-neutral-900 dark:text-neutral-400 dark:hover:bg-white/10 dark:hover:text-neutral-100'
        aria-label='Change language'
        aria-expanded={isOpen}
      >
        <FiGlobe size={17} />
      </button>

      <div
        ref={dropdownRef}
        className={`absolute right-0 top-full z-50 w-32 pt-1 ${!isOpen ? 'hidden' : 'block'}`}
      >
        <div className='rounded-xl border border-neutral-200 bg-white py-1 shadow-lg dark:border-white/10 dark:bg-neutral-900'>
          {languages.map((lang) => (
            <button
              key={lang.code}
              onClick={(e) => handleLanguageChange(lang.code, e)}
              className={`flex w-full items-center px-3 py-2 text-left text-sm transition-colors hover:bg-neutral-100 dark:hover:bg-neutral-800 ${
                language === lang.code
                  ? 'font-medium text-accent dark:text-accent-soft'
                  : 'text-neutral-600 dark:text-neutral-300'
              }`}
            >
              <span className='mr-2 text-xs uppercase tabular-nums text-neutral-400 dark:text-neutral-500'>
                {lang.code}
              </span>
              <span>{lang.fullName}</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LanguageToggle;
