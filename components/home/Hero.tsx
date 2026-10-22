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
      <div className="mx-auto grid max-w-6xl items-stretch gap-8 px-5 py-8 md:grid-cols-12 md:py-16">
        <div className="flex flex-col justify-center md:col-span-6">
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-blue">Ten Dam · Delden · sinds 1983</p>
          <h1 className="mt-3 text-4xl font-semibold text-navy md:text-5xl">Installeren is een vak. Wij verstaan ons vak.</h1>
          <p className="mt-4 text-lg text-navy/85">
            Van een lekkende kraan tot de complete installatie van uw woning of bedrijf – sinds 1983 vanuit Delden.
          </p>
          <ul className="mt-6 grid grid-cols-3 gap-2">
            {marks.map((mark) => (
              <li key={mark.label} className="border border-navy/10 px-2 py-2 sm:px-3 sm:py-3">
                <mark.icon className="h-6 w-6 sm:h-7 sm:w-7" />
                <p className="mt-1 text-sm font-semibold">{mark.label}</p>
                <p className="text-xs text-navy/75 sm:text-sm">{mark.text}</p>
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
        <figure className="flex flex-col md:col-span-6">
          <img
            src="/fotos/bedrijf/pand-delden-busjes.jpg"
            alt="Bedrijfspand van Ten Dam op het industrieterrein van Delden, met de bedrijfsbusjes ervoor"
            width={1800}
            height={948}
            className="order-2 h-44 w-full object-cover object-[center_35%] sm:h-64 md:order-1 md:h-auto"
          />
          <figcaption className="order-1 mb-2 text-sm text-navy/75 md:order-2 md:mb-0 md:bg-navy md:px-4 md:py-3 md:text-white">
            Industrieterrein van Delden · kantoren, winkel en werkplaats sinds 1998
          </figcaption>
        </figure>
      </div>
    </section>
  );
}
