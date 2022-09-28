import { createContext } from 'react';
import type { Theme } from '$types';

export type ThemeState = {
  theme: Theme;
  toggleTheme: () => void;
};

export const ThemeCtx = createContext<ThemeState | null>(null);
