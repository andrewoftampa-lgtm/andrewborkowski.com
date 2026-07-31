/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import {ArrowRight, Book, GraduationCap, Linkedin, Mail} from 'lucide-react';
import type {LucideIcon} from 'lucide-react';
import {SectionLabel} from './SectionLabel';

type LinkCard = {
  id: string;
  href: string;
  external: boolean;
  icon: LucideIcon;
  badge: string;
  title: string;
  description: string;
  action: string;
  ariaLabel: string;
};

const LINKS: LinkCard[] = [
  {
    id: 'blog-card',
    href: 'https://tampapath.medium.com/',
    external: true,
    icon: Book,
    badge: 'Insights',
    title: 'Medium Blog',
    description:
      'Articles exploring Medical AI, quantum, and deep learning technologies.',
    action: 'Read Articles',
    ariaLabel: 'Read my blog on Medium',
  },
  {
    id: 'scholar-card',
    href: 'https://scholar.google.com/citations?hl=en&user=y1guAFgAAAAJ&view_op=list_works&sortby=pubdate',
    external: true,
    icon: GraduationCap,
    badge: 'Scholarly Work',
    title: 'Google Scholar',
    description: 'Peer-reviewed publications.',
    action: 'View Publications',
    ariaLabel: 'View publications on Google Scholar',
  },
  {
    id: 'linkedin-card',
    href: 'https://www.linkedin.com/in/andrewborkowski/',
    external: true,
    icon: Linkedin,
    badge: 'Network',
    title: 'LinkedIn Profile',
    description:
      'Professional leadership record, network connections, updates in Healthcare AI initiatives and Educational AI.',
    action: 'Connect on LinkedIn',
    ariaLabel: 'Connect on LinkedIn',
  },
  {
    id: 'email-card',
    href: 'mailto:andrew@usf.edu',
    external: false,
    icon: Mail,
    badge: 'Correspondence',
    title: 'Academic Correspondence',
    description:
      'Reach out directly via email for academic inquiries, speaking opportunities, healthcare policy reviews, or educational collaborative work.',
    action: 'Send Email',
    ariaLabel: 'Send an email to andrew@usf.edu',
  },
];

export function CuratedLinks() {
  return (
    <section id="portfolio" className="mb-20">
      <SectionLabel id="links-heading">Curated Professional Links</SectionLabel>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:gap-8">
        {LINKS.map((link) => {
          const Icon = link.icon;
          return (
            <a
              key={link.id}
              id={link.id}
              href={link.href}
              aria-label={link.ariaLabel}
              {...(link.external
                ? {target: '_blank', rel: 'noopener noreferrer'}
                : {})}
              className="glass-card group flex flex-col justify-between p-8 text-inherit no-underline lg:p-10">
              <div className="mb-7 flex items-center justify-between gap-4">
                <div className="glass-chip flex h-12 w-12 items-center justify-center rounded-xl text-[var(--accent-strong)] group-hover:-translate-y-0.5 group-hover:bg-[var(--accent-soft)]">
                  <Icon size={22} strokeWidth={2} />
                </div>
                <span className="glass-chip rounded-2xl px-3.5 py-1.5 text-[0.65rem] font-bold tracking-[0.1em] text-[var(--text-secondary)] uppercase group-hover:text-[var(--accent-strong)]">
                  {link.badge}
                </span>
              </div>

              <div className="mb-8">
                <h3 className="mb-2 text-2xl font-bold tracking-tight">
                  {link.title}
                </h3>
                <p className="text-[0.95rem] leading-relaxed text-[var(--text-secondary)]">
                  {link.description}
                </p>
              </div>

              <div className="flex items-center gap-2 text-[0.85rem] font-semibold text-[var(--accent-strong)]">
                {link.action}
                <ArrowRight
                  size={16}
                  strokeWidth={2.5}
                  className="transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-x-1"
                />
              </div>
            </a>
          );
        })}
      </div>
    </section>
  );
}
