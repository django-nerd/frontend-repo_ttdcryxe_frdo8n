import React from 'react';

const services = [
  {
    title: 'Skreddersøm',
    description:
      'Unike plagg designet og tilpasset fra bunnen av. Materialer av høy kvalitet og presist håndverk.',
  },
  {
    title: 'Justeringer',
    description:
      'Opplegg, innsying, utsying og tilpasning for perfekt passform – fra kjoler til dresser.',
  },
  {
    title: 'Skreddersydde dresser',
    description:
      'Klassiske og moderne dresser etter mål, med valg av stoff, snitt og detaljer.',
  },
  {
    title: 'Reparasjon',
    description:
      'Forleng levetiden til favorittplaggene dine med profesjonelle reparasjoner og forsterkninger.',
  },
];

const Services = () => {
  return (
    <section id="services" className="w-full bg-[#0d2135] py-20 text-[#eae6df]">
      <div className="mx-auto max-w-6xl px-6 sm:px-10">
        <h2 className="font-serif text-3xl text-[#f5efe6] sm:text-4xl">Tjenester</h2>
        <p className="mt-4 max-w-2xl text-[#e5dccf]/90">
          Vi leverer presise tilpasninger, skreddersøm og varige reparasjoner – alltid med fokus på kvalitet og passform.
        </p>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((s) => (
            <div
              key={s.title}
              className="group relative overflow-hidden rounded-xl border border-white/10 bg-white/5 p-6 shadow-2xl shadow-black/20 transition hover:bg-white/[0.07]"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[#c7a86b14] to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
              <h3 className="relative z-10 font-serif text-xl text-[#f5efe6]">{s.title}</h3>
              <p className="relative z-10 mt-3 text-sm leading-relaxed text-[#e5dccf]/90">{s.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
