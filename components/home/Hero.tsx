import Link from "next/link";
import { Bolt, Flame, Waves } from "@/components/ui/Icons";

const marks = [
  { icon: Flame, label: "Vuur", text: "Verwarming en gas" },
  { icon: Bolt, label: "Stroom", text: "Elektra en domotica" },
  { icon: Waves, label: "Water", text: "Sanitair en leidingen" },
];

export default function Hero() {
  return (
    <section data-section="hero" className="bg-white">
      <div className="mx-auto grid max-w-6xl items-stretch gap-8 px-5 py-12 md:grid-cols-12 md:py-16">
        <div className="flex flex-col justify-center md:col-span-6">
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-blue">Ten Dam · Delden · sinds 1983</p>
          <h1 className="mt-3 text-4xl font-semibold text-navy md:text-5xl">Installeren is een vak. Wij verstaan ons vak.</h1>
          <p className="mt-4 text-lg text-navy/85">
            Van een lekkende kraan tot de complete installatie van uw woning of bedrijf – sinds 1983 vanuit Delden.
          </p>
          <ul className="mt-6 grid gap-3 sm:grid-cols-3">
            {marks.map((mark) => (
              <li key={mark.label} className="border border-navy/10 px-3 py-3">
                <mark.icon className="h-7 w-7" />
                <p className="mt-2 text-sm font-semibold">{mark.label}</p>
                <p className="text-sm text-navy/75">{mark.text}</p>
              </li>
            ))}
          </ul>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link href="/offerte" data-cta="offerte" className="inline-flex min-h-11 items-center bg-navy px-5 font-semibold text-white">
              Offerte of advies
            </Link>
            <Link href="/storing" data-cta="offerte" className="inline-flex min-h-11 items-center bg-urgent px-5 font-semibold text-white">
              Storing melden
            </Link>
          </div>
        </div>
        <figure className="relative md:col-span-6">
          <img
            src="/fotos/bedrijf/pand-delden-busjes.jpg"
            alt="Bedrijfspand van Ten Dam op het industrieterrein van Delden, met de bedrijfsbusjes ervoor"
            width={1800}
            height={948}
            className="h-full w-full object-cover"
          />
          <figcaption className="absolute bottom-0 left-0 right-0 bg-navy/90 px-4 py-3 text-sm text-white">
            Industrieterrein van Delden · kantoren, winkel en werkplaats sinds 1998
          </figcaption>
        </figure>
      </div>
    </section>
  );
}
