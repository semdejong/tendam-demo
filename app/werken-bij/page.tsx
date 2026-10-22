import type { Metadata } from "next";
import PageHero from "@/components/ui/PageHero";
import { MAIL_INFO } from "@/lib/site";

export const metadata: Metadata = {
  title: "Werken bij Ten Dam",
  description: "Ten Dam zoekt regelmatig monteurs. Open sollicitatie en stage via info@tendamdelden.nl.",
};

const functies = ["Servicemonteur", "Monteur E of E/W", "Monteur zonnepanelen", "Leerling monteur E of W"];

export default function WerkenBijPage() {
  return (
    <>
      <PageHero
        section="werken-bij"
        eyebrow="Werken bij"
        title="Wij zoeken regelmatig nieuwe collega’s."
        text="Sinds 1983 werkt Ten Dam voor particulieren en bedrijven, van storing tot duurzaam bouwen. De sfeer is informeel."
      />
      <section data-section="vacatures" className="mx-auto max-w-3xl space-y-4 px-5 py-12">
        <h2 className="text-2xl font-semibold">Voorbeelden van functies</h2>
        <ul className="grid gap-2">
          {functies.map((item) => (
            <li key={item} className="border border-navy/10 px-4 py-3 font-semibold">
              {item}
            </li>
          ))}
        </ul>
        <p>Dit zijn voorbeelden. Of een plek op dit moment openstaat, hoort u als u contact opneemt.</p>
        <h2 className="text-2xl font-semibold">Open sollicitatie</h2>
        <p>
          Wilt u bij Ten Dam werken? Stuur een open sollicitatie met cv en een motivatie naar{" "}
          <a className="font-semibold text-blue" href={`mailto:${MAIL_INFO}`}>
            {MAIL_INFO}
          </a>
          .
        </p>
        <h2 className="text-2xl font-semibold">Stage</h2>
        <p>
          Ten Dam is een erkend leerbedrijf. Volgt u een technische opleiding, mail dan uw motivatie en cv naar hetzelfde adres. Meer over stage staat bij{" "}
          <a className="font-semibold text-blue" href="/over-ons/erkend-leerbedrijf">
            erkend leerbedrijf
          </a>
          .
        </p>
      </section>
    </>
  );
}
