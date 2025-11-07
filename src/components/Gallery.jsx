import React from 'react';

const items = Array.from({ length: 8 }).map((_, i) => ({ id: i + 1 }));

const Gallery = () => {
  return (
    <section id="gallery" className="w-full bg-[#0b1b2b] py-20 text-[#eae6df]">
      <div className="mx-auto max-w-6xl px-6 sm:px-10">
        <div className="mb-10 flex items-end justify-between">
          <div>
            <h2 className="font-serif text-3xl text-[#f5efe6] sm:text-4xl">Arbeider</h2>
            <p className="mt-3 max-w-2xl text-[#e5dccf]/90">
              Et utvalg av tidligere prosjekter – fremhevet i et rent rutenett med subtil dybde og tekstur.
            </p>
          </div>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {items.map((item) => (
            <div key={item.id} className="group relative overflow-hidden rounded-xl bg-white/5 shadow-2xl shadow-black/30">
              <div className="aspect-[4/5] w-full bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.06),transparent_40%),radial-gradient(circle_at_70%_70%,rgba(199,168,107,0.18),transparent_50%)]" />
              <div className="absolute inset-0 opacity-0 transition-opacity group-hover:opacity-100">
                <div className="h-full w-full bg-gradient-to-b from-transparent to-[#0b1b2bcc]" />
              </div>
              <div className="pointer-events-none absolute inset-0 shadow-[inset_0_0_60px_rgba(0,0,0,0.35)]" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
