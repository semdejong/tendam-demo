import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/ui/PageHero";
import { PHONE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Klantenservice",
  description: "Klantenservice van Ten Dam: storing, offerte, onderhoud, bespaartips, stappenplannen en subsidies.",
};

const links = [
  ["/storing", "Ik heb een storing"],
  ["/diensten/duurzaam", "Ik wil graag duurzaam (ver)bouwen"],
  ["/offerte", "Ik wil graag een offerte"],
  ["/diensten/onderhoud-en-inspecties", "Ik wil een onderhoudscontract"],
  ["/klantenservice/bespaartips", "Bespaartips"],
  ["/klantenservice/stappenplannen", "Cv-ketel bijvullen, ontluchten en ventilatie"],
  ["/klantenservice/subsidies", "Subsidies en leningen"],
];

export default function KlantenservicePage() {
  return (
    <>
      <PageHero
        section="klantenservice"
        eyebrow="Klantenservice"
        title="Wij staan voor u klaar."
        text="Naast onderhoud, inspecties en een 24-uurs storingsdienst beantwoorden wij veelvoorkomende vragen alvast op de website."
      >
        <a href={PHONE.tel} className="nums inline-flex min-h-11 items-center bg-urgent px-5 font-semibold text-white">
          Bel 24/7: {PHONE.display}
        </a>
      </PageHero>
      <section data-section="klantenservice-links" className="mx-auto max-w-3xl px-5 py-12">
        <ul className="grid gap-3">
          {links.map(([href, label]) => (
            <li key={href}>
              <Link
                href={href}
                data-cta={href === "/offerte" || href === "/storing" ? "offerte" : undefined}
                className="flex min-h-14 items-center border border-navy/10 px-4 font-semibold hover:border-blue"
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}
