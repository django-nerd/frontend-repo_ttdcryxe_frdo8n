import React, { useState } from 'react';

const Contact = () => {
  const [status, setStatus] = useState('');

  const onSubmit = (e) => {
    e.preventDefault();
    setStatus('Takk! Vi tar kontakt så snart som mulig.');
    e.currentTarget.reset();
  };

  return (
    <section id="contact" className="w-full bg-[#0d2135] py-20 text-[#eae6df]">
      <div className="mx-auto max-w-6xl px-6 sm:px-10">
        <div className="grid gap-10 md:grid-cols-2">
          <div>
            <h2 className="font-serif text-3xl text-[#f5efe6] sm:text-4xl">Kontakt</h2>
            <p className="mt-4 text-[#e5dccf]/90">
              Gamlevegen 89 A, 2615 Lillehammer, Norge
            </p>
            <p className="mt-1 text-[#e5dccf]/90">Telefon: <a className="text-[#c7a86b] hover:underline" href="tel:+4796653559">966 53 559</a></p>
            <div className="mt-6 rounded-xl border border-white/10 bg-white/5 p-4 text-sm text-[#e5dccf]/90">
              Åpningstider etter avtale. Ring eller fyll ut skjemaet, så finner vi en tid som passer.
            </div>
          </div>
          <form onSubmit={onSubmit} className="rounded-xl border border-white/10 bg-white/5 p-6 shadow-2xl shadow-black/20">
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="sm:col-span-1">
                <label className="mb-2 block text-sm">Navn</label>
                <input
                  type="text"
                  required
                  className="w-full rounded-md border border-white/10 bg-[#0b1b2b] px-3 py-2 text-[#eae6df] placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-[#c7a86b]/50"
                  placeholder="Ditt navn"
                />
              </div>
              <div className="sm:col-span-1">
                <label className="mb-2 block text-sm">Telefon</label>
                <input
                  type="tel"
                  required
                  className="w-full rounded-md border border-white/10 bg-[#0b1b2b] px-3 py-2 text-[#eae6df] placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-[#c7a86b]/50"
                  placeholder="966 53 559"
                />
              </div>
              <div className="sm:col-span-2">
                <label className="mb-2 block text-sm">Melding</label>
                <textarea
                  required
                  rows={4}
                  className="w-full rounded-md border border-white/10 bg-[#0b1b2b] px-3 py-2 text-[#eae6df] placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-[#c7a86b]/50"
                  placeholder="Hva kan vi hjelpe deg med?"
                />
              </div>
            </div>
            <button
              type="submit"
              className="mt-5 w-full rounded-md bg-[#c7a86b] px-4 py-3 text-sm font-semibold text-[#0b1b2b] shadow-lg shadow-black/20 transition hover:brightness-110"
            >
              Send forespørsel
            </button>
            {status && <p className="mt-3 text-sm text-[#c7a86b]">{status}</p>}
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
