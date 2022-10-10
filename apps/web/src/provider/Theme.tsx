import type { Theme } from '$types';
import React, { useEffect, useState } from 'react';

type ThemeContext = {
  theme: Theme;
  toggleTheme: () => void;
};

export const ThemeCtx = React.createContext<ThemeContext | null>(null);

const invertTheme = (theme: Theme) => (theme === 'dark' ? 'light' : 'dark');

const getTheme = (): Theme => {
  let theme = localStorage.getItem('theme') as Theme | null;

  if (!theme) {
    theme = window.matchMedia('(prefers-color-scheme: dark)').matches
      ? 'dark'
      : 'light';
    localStorage.setItem('theme', theme);
  }
  return theme;
};

export const ThemeProvider = ({ children }: React.PropsWithChildren) => {
  const [theme, setTheme] = useState<Theme>(getTheme());

  const toggleTheme = () => {
    console.log(theme);
    const toggledTheme = invertTheme(theme);
    setTheme(toggledTheme);
    localStorage.setItem('theme', toggledTheme);
  };

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    document.documentElement.classList.value = theme;
  }, [theme]);
  return (
    <>
      <ThemeCtx.Provider value={{ theme, toggleTheme }}>
        {children}
      </ThemeCtx.Provider>
    </>
  );
};
