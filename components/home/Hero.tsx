import Link from "next/link";

export default function Hero() {
  return (
    <section data-section="hero" className="bg-white">
      <div className="mx-auto grid max-w-6xl items-center gap-8 px-5 py-12 md:grid-cols-12 md:py-16">
        <div className="md:col-span-6">
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-blue">Ten Dam · Delden · sinds 1983</p>
          <h1 className="mt-3 text-4xl font-semibold text-navy md:text-5xl">Installeren is een vak. Wij verstaan ons vak.</h1>
          <p className="mt-4 text-lg text-navy/85">
            Van een lekkende kraan tot de complete installatie van uw woning of bedrijf – sinds 1983 vanuit Delden.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link href="/offerte" data-cta="offerte" className="inline-flex min-h-11 items-center bg-navy px-5 font-semibold text-white">
              Offerte of advies
            </Link>
            <Link href="/storing" data-cta="offerte" className="inline-flex min-h-11 items-center bg-urgent px-5 font-semibold text-white">
              Storing melden
            </Link>
          </div>
        </div>
        <div className="relative md:col-span-6">
          <img
            src="/fotos/bedrijf/pand-delden-busjes.jpg"
            alt="Bedrijfspand van Ten Dam op het industrieterrein van Delden, met de bedrijfsbusjes ervoor"
            width={1800}
            height={948}
            className="h-auto w-full object-cover"
          />
          <svg className="draw pointer-events-none absolute inset-3 h-[calc(100%-1.5rem)] w-[calc(100%-1.5rem)]" viewBox="0 0 400 220" aria-hidden>
            <path d="M8 20 H120" fill="none" stroke="#8BB2DC" strokeWidth="1.5" />
            <path d="M8 20 V90" fill="none" stroke="#8BB2DC" strokeWidth="1.5" />
            <path d="M300 190 H392 V120" fill="none" stroke="#D21F26" strokeWidth="1.5" />
            <path d="M40 180c30 16 50 16 80 0s50-16 80 0" fill="none" stroke="#8BB2DC" strokeWidth="1.5" />
          </svg>
        </div>
      </div>
    </section>
  );
}
