import type { Metadata } from "next";
import PageHero from "@/components/ui/PageHero";
import MailForm from "@/components/forms/MailForm";
import { MAIL_INFO, PHONE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Offerte aanvragen",
  description: "Vraag Ten Dam om een offerte of een adviesgesprek. Het formulier opent een e-mail naar info@tendamdelden.nl.",
};

export default function OffertePage() {
  return (
    <>
      <PageHero
        section="offerte"
        eyebrow="Offerte"
        title="U wilt graag een offerte."
        text="Wij gaan graag met u in gesprek. Kijk alvast bij de diensten, of stuur uw vraag. Geen onrealistisch scherpe offerte met achteraf meerwerk."
      >
        <a href={PHONE.tel} className="nums inline-flex min-h-11 items-center border border-navy px-5 font-semibold">
          Bel {PHONE.display}
        </a>
      </PageHero>
      <section data-section="offerte-formulier" className="mx-auto max-w-3xl px-5 py-12">
        <MailForm
          to={MAIL_INFO}
          subject="Offerteaanvraag via de website"
          submitLabel="Offerteaanvraag mailen"
          note="Het formulier opent uw e-mailprogramma. Een foto van de situatie kunt u als bijlage toevoegen."
          fields={[
            { name: "naam", label: "Naam", required: true },
            { name: "telefoon", label: "Telefoon", required: true },
            { name: "email", label: "E-mail", required: true },
            { name: "woonplaats", label: "Woonplaats", required: true },
            {
              name: "onderwerp",
              label: "Waar gaat het om",
              required: true,
              options: [
                "Verwarming",
                "Sanitair of keuken",
                "Elektra",
                "Domotica",
                "Airco",
                "Zonnepanelen",
                "Laadpaal",
                "Accuopslag",
                "Onderhoudscontract",
                "Anders",
              ],
            },
            { name: "bericht", label: "Omschrijving", textarea: true, required: true },
          ]}
        />
      </section>
    </>
  );
}
