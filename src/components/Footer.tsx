/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import {ChevronUp} from 'lucide-react';

const FOOTER_LINKS = [
  {label: 'Blog', href: 'https://tampapath.medium.com/', external: true},
  {
    label: 'Scholar',
    href: 'https://scholar.google.com/citations?hl=en&user=y1guAFgAAAAJ&view_op=list_works&sortby=pubdate',
    external: true,
  },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/andrewborkowski/',
    external: true,
  },
  {label: 'Email', href: 'mailto:andrewborkowskimd@gmail.com', external: false},
];

export function Footer() {
  return (
    <footer
      id="footer"
      className="glass mt-auto rounded-none border-x-0 border-b-0 py-12 text-[0.85rem] text-[var(--text-muted)]">
      <div className="mx-auto flex w-full max-w-[1200px] flex-col items-center gap-6 px-6 text-center md:flex-row md:justify-between md:text-left">
        <div className="flex flex-col gap-2">
          <p>&copy; 2026 Andrew A. Borkowski, M.D. All rights reserved.</p>
          <p>
            Professor of Pathology, Medicine, and Surgery | USF Morsani College
            of Medicine
          </p>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-6">
          {FOOTER_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              {...(link.external
                ? {target: '_blank', rel: 'noopener noreferrer'}
                : {})}
              className="no-underline transition-colors duration-300 hover:text-[var(--accent-strong)]">
              {link.label}
            </a>
          ))}

          <a
            href="#header"
            aria-label="Scroll back to top"
            className="glass-button flex h-9 w-9 items-center justify-center rounded-full text-[var(--text-secondary)] no-underline">
            <ChevronUp size={16} strokeWidth={2.5} />
          </a>
        </div>
      </div>
    </footer>
  );
}
