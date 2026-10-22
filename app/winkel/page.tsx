import type { Metadata } from "next";
import { SHOP_HOURS, SHOP_PHONE } from "@/lib/site";
import PageHero from "@/components/ui/PageHero";
import PageClose from "@/components/site/PageClose";

export const metadata: Metadata = {
  title: "IJzerwarenwinkel",
  description: "IJzerwarenwinkel van Ten Dam in Delden. Sleutelservice, gereedschap en installatiemateriaal. Openingstijden en telefoon 074-3777078.",
};

const assortiment = [
  "Gereedschap: hand, tuin en elektrisch",
  "Pluggen en schroeven",
  "Ledlampen en armaturen",
  "Waterontharderzout",
  "Batterijen en gasflessen",
  "Verf en toebehoren",
  "Ladders en sloten",
  "Koop en verhuur van verticuteermachines",
  "Loodgieters- en elektromateriaal",
];

export default function WinkelPage() {
  return (
    <>
      <PageHero
        section="winkel-hero"
        eyebrow="Winkel"
        title="IJzerwarenwinkel Ten Dam"
        text="Door de combinatie met het installatiebedrijf vindt u ook loodgieters- en elektromateriaal, en advies daarbij. Aan de rand van Delden, met ruime parkeergelegenheid."
      >
        <a href={SHOP_PHONE.tel} className="nums inline-flex min-h-11 items-center bg-navy px-5 font-semibold text-white">
          Winkel: {SHOP_PHONE.display}
        </a>
      </PageHero>
      <section data-section="winkel-uren" className="mx-auto grid max-w-6xl gap-8 px-5 py-12 md:grid-cols-2">
        <div>
          <h2 className="text-2xl font-semibold">Openingstijden</h2>
          <ul className="mt-4 space-y-2">
            {SHOP_HOURS.map((row) => (
              <li key={row.dag} className="border-b border-navy/10 py-2">
                <span className="font-semibold">{row.dag}</span>
                <span className="nums mt-1 block">{row.tijd}</span>
              </li>
            ))}
          </ul>
          <p className="mt-4 font-semibold">Sleutelservice; klaar terwijl u wacht.</p>
        </div>
        <img
          src="/fotos/bedrijf/sleutelservice.jpg"
          alt="Sleutelservice in de winkel van Ten Dam: sleutelslijpmachine met een sleutel"
          width={1200}
          height={800}
          loading="lazy"
          className="h-auto w-full object-cover"
        />
      </section>
      <section data-section="winkel-assortiment" className="bg-paper">
        <div className="mx-auto max-w-6xl px-5 py-12">
          <h2 className="text-2xl font-semibold">Assortiment</h2>
          <ul className="mt-4 grid gap-2 sm:grid-cols-2">
            {assortiment.map((item) => (
              <li key={item} className="bg-white px-4 py-3">
                {item}
              </li>
            ))}
          </ul>
          <img
            src="/fotos/bedrijf/winkel-schappen.jpg"
            alt="Schappen in de ijzerwarenwinkel van Ten Dam met gereedschap en kwasten"
            width={1400}
            height={900}
            loading="lazy"
            className="mt-8 h-auto w-full object-cover"
          />
        </div>
      </section>
      <section data-section="winkel-combinatie" className="mx-auto grid max-w-6xl items-center gap-8 px-5 py-12 md:grid-cols-2">
        <img
          src="/fotos/bedrijf/winkel-collage.jpg"
          alt="Collage van de ijzerwarenwinkel van Ten Dam: schappen, sanitair en gereedschap"
          width={1400}
          height={900}
          loading="lazy"
          className="h-auto w-full object-cover"
        />
        <div>
          <h2 className="text-2xl font-semibold">Winkel en installatiebedrijf in één pand</h2>
          <p className="mt-3">
            Door de combinatie met het installatiebedrijf ligt er ook loodgieters- en elektromateriaal, en kunt u daar advies bij krijgen. De winkel is makkelijk vindbaar aan de rand van Delden en heeft ruime parkeergelegenheid.
          </p>
          <p className="mt-3">Sleutelservice; klaar terwijl u wacht.</p>
        </div>
      </section>
      <PageClose section="winkel" />
    </>
  );
}
