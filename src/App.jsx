import React from 'react';
import Hero3D from './components/Hero3D';
import About from './components/About';
import ServicesAndGallery from './components/ServicesAndGallery';
import Contact from './components/Contact';

const App = () => {
  return (
    <div className="min-h-screen w-full bg-[#0b1b2b] font-sans">
      {/* Top navigation */}
      <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-[#0b1b2bcc] backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 sm:px-10 lg:px-12">
          <a href="#home" className="flex items-center gap-3">
            <div className="h-8 w-8 rounded-full bg-gradient-to-br from-[#c7a86b] to-[#9c7f42] shadow-inner" />
            <span className="font-serif text-lg text-[#f5efe6]">Jaboks Skredder</span>
          </a>
          <nav className="hidden gap-6 text-sm text-[#eae6df]/90 md:flex">
            <a href="#about" className="hover:text-[#c7a86b]">Om oss</a>
            <a href="#services" className="hover:text-[#c7a86b]">Tjenester</a>
            <a href="#gallery" className="hover:text-[#c7a86b]">Galleri</a>
            <a href="#contact" className="hover:text-[#c7a86b]">Kontakt</a>
          </nav>
          <a href="#contact" className="hidden rounded-full bg-[#c7a86b] px-4 py-2 text-xs font-semibold text-[#0b1b2b] md:block">Bestill time</a>
        </div>
      </header>

      <main className="pt-16">
        <Hero3D />
        <About />
        <ServicesAndGallery />
        <Contact />
      </main>

      <footer className="border-t border-white/10 bg-[#0b1b2b] py-8 text-[#eae6df]">
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-4 px-6 sm:flex-row sm:px-10 lg:px-12">
          <div>
            <p className="font-serif text-[#f5efe6]">Jaboks Skredder</p>
            <p className="text-sm text-[#e5dccf]/90">Gamlevegen 89 A, 2615 Lillehammer • Telefon: 966 53 559</p>
          </div>
          <p className="text-sm text-[#e5dccf]/80">Org.nr 919955244</p>
        </div>
      </footer>
    </div>
  );
};

export default App;
