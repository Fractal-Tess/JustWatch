import { Theme, themes } from '$types';
import { parse } from 'cookie';
import Cookies from 'js-cookie';
import { ThemeCtx } from '$context/Theme';

export type ThemeState = {
  theme: Theme;
  toggleTheme: () => void;
};

const isTheme = (theme: string): theme is Theme => {
  return themes.includes(theme as Theme);
};

export const getThemeFromCookie = (
  cookie: string | undefined
): Theme | null => {
  if (!cookie) return null;
  const { theme } = parse(cookie) as {
    theme: string | undefined;
  };
  if (!theme) return null;

  if (isTheme(theme)) {
    return theme;
  } else {
    console.log(`Received invalid theme: ${theme}`);
    return null;
  }
};
