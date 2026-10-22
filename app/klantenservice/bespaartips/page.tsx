import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/ui/PageHero";

export const metadata: Metadata = {
  title: "Bespaartips",
  description: "Bespaartips van Ten Dam voor pomp, thermostaatkranen, modulerende thermostaat en naregeling.",
};

const tips = [
  {
    title: "Energiezuinige A-label pomp",
    text: "Circulatiepompen draaien vaak het hele jaar. Vervanging door een hoogrendementspomp kan volgens Ten Dam een besparing tot 90 procent opleveren. Een voortijdige vervanging is daardoor vaak al na enkele jaren terugverdiend.",
  },
  {
    title: "Pompschakelaar",
    text: "Een pompschakelaar meet de aanvoertemperatuur en schakelt de pomp uit als er geen warmtevraag is. Eén keer per dag laat hij de pomp ongeveer 15 minuten draaien, zodat die niet vastloopt. De terugverdientijd hangt af van de huidige pomp en kan binnen een jaar liggen.",
  },
  {
    title: "Radiatorthermostaatkranen",
    text: "Met thermostaatkranen in slaapkamer, hal of werkkamer stopt de doorstroming als de ruimte op temperatuur is. Ten Dam noemt een gemiddelde besparing van zo’n 10 procent op het gasverbruik ten opzichte van handbediende kranen.",
  },
  {
    title: "Modulerende kamerthermostaat",
    text: "Een modulerende thermostaat laat de ketel minder hard branden als de ruimte maar weinig is afgekoeld. De temperatuur blijft vlakker en het gasverbruik lager. Sommige thermostaten bedient u ook met de telefoon.",
  },
  {
    title: "Regelen per ruimte",
    text: "Met naregeling stuurt u radiatoren draadloos aan, elk met een eigen klokprogramma. Brandt de haard in de woonkamer, dan kan de werkkamer toch verwarmd worden.",
  },
];

export default function BespaarPage() {
  return (
    <>
      <PageHero section="bespaartips" eyebrow="Klantenservice" title="Bespaartips" text="Mogelijkheden voor uw cv-installatie. Wij adviseren welke optie bij uw situatie past." />
      <section data-section="bespaartips-lijst" className="mx-auto max-w-3xl space-y-4 px-5 py-12">
        {tips.map((tip) => (
          <article key={tip.title} className="border border-navy/10 p-4">
            <h2 className="text-xl font-semibold">{tip.title}</h2>
            <p className="mt-2">{tip.text}</p>
          </article>
        ))}
        <Link href="/offerte" data-cta="offerte" className="inline-flex min-h-11 items-center bg-navy px-5 font-semibold text-white">
          Advies over uw installatie
        </Link>
      </section>
    </>
  );
}
