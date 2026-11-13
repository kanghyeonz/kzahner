import React, { createContext, useState, useContext, useEffect } from 'react';

// Create the theme context
const ThemeContext = createContext();

// Holds the theme only once the visitor picks one with the toggle. (The old
// key, 'theme', was written on every visit, so its values say nothing.)
const STORAGE_KEY = 'theme-choice';

// The visitor's own choice, if they made one.
const chosenTheme = () => {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    return saved === 'dark' || saved === 'light' ? saved : null;
  } catch (e) {
    return null;
  }
};

const systemPrefersDark = () =>
  typeof window !== 'undefined' &&
  window.matchMedia('(prefers-color-scheme: dark)').matches;

export const ThemeProvider = ({ children }) => {
  // Without a choice, the theme is the device's
  const [darkMode, setDarkMode] = useState(() => {
    const chosen = chosenTheme();
    return chosen ? chosen === 'dark' : systemPrefersDark();
  });

  // Apply theme whenever darkMode changes; colors are handled in CSS
  useEffect(() => {
    document.documentElement.classList.toggle('dark', darkMode);
  }, [darkMode]);

  // Follow the device while it changes, unless the visitor has chosen
  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const handleChange = (e) => {
      if (!chosenTheme()) setDarkMode(e.matches);
    };

    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  // Only the toggle saves a theme
  const toggleTheme = () => {
    const next = !darkMode;
    setDarkMode(next);
    try {
      localStorage.setItem(STORAGE_KEY, next ? 'dark' : 'light');
    } catch (e) {
      // Storage can be unavailable (private mode); the choice then lasts
      // for this visit.
    }
  };

  return (
    <ThemeContext.Provider value={{ darkMode, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

// Custom hook to use the theme context
export const useTheme = () => useContext(ThemeContext);
