import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/ui/PageHero";
import PageClose from "@/components/site/PageClose";
import { PHONE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Klantenservice",
  description: "Klantenservice van Ten Dam: storing, offerte, onderhoud, bespaartips, stappenplannen en subsidies.",
};

const links = [
  { href: "/storing", title: "Ik heb een storing", text: "Controleer eerst stroom of cv. De storingsdienst is 24/7 bereikbaar. Zonder spoed mailt u een melding.", cta: true },
  { href: "/diensten/duurzaam", title: "Ik wil graag duurzaam (ver)bouwen", text: "Zonnepanelen, warmtepomp, laadpaal of accu. Van offerte tot plaatsing.", cta: false },
  { href: "/offerte", title: "Ik wil graag een offerte", text: "Een gesprek over de mogelijkheden, en daarna een gespecificeerde offerte met schetsplan.", cta: true },
  { href: "/diensten/onderhoud-en-inspecties", title: "Ik wil een onderhoudscontract", text: "Ketel, warmtepomp of een contract op maat. Samen bepalen we de frequentie.", cta: false },
  { href: "/klantenservice/bespaartips", title: "Bespaartips", text: "Pomp, pompschakelaar, thermostaatkranen, modulerende thermostaat en naregeling.", cta: false },
  { href: "/klantenservice/stappenplannen", title: "Stappenplannen", text: "Cv-ketel bijvullen, radiatoren ontluchten, ventilatiebox en WTW.", cta: false },
  { href: "/klantenservice/subsidies", title: "Subsidies en leningen", text: "Actuele regelingen voor duurzaam bouwen staan bij de Rijksdienst voor Ondernemend Nederland.", cta: false },
];

export default function KlantenservicePage() {
  return (
    <>
      <PageHero
        section="klantenservice"
        eyebrow="Klantenservice"
        title="Wij staan voor u klaar."
        text="Naast onderhoud, inspecties en een 24-uurs storingsdienst beantwoorden wij veelvoorkomende vragen alvast hier. Mist u iets, neem dan contact op."
      >
        <a href={PHONE.tel} className="nums inline-flex min-h-11 items-center bg-urgent px-5 font-semibold text-white">
          Bel 24/7: {PHONE.display}
        </a>
      </PageHero>
      <section data-section="klantenservice-links" className="mx-auto grid max-w-6xl gap-3 px-5 py-12 md:grid-cols-2">
        {links.map((item, index) => (
          <Link
            key={item.href}
            href={item.href}
            data-cta={item.cta ? "offerte" : undefined}
            className="border border-navy/10 p-5 hover:border-blue"
          >
            <p className="nums text-xs font-semibold tracking-[0.16em] text-blue">0{index + 1}</p>
            <h2 className="mt-1 text-xl font-semibold">{item.title}</h2>
            <p className="mt-2 text-navy/80">{item.text}</p>
          </Link>
        ))}
      </section>
      <PageClose section="klantenservice" />
    </>
  );
}
