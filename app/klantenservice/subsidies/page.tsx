import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/ui/PageHero";

export const metadata: Metadata = {
  title: "Subsidies en leningen",
  description: "Subsidies en leningen voor duurzaam bouwen. Actuele regelingen staan bij de Rijksdienst voor Ondernemend Nederland.",
};

export default function SubsidiesPage() {
  return (
    <>
      <PageHero
        section="subsidies"
        eyebrow="Klantenservice"
        title="Subsidies en leningen"
        text="Er zijn subsidies en leningen die voordelig kunnen uitpakken, vooral bij duurzaam bouwen en verbouwen."
      />
      <section data-section="subsidies-tekst" className="mx-auto max-w-3xl space-y-4 px-5 py-12">
        <p>
          De actuele subsidies staan op de website van de Rijksdienst voor Ondernemend Nederland:{" "}
          <a className="font-semibold text-blue underline-offset-4 hover:underline" href="https://www.rvo.nl/" rel="noopener noreferrer" target="_blank">
            rvo.nl
          </a>
          .
        </p>
        <p>Heeft u vragen over een regeling in combinatie met een installatie, neem dan contact op.</p>
        <Link href="/offerte" data-cta="offerte" className="inline-flex min-h-11 items-center bg-navy px-5 font-semibold text-white">
          Bespreek de mogelijkheden
        </Link>
      </section>
    </>
  );
}
