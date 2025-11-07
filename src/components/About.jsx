import React from 'react';

const About = () => {
  return (
    <section id="about" className="relative w-full bg-[#0b1b2b] py-20 text-[#eae6df]">
      <div className="mx-auto max-w-6xl px-6 sm:px-10">
        <div className="grid gap-12 md:grid-cols-2 md:items-center">
          <div>
            <h2 className="font-serif text-3xl text-[#f5efe6] sm:text-4xl">Norsk skreddersøm med sjel</h2>
            <p className="mt-6 leading-relaxed text-[#e5dccf]/90">
              Hos Jaboks Skredder møter tradisjon moderne presisjon. Vi bygger på norske håndverkstradisjoner
              og skaper plagg som sitter perfekt – tilpasset din kropp, din stil og din hverdag. Hvert sting
              er utført med omtanke, og hvert stoff er nøye valgt for å gi en følelse av kvalitet du merker.
            </p>
            <p className="mt-4 leading-relaxed text-[#e5dccf]/90">
              Fra første måltaking til siste finish får du personlig oppfølging. Enten du ønsker en skreddersydd dress,
              justering av favorittplagg eller reparasjon av arvestykker – vi ivaretar detaljene.
            </p>
          </div>
          <div className="relative">
            <div className="aspect-[4/3] w-full overflow-hidden rounded-xl bg-[radial-gradient(circle_at_30%_20%,rgba(199,168,107,0.25),transparent_40%),radial-gradient(circle_at_70%_80%,rgba(255,255,255,0.06),transparent_50%)] shadow-2xl shadow-black/30">
              <div className="h-full w-full bg-[linear-gradient(135deg,rgba(255,255,255,0.06)_0%,rgba(255,255,255,0.02)_100%)]" />
            </div>
            <div className="pointer-events-none absolute -inset-1 -z-0 rounded-xl bg-gradient-to-r from-[#c7a86b33] to-transparent blur" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
