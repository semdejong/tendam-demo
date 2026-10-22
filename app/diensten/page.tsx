import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/ui/PageHero";
import PageClose from "@/components/site/PageClose";

export const metadata: Metadata = {
  title: "Diensten",
  description: "Diensten van totaalinstallateur Ten Dam in Delden: verwarming, sanitair, elektra, domotica, airco, duurzaam en onderhoud.",
};

const groepen = [
  {
    label: "Vuur",
    tekst: "Warmte, gas en de duurzame opvolgers daarvan.",
    items: [
      { href: "/diensten/verwarming", title: "Verwarming", text: "Centrale verwarming, vloerverwarming, infrarood, naregeling en klimaatplafond." },
      { href: "/diensten/duurzaam", title: "Duurzaam bouwen en verbouwen", text: "Zonnepanelen, warmtepomp, warmteterugwinning, laadpaal en accu. Van offerte tot plaatsing." },
      { href: "/diensten/onderhoud-en-inspecties", title: "Onderhoud en inspecties", text: "Ketel en warmtepomp, gasinspectie, en een contract op maat." },
    ],
  },
  {
    label: "Stroom",
    tekst: "Van de meterkast tot domotica en airco.",
    items: [
      { href: "/diensten/elektra", title: "Elektrische installaties", text: "Woning, bedrijf, school en overheid. NEN 1010 en NEN 3140." },
      { href: "/diensten/domotica", title: "Domotica", text: "Comfort, veiligheid en energiebesparing, met schakelaar of telefoon." },
      { href: "/diensten/airco", title: "Airco", text: "LG Electronics en Mitsubishi Electric. Single split, duo split, VRF en airsock." },
    ],
  },
  {
    label: "Water",
    tekst: "Leidingen, sanitair en de keuken eromheen.",
    items: [
      { href: "/diensten/sanitair-en-keuken", title: "Sanitair en keuken", text: "Badkamer en keuken van A tot Z, inclusief tegelwerk, Quooker en extra groep." },
      { href: "/klantenservice/stappenplannen", title: "Ventilatie", text: "Ventilatiebox en WTW reinigen, in stappen die u zelf kunt volgen." },
    ],
  },
  {
    label: "Ook onder dit dak",
    tekst: "Diensten die in het totaalpakket meelopen.",
    items: [
      { href: "/projecten/dak-en-zinkwerk", title: "Dak- en zinkwerk", text: "Dakbedekking en zinkwerk, naast loodgieter en elektra." },
      { href: "/diensten/elektra", title: "Brandbeveiliging en noodverlichting", text: "Brandmeldinstallatie, noodverlichting en beveiliging." },
      { href: "/diensten/elektra", title: "Datacommunicatie", text: "Computernetwerk en data, samen met de elektrische installatie." },
      { href: "/projecten/horeca", title: "Horeca", text: "Keuken, badkamers of een complete renovatie van hotel of restaurant." },
      { href: "/projecten/agrarisch", title: "Agrarische sector", text: "Installaties voor stallen, schuren en bedrijven rond Delden." },
    ],
  },
];

const waarden = ["Afspraken nakomen", "Vertrouwen", "Verstand van zaken", "Totaaloplossingen", "Een passend advies", "Service", "Kwaliteit"];

export default function DienstenPage() {
  return (
    <>
      <PageHero
        section="diensten-hero"
        eyebrow="Diensten"
        title="Een duurzame totaalinstallateur"
        text="Voor zakelijke en particuliere klanten. Van een lekkende kraan en onderhoud aan de cv-ketel tot de complete installatie van woning of bedrijf. Wij adviseren, hebben verstand van zaken en komen afspraken na."
      >
        <Link href="/offerte" data-cta="offerte" className="inline-flex min-h-11 items-center bg-navy px-5 font-semibold text-white">
          Offerte of advies
        </Link>
      </PageHero>
      {groepen.map((groep) => (
        <section key={groep.label} data-section={`diensten-${groep.label.toLowerCase().replaceAll(" ", "-")}`} className="border-b border-navy/10">
          <div className="mx-auto max-w-6xl px-5 py-12">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-blue">{groep.label}</p>
            <h2 className="mt-2 text-3xl font-semibold">{groep.tekst}</h2>
            <ul className="mt-6 grid gap-3 md:grid-cols-2">
              {groep.items.map((item) => (
                <li key={item.title}>
                  <Link href={item.href} className="block h-full border border-navy/10 bg-paper p-5 hover:border-blue">
                    <h3 className="text-xl font-semibold">{item.title}</h3>
                    <p className="mt-2 text-navy/80">{item.text}</p>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </section>
      ))}
      <section data-section="diensten-waarden" className="mx-auto max-w-6xl px-5 py-12">
        <h2 className="text-2xl font-semibold">Waar Ten Dam voor staat</h2>
        <ul className="mt-4 grid gap-2 sm:grid-cols-2">
          {waarden.map((item, index) => (
            <li key={item} className="border-l-2 border-blue pl-3">
              <span className="nums text-sm font-semibold text-blue">0{index + 1}</span> {item}
            </li>
          ))}
        </ul>
      </section>
      <PageClose section="diensten" />
    </>
  );
}
