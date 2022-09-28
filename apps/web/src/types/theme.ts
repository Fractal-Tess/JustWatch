export const themes = ['dark', 'light'] as const;

export type Theme = typeof themes[number];

export type ThemeContext = {
  theme: Theme;
  toggleTheme: () => void;
};
