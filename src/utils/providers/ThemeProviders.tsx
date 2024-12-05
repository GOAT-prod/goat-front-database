'use client';

import type { ThemeProviderProps } from 'next-themes/dist/types';

import { ThemeProvider as NextThemesProvider } from 'next-themes';
import * as React from 'react';

export const ThemeProvider = ({ children, ...props }: ThemeProviderProps) => {
   return <NextThemesProvider {...props}>{children}</NextThemesProvider>;
};