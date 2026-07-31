/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import {GraduationCap, Scale, ShieldCheck} from 'lucide-react';
import type {LucideIcon} from 'lucide-react';
import {SectionLabel} from './SectionLabel';

type Pillar = {
  id: string;
  icon: LucideIcon;
  title: string;
  description: string;
};

const PILLARS: Pillar[] = [
  {
    id: 'safety-pillar',
    icon: ShieldCheck,
    title: 'AI Safety',
    description:
      'Prioritizing algorithmic safety, bias mitigation, and deterministic validation to ensure clinical deep learning algorithms never compromise patient care or clinical accuracy.',
  },
  {
    id: 'governance-pillar',
    icon: Scale,
    title: 'AI Governance',
    description:
      'Formulating policy structures, strict deployment pipelines, and ethical checklists that empower healthcare organizations to adopt clinical models responsibly.',
  },
  {
    id: 'education-pillar',
    icon: GraduationCap,
    title: 'AI Education',
    description:
      'Constructing specialized conceptual frameworks and training curricula to train future physicians.',
  },
];

export function Pillars() {
  return (
    <section id="pillars">
      <SectionLabel id="focus-heading">Core Strategic Focus</SectionLabel>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-3 lg:gap-8">
        {PILLARS.map(({id, icon: Icon, title, description}) => (
          <article
            key={id}
            id={id}
            className="glass-card group flex flex-col items-start p-9 lg:p-10">
            <div className="glass-chip mb-7 flex h-12 w-12 items-center justify-center rounded-xl text-[var(--accent-strong)] group-hover:-translate-y-0.5 group-hover:bg-[var(--accent-soft)]">
              <Icon size={24} strokeWidth={2} />
            </div>
            <h3 className="mb-3 text-xl font-bold tracking-tight">{title}</h3>
            <p className="text-[0.95rem] leading-relaxed text-[var(--text-secondary)]">
              {description}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}
