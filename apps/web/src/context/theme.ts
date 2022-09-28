import type { ThemeContext } from '$types';

import React from 'react';

export const ThemeCtx = React.createContext<ThemeContext | null>(null);
