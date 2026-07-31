/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

/** Centred uppercase section heading flanked by hairlines. */
export function SectionLabel({id, children}: {id?: string; children: string}) {
  return (
    <h2
      id={id}
      className="mb-12 flex items-center justify-center gap-4 text-center text-xs font-bold tracking-[0.25em] text-[var(--accent-strong)] uppercase">
      <span className="h-px w-8 bg-current opacity-40" />
      {children}
      <span className="h-px w-8 bg-current opacity-40" />
    </h2>
  );
}
