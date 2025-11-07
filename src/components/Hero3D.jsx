import React from 'react';
import Spline from '@splinetool/react-spline';

const Hero3D = () => {
  return (
    <section id="home" className="relative min-h-[90vh] w-full overflow-hidden bg-[#0b1b2b]">
      {/* 3D background */}
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/5q6lqg9y04tSk2W1/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Soft gradient overlay to improve contrast */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-[#0b1b2bcc] via-[#0b1b2b99] to-[#0b1b2b]" />

      {/* Content */}
      <div className="relative z-10 mx-auto flex max-w-7xl flex-col items-start px-6 pt-28 pb-16 sm:px-10 lg:px-12">
        <span className="mb-6 inline-block rounded-full border border-[#c7a86b33] bg-white/5 px-4 py-1 text-[12px] tracking-wider text-[#c7a86b]">Jaboks Skredder • Lillehammer</span>
        <h1 className="font-serif text-4xl leading-tight text-[#f5efe6] sm:text-5xl md:text-6xl">
          Tradisjon møter presisjon.
        </h1>
        <p className="mt-6 max-w-2xl text-base leading-relaxed text-[#e5dccf]/90 sm:text-lg">
          Skreddersydde plagg med norsk kvalitet, håndverk og enestående passform. Vi kombinerer klassisk estetikk med moderne presisjon.
        </p>
        <div className="mt-10 flex items-center gap-4">
          <a
            href="#contact"
            className="rounded-full bg-[#c7a86b] px-6 py-3 text-sm font-medium text-[#0b1b2b] shadow-lg shadow-black/20 transition hover:brightness-110 focus:outline-none focus:ring-2 focus:ring-[#c7a86b]/60"
          >
            Bestill time
          </a>
          <a
            href="#services"
            className="rounded-full border border-[#c7a86b66] px-6 py-3 text-sm font-medium text-[#f5efe6]/90 transition hover:bg-white/5 focus:outline-none focus:ring-2 focus:ring-white/30"
          >
            Våre tjenester
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero3D;
