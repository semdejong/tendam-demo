import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/ui/PageHero";
import { diensten } from "@/lib/copy/diensten";

export const metadata: Metadata = {
  title: "Diensten",
  description: "Diensten van totaalinstallateur Ten Dam in Delden: verwarming, sanitair, elektra, domotica, airco, duurzaam en onderhoud.",
};

const extra = [
  { title: "Duurzaam bouwen en verbouwen", href: "/diensten/duurzaam" },
  { title: "Ventilatie", href: "/klantenservice/stappenplannen" },
  { title: "Brandbeveiliging", href: "/diensten/elektra" },
  { title: "Dak- en zinkwerk", href: "/projecten/dak-en-zinkwerk" },
  { title: "Noodverlichting en beveiliging", href: "/diensten/onderhoud-en-inspecties" },
  { title: "Computernetwerk", href: "/diensten/elektra" },
  { title: "Horeca", href: "/projecten/horeca" },
  { title: "Agrarische sector", href: "/projecten/agrarisch" },
];

export default function DienstenPage() {
  return (
    <>
      <PageHero
        section="diensten-hero"
        eyebrow="Diensten"
        title="Een duurzame totaalinstallateur"
        text="Voor zakelijke en particuliere klanten. Van een lekkende kraan en onderhoud aan de cv-ketel tot de complete installatie van woning of bedrijf."
      >
        <Link href="/offerte" data-cta="offerte" className="inline-flex min-h-11 items-center bg-navy px-5 font-semibold text-white">
          Offerte of advies
        </Link>
      </PageHero>
      <section data-section="diensten-overzicht" className="mx-auto max-w-6xl px-5 py-12">
        <ul className="grid gap-3 sm:grid-cols-2">
          {diensten.map((dienst) => (
            <li key={dienst.slug}>
              <Link href={`/diensten/${dienst.slug}`} className="block border border-navy/10 bg-paper p-5 hover:border-blue">
                <h2 className="text-xl font-semibold">{dienst.title}</h2>
                <p className="mt-2 text-navy/80">{dienst.lead}</p>
              </Link>
            </li>
          ))}
          {extra.map((item) => (
            <li key={item.title}>
              <Link href={item.href} className="block border border-navy/10 p-5 hover:border-blue">
                <h2 className="text-xl font-semibold">{item.title}</h2>
              </Link>
            </li>
          ))}
        </ul>
        <ul className="mt-10 grid gap-2 text-sm sm:grid-cols-2">
          {["Afspraken nakomen", "Vertrouwen", "Verstand van zaken", "Totaaloplossingen", "Een passend advies", "Service", "Kwaliteit"].map((item) => (
            <li key={item} className="border-l-2 border-blue pl-3">
              {item}
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}
