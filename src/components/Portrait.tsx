/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import {useState} from 'react';
import headshotUrl from '../../assets/NAII_Headshot.webp';

/** CSS/SVG artwork shown if the headshot fails to load. */
function MedicalAiArtwork() {
  return (
    <div className="relative flex h-full w-full flex-col items-center justify-center bg-[radial-gradient(circle,var(--accent-soft)_0%,transparent_70%)]">
      <svg
        className="absolute h-1/2 w-1/2 opacity-10"
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg">
        <path
          d="M40 10H60V40H90V60H60V90H40V60H10V40H40V10Z"
          stroke="currentColor"
          strokeWidth="0.5"
        />
      </svg>

      <span className="animate-pulse-node absolute top-[25%] left-[30%] h-1.5 w-1.5 rounded-full bg-[var(--accent)] shadow-[0_0_8px_var(--accent)]" />
      <span className="animate-pulse-node absolute top-[40%] right-[25%] h-1.5 w-1.5 rounded-full bg-[var(--accent)] shadow-[0_0_8px_var(--accent)] [animation-delay:0.5s]" />
      <span className="animate-pulse-node absolute bottom-[30%] left-[45%] h-1.5 w-1.5 rounded-full bg-[var(--accent)] shadow-[0_0_8px_var(--accent)] [animation-delay:1s]" />

      <div className="relative z-10 text-[var(--accent-strong)] drop-shadow-[0_0_15px_var(--accent-soft)]">
        <svg
          className="h-18 w-18"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.25"
          xmlns="http://www.w3.org/2000/svg">
          <path
            d="M12 11C14.2091 11 16 9.20914 16 7C16 4.79086 14.2091 3 12 3C9.79086 3 8 4.79086 8 7C8 9.20914 9.79086 11 12 11Z"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M6 21V19C6 16.7909 7.79086 15 10 15H14C16.2091 15 18 16.7909 18 19V21"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <circle cx="12" cy="7" r="1.5" fill="currentColor" />
          <line x1="12" y1="11" x2="12" y2="15" strokeDasharray="2 2" />
        </svg>
      </div>
    </div>
  );
}

export function Portrait() {
  const [imageFailed, setImageFailed] = useState(false);

  return (
    <div className="relative flex items-center justify-center">
      <div className="relative flex h-70 w-70 items-center justify-center">
        {/* Orbiting vector rings */}
        <div className="animate-spin-cw pointer-events-none absolute h-[20.5rem] w-[20.5rem] rounded-full border border-dashed border-[var(--hairline)]" />
        <div className="animate-spin-ccw pointer-events-none absolute h-[18.75rem] w-[18.75rem] rounded-full border border-dotted border-[var(--accent)]/30" />

        {/* Glass lens holding the portrait */}
        <div className="group relative z-10 h-full w-full rounded-full p-px shadow-[0_24px_50px_-20px_rgba(2,4,20,0.8)] transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-1 hover:shadow-[0_30px_60px_-20px_var(--accent-soft)]">
          <div
            className="absolute inset-0 rounded-full opacity-40 transition-opacity duration-500 group-hover:opacity-100"
            style={{background: 'var(--accent-gradient)'}}
          />
          <div className="relative flex h-full w-full items-center justify-center overflow-hidden rounded-full border border-[var(--glass-border)] bg-[var(--glass-bg)] backdrop-blur-lg backdrop-saturate-150">
            {imageFailed ? (
              <MedicalAiArtwork />
            ) : (
              <img
                src={headshotUrl}
                alt="Dr. Andrew Borkowski, M.D."
                className="h-full w-full object-cover object-center"
                referrerPolicy="no-referrer"
                onError={() => setImageFailed(true)}
              />
            )}
          </div>
        </div>

        <span
          className="absolute -bottom-3 z-20 rounded-2xl px-5 py-1.5 text-[0.7rem] font-bold tracking-[0.08em] text-white uppercase shadow-[0_10px_24px_-8px_rgba(13,148,136,0.8)]"
          style={{background: 'var(--accent-gradient)'}}>
          AI Education
        </span>
      </div>
    </div>
  );
}
