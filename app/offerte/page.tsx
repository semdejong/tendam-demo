import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/ui/PageHero";
import MailForm from "@/components/forms/MailForm";
import PageClose from "@/components/site/PageClose";
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
      <section data-section="offerte-formulier" className="mx-auto grid max-w-6xl gap-10 px-5 py-12 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <h2 className="text-2xl font-semibold">Zo komt een offerte tot stand</h2>
          <ol className="mt-4 grid gap-3">
            <li className="border border-navy/10 p-4">
              <p className="nums text-sm font-semibold text-blue">01</p>
              Kennismaking bij u: wensen, mogelijkheden en een globale inschatting.
            </li>
            <li className="border border-navy/10 p-4">
              <p className="nums text-sm font-semibold text-blue">02</p>
              Financiële duidelijkheid: een gespecificeerde prijs, geen onrealistisch scherpe offerte met achteraf meerwerk.
            </li>
            <li className="border border-navy/10 p-4">
              <p className="nums text-sm font-semibold text-blue">03</p>
              Een schetsplan erbij, zodat u ziet wat wij gaan aanleggen of installeren.
            </li>
          </ol>
          <Link href="/diensten" className="mt-4 inline-flex min-h-11 items-center font-semibold text-blue underline-offset-4 hover:underline">
            Eerst de diensten bekijken
          </Link>
        </div>
        <div className="lg:col-span-7">
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
        </div>
      </section>
      <PageClose section="offerte" />
    </>
  );
}
