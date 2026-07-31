/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import {useCallback, useEffect, useState} from 'react';

type Theme = 'dark' | 'light';

/**
 * Theme state, persisted to localStorage under the same `theme` key the
 * previous build used. The initial value is read off <html>, which the inline
 * script in index.html sets before first paint to avoid a flash.
 */
export function useTheme() {
  const [theme, setTheme] = useState<Theme>(() =>
    document.documentElement.classList.contains('light') ? 'light' : 'dark',
  );

  useEffect(() => {
    // Applied first, so the theme still works even if persistence fails.
    document.documentElement.classList.toggle('light', theme === 'light');
    try {
      localStorage.setItem('theme', theme);
    } catch {
      // Site data blocked: the choice applies but won't survive a reload.
    }
  }, [theme]);

  const toggleTheme = useCallback(
    () => setTheme((current) => (current === 'dark' ? 'light' : 'dark')),
    [],
  );

  return {theme, toggleTheme};
}
