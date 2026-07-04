/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Gallery from './components/Gallery';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import QuoteModal from './components/QuoteModal';
import FloatingCTA from './components/FloatingCTA';

export default function App() {
  const [isQuoteOpen, setIsQuoteOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white font-sans antialiased text-slate-800 scroll-smooth selection:bg-brand-blue/10 selection:text-brand-blue">
      {/* Sticky header and alerts */}
      <Navbar onOpenQuote={() => setIsQuoteOpen(true)} />

      {/* Main Single-Page Sections */}
      <main>
        <Hero onOpenQuote={() => setIsQuoteOpen(true)} />
        <About />
        <Services onOpenQuote={() => setIsQuoteOpen(true)} />
        <Gallery />
        <Testimonials />
        <Contact />
      </main>

      {/* Premium Footer */}
      <Footer />

      {/* Persistent floating triggers for direct client reach */}
      <FloatingCTA />

      {/* Interactive Forms & Modals */}
      <QuoteModal isOpen={isQuoteOpen} onClose={() => setIsQuoteOpen(false)} />
    </div>
  );
}

