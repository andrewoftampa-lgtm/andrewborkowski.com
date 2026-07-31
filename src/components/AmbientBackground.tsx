/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

/**
 * The vivid canvas the frosted panels sit on. Glassmorphism only reads as
 * glass when there is something colourful and out of focus behind it, so this
 * is a set of slowly drifting gradient orbs plus a grain and dot-grid overlay.
 * Fixed to the viewport and non-interactive.
 */
export function AmbientBackground() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      {/* Base wash — a wide mesh gradient behind everything else. On phones
          this one element carries the whole canvas: see .mesh-wash in
          index.css, where the orb colours are baked into it as extra stops. */}
      <div className="mesh-wash absolute inset-0 bg-[radial-gradient(ellipse_90%_70%_at_15%_0%,rgba(56,189,248,0.30),transparent_60%),radial-gradient(ellipse_80%_60%_at_85%_15%,rgba(167,139,250,0.28),transparent_60%),radial-gradient(ellipse_90%_70%_at_50%_100%,rgba(45,212,191,0.22),transparent_65%)]" />

      {/* Drifting orbs. */}
      <div className="orb animate-drift-a -top-40 -left-32 h-[34rem] w-[34rem] bg-sky-400/35" />
      <div className="orb animate-drift-b -top-24 right-[-10rem] h-[30rem] w-[30rem] bg-violet-500/35" />
      <div className="orb animate-drift-c top-[38%] left-[45%] h-[26rem] w-[26rem] bg-fuchsia-500/22" />
      <div className="orb animate-drift-b bottom-[-12rem] left-[-6rem] h-[32rem] w-[32rem] bg-teal-400/28" />
      <div className="orb animate-drift-a right-[-8rem] bottom-[-10rem] h-[28rem] w-[28rem] bg-indigo-500/30" />

      {/* Veil knocks the saturation back so body text stays readable. */}
      <div className="absolute inset-0 bg-[var(--canvas-veil)]" />

      <div className="dot-grid" />
      <div className="grain" />
    </div>
  );
}
