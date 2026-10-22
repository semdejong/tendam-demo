import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/ui/PageHero";

export const metadata: Metadata = {
  title: "Over ons",
  description: "Installatiebedrijf Ten Dam in Delden, sinds 1983. Loodgieters, elektriciens en een ijzerwarenwinkel.",
};

const links = [
  ["/over-ons/geschiedenis", "Geschiedenis"],
  ["/over-ons/werkwijze", "Werkwijze"],
  ["/over-ons/erkenningen", "Erkenningen"],
  ["/over-ons/erkend-leerbedrijf", "Erkend leerbedrijf"],
  ["/over-ons/ons-team", "Ons team"],
  ["/over-ons/in-de-media", "In de media"],
  ["/over-ons/mvo", "MVO"],
  ["/over-ons/sponsoring", "Sponsoring"],
  ["/werken-bij", "Werken bij"],
  ["/over-ons/leveringsvoorwaarden", "Leveringsvoorwaarden"],
];

export default function OverOnsPage() {
  return (
    <>
      <PageHero
        section="over-ons"
        eyebrow="Over ons"
        title="Installeren is een vak. Wij verstaan ons vak."
        text="Sinds 1983 is Ten Dam uitgegroeid tot een specialist op het gebied van elektrotechniek, cv-installaties, dakbedekking en loodgieterswerk. Vanuit Delden, voor particulieren en bedrijven."
      />
      <section data-section="over-ons-tekst" className="mx-auto grid max-w-6xl gap-8 px-5 py-12 md:grid-cols-2">
        <img
          src="/fotos/bedrijf/bus-bij-restauratie.jpg"
          alt="Rode bedrijfsbus van Ten Dam voor een gerestaureerd pand"
          width={1400}
          height={900}
          loading="lazy"
          className="h-auto w-full object-cover"
        />
        <div className="space-y-4">
          <p>
            Het team bestaat uit goed opgeleide, vakbekwame en ervaren loodgieters en elektriciens die multi-inzetbaar zijn. Een klein administratief team ondersteunt hen.
          </p>
          <p>
            Loodgieterswerk, dakbedekking, cv en alle elektrotechnische disciplines vormen samen één pakket. Opdrachtgevers kunnen die diensten apart of gecombineerd afnemen.
          </p>
          <ul className="grid gap-2 sm:grid-cols-2">
            {links.map(([href, label]) => (
              <li key={href}>
                <Link href={href} className="inline-flex min-h-11 items-center font-semibold text-blue underline-offset-4 hover:underline">
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
