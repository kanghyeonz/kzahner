import React from 'react';

const SectionHeader = ({ children }) => (
  <h2 className='text-xs font-semibold uppercase tracking-[0.2em] text-accent dark:text-accent-soft'>
    {children}
  </h2>
);

export default SectionHeader;
