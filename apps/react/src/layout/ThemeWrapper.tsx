import { ThemeCtx } from '$context/theme';
import { useEffect, useState, type PropsWithChildren } from 'react';
import type { Theme as TypeTheme } from '$types';

const invertTheme = (theme: TypeTheme) => (theme === 'dark' ? 'light' : 'dark');

const getTheme = (): TypeTheme => {
  let theme = localStorage.getItem('theme') as TypeTheme | null;

  if (!theme) {
    theme = window.matchMedia('(prefers-color-scheme: dark)').matches
      ? 'dark'
      : 'light';
    localStorage.setItem('theme', theme);
  }
  return theme;
};

export default function Theme(props: PropsWithChildren) {
  const [theme, setTheme] = useState<TypeTheme>(getTheme());

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
    <ThemeCtx.Provider value={{ theme, toggleTheme }}>
      {props.children}
    </ThemeCtx.Provider>
  );
}
