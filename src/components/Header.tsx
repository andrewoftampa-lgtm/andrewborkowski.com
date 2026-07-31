/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import {Moon, Sun} from 'lucide-react';
import {useTheme} from '../hooks/useTheme';

function LogoMark() {
  return (
    <div
      className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl text-white shadow-[0_8px_24px_-8px_rgba(56,189,248,0.9)]"
      style={{background: 'var(--accent-gradient)'}}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="22"
        height="22"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round">
        <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" />
        <path d="M12 6v12" />
        <path d="M6 12h12" />
        <circle cx="12" cy="12" r="3" fill="currentColor" fillOpacity="0.3" />
      </svg>
    </div>
  );
}

export function Header() {
  const {theme, toggleTheme} = useTheme();

  return (
    <header
      id="header"
      className="glass sticky top-0 z-50 rounded-none border-x-0 border-t-0">
      <div className="mx-auto flex h-20 w-full max-w-[1200px] items-center justify-between gap-4 px-6">
        <a
          href="#"
          className="group flex items-center gap-3 no-underline"
          aria-label="Dr. Andrew Borkowski Home">
          <LogoMark />
          <span className="text-gradient text-[0.95rem] font-bold tracking-tight sm:text-[1.15rem]">
            physician | scientist | teacher | creator | innovator
          </span>
        </a>

        <button
          type="button"
          onClick={toggleTheme}
          className="glass-button flex h-11 w-11 shrink-0 items-center justify-center rounded-full"
          aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} theme`}>
          {theme === 'dark' ? <Moon size={18} /> : <Sun size={18} />}
        </button>
      </div>
    </header>
  );
}
