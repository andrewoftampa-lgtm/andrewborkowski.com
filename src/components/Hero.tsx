/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import {GraduationCap} from 'lucide-react';
import {Portrait} from './Portrait';

export function Hero() {
  return (
    <section
      id="about"
      className="grid grid-cols-1 items-center gap-14 py-16 md:grid-cols-[1.25fr_0.75fr] md:py-24">
      {/* Portrait sits first on mobile, second on desktop. */}
      <div className="animate-rise-in order-first md:order-last">
        <Portrait />
      </div>

      <div className="animate-rise-in flex flex-col items-center text-center md:items-start md:text-left [animation-delay:0.1s]">
        <div className="glass-chip mb-6 inline-flex items-center gap-2 rounded-full px-4 py-2 text-[0.7rem] font-bold tracking-[0.12em] text-[var(--accent-strong)] uppercase">
          <GraduationCap size={14} />
          University of South Florida
        </div>

        <h1 className="mb-4 text-[2.5rem] leading-[1.15] font-bold tracking-[-0.03em] lg:text-[3.5rem]">
          <span className="text-gradient">Andrew A. Borkowski, MD</span>
        </h1>

        <h2 className="mb-2 text-xl leading-tight font-semibold tracking-tight text-[var(--accent-strong)]">
          Professor of Pathology, Medicine, and Surgery
        </h2>
        <h2 className="mb-2 text-xl leading-tight font-semibold tracking-tight text-[var(--accent-strong)]">
          AI Curriculum Director, USF Morsani College of Medicine
        </h2>
        <h3 className="mb-10 text-[1.05rem] font-normal text-[var(--text-secondary)]">
          Former Chief AI Officer for the VA Sunshine Healthcare Network
        </h3>

        {/* The biography gets its own glass pane so the long paragraph keeps a
            readable, slightly opaque backdrop. */}
        <div className="glass-card w-full p-7 md:p-8">
          <p className="text-[1.05rem] leading-[1.8] text-[var(--text-secondary)] md:text-justify">
            Leveraging extensive leadership experience in healthcare technology,
            I now focus my efforts on the critical pillars of{' '}
            <strong className="font-semibold text-[var(--text-primary)]">
              AI Education
            </strong>
            ,{' '}
            <strong className="font-semibold text-[var(--text-primary)]">
              AI Governance
            </strong>
            , and{' '}
            <strong className="font-semibold text-[var(--text-primary)]">
              AI Safety
            </strong>
            . I work to establish the guardrails and educational frameworks
            necessary to implement deep learning in clinical settings
            responsibly. By bridging the gap between rapid technological
            innovation and patient safety, I am dedicated to building a future
            where AI enhances clinical decision-making within a secure and
            ethically governed ecosystem.
          </p>
        </div>
      </div>
    </section>
  );
}
