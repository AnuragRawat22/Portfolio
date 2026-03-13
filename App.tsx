import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Footer from './components/Footer';
import MobileNav from './components/MobileNav';

import { DockDemo } from './components/DockDemo';

const App: React.FC = () => {
  return (
    <div className="min-h-screen relative">
      <Navbar />

      <main className="pt-24 pb-32 max-w-5xl mx-auto px-4">
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <DockDemo />
      </main>

      <Footer />
      <MobileNav />
    </div>
  );
};

export default App;