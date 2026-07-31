/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import {AmbientBackground} from './components/AmbientBackground';
import {CuratedLinks} from './components/CuratedLinks';
import {Footer} from './components/Footer';
import {Header} from './components/Header';
import {Hero} from './components/Hero';
import {Pillars} from './components/Pillars';

export default function App() {
  return (
    <>
      <AmbientBackground />

      <div className="relative z-10 flex min-h-screen flex-col">
        <Header />

        <main className="mx-auto w-full max-w-[1200px] flex-1 px-6">
          <Hero />
          <div className="glass-divider my-12 md:my-16" />
          <Pillars />
          <div className="glass-divider my-12 md:my-16" />
          <CuratedLinks />
        </main>

        <Footer />
      </div>
    </>
  );
}
