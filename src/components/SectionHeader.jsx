import React from 'react';

const SectionHeader = ({ children }) => (
  <h2 className='border-b border-neutral-200 pb-2 text-xl font-bold tracking-tight text-neutral-900 dark:border-white/10 dark:text-neutral-100'>
    {children}
  </h2>
);

export default SectionHeader;
