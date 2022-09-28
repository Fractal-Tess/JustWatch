import { ThemeCtx } from '$context/Theme';
import { PropsWithChildren, useState } from 'react';
import { defaultTheme, type Theme } from '$types';
import Cookies from 'js-cookie';

const ONE_YEAR = 1000 * 86400 * 365;

type Props = {
  cookieTheme: Theme | null;
} & PropsWithChildren;

export default function ThemeWrapper({ children, cookieTheme }: Props) {
  const [theme, setTheme] = useState<Theme>(cookieTheme || defaultTheme);

  const toggleTheme = () => {
    const nextTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(nextTheme);
    Cookies.set('theme', nextTheme, {
      path: '/',
      expires: new Date(new Date().getTime() + ONE_YEAR)
    });
  };

  return (
    <ThemeCtx.Provider value={{ theme, toggleTheme }}>
      <div className={theme} data-theme={theme}>
        {children}
      </div>
    </ThemeCtx.Provider>
  );
}
