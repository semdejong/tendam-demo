import type { Metadata } from "next";
import Link from "next/link";
import Checks from "@/components/storing/Checks";
import MailForm from "@/components/forms/MailForm";
import { PHONE, MAIL_SERVICE } from "@/lib/site";
import { bijvullen, ontluchten } from "@/lib/copy/steps";

export const metadata: Metadata = {
  title: "Storing",
  description: "24/7 storingsdienst van Ten Dam. Controles bij stroomstoring en cv-storing, en een melding zonder spoed.",
};

const faq = [
  {
    q: "Wat moet ik eerst controleren?",
    a: "Bij stroom: de display van de kWh-meter, de aardlek- en groepenschakelaars, en de stekkers één voor één. Bij de cv-ketel: stroom, thermostaat, gaskraan, waterdruk en een lekkende kraan.",
  },
  {
    q: "Welke waterdruk hoort mijn cv-ketel te hebben?",
    a: "Tussen 1,5 en 2,0 bar. Vul bij tot maximaal 2,0 bar.",
  },
  {
    q: "Hoe vul ik mijn cv-ketel bij?",
    a: "Zet de ketel uit en laat hem afkoelen, vul de slang met water, sluit hem aan, vul tot 1,5 à 2 bar en zet de ketel weer aan. De stappen staan hieronder.",
  },
  {
    q: "Hoe ontlucht ik mijn radiatoren?",
    a: "Laat de installatie aanslaan en daarna afkoelen. Ontlucht van de laagste radiator naar boven en controleer daarna de druk.",
  },
  {
    q: "Is de storingsdienst ook in het weekend bereikbaar?",
    a: "Ja. De storingsdienst is 24/7 bereikbaar op 074-3777077.",
  },
  {
    q: "Kan ik een onderhoudscontract afsluiten zodat storingen worden voorkomen?",
    a: "Ja. Wij bieden onderhoud voor ketel en warmtepomp, en contracten op maat.",
  },
];

export default function StoringPage() {
  return (
    <>
      <section data-section="storing-hero" className="bg-urgent text-white">
        <div className="mx-auto max-w-6xl px-5 py-12 md:py-16">
          <p className="text-xs font-semibold uppercase tracking-[0.16em]">Storingsdienst</p>
          <h1 className="mt-2 max-w-3xl text-4xl font-semibold md:text-5xl">Storing? Wij helpen u, ook ’s nachts.</h1>
          <p className="mt-4 max-w-2xl text-lg text-white/90">Een flink deel van de storingen wordt met deze stappen al geholpen.</p>
          <a href={PHONE.tel} className="nums mt-6 inline-flex min-h-14 items-center bg-white px-6 text-lg font-semibold text-urgent">
            Bel 24/7: {PHONE.display}
          </a>
        </div>
      </section>

      <section data-section="storing-stappen" className="mx-auto max-w-3xl px-5 py-12">
        <h2 className="text-3xl font-semibold">Controleer dit eerst</h2>
        <div className="mt-6">
          <Checks />
        </div>
      </section>

      <section data-section="storing-noteren" className="bg-paper">
        <div className="mx-auto max-w-3xl px-5 py-12">
          <h2 className="text-3xl font-semibold">Noteer dit voordat u belt</h2>
          <ul className="mt-4 grid gap-2">
            {["Het probleem", "Het merk en type van de cv-ketel", "De storingscode op de display, als die er is"].map((item) => (
              <li key={item} className="border border-navy/10 bg-white px-4 py-3">
                {item}
              </li>
            ))}
          </ul>
          <p className="mt-4">
            Werkt het niet, of heeft u een andere storing? Bel{" "}
            <a className="nums font-semibold text-blue" href={PHONE.tel}>
              {PHONE.display}
            </a>
            .
          </p>
        </div>
      </section>

      <section data-section="storing-stappenplannen" className="mx-auto max-w-3xl px-5 py-12">
        <h2 className="text-3xl font-semibold">Zelf bijvullen of ontluchten</h2>
        <details className="mt-4 border border-navy/10 bg-white p-4" open>
          <summary className="cursor-pointer text-lg font-semibold">Cv-ketel bijvullen</summary>
          <ol className="mt-3 list-decimal space-y-2 pl-5">
            {bijvullen.map((step) => (
              <li key={step}>{step}</li>
            ))}
          </ol>
        </details>
        <details className="mt-3 border border-navy/10 bg-white p-4">
          <summary className="cursor-pointer text-lg font-semibold">Radiatoren ontluchten</summary>
          <ol className="mt-3 list-decimal space-y-2 pl-5">
            {ontluchten.map((step) => (
              <li key={step}>{step}</li>
            ))}
          </ol>
        </details>
        <p className="mt-4">
          <Link href="/klantenservice/stappenplannen" className="font-semibold text-blue underline-offset-4 hover:underline">
            Ook ventilatie en WTW reinigen
          </Link>
        </p>
      </section>

      <section data-section="storing-zonnepanelen" className="bg-mist">
        <div className="mx-auto max-w-3xl px-5 py-12">
          <h2 className="text-2xl font-semibold">Storing aan zonnepanelen</h2>
          <p className="mt-3">
            Heeft u een storing met uw zonnepanelen, neem dan contact op. Meld de installatie aan bij uw netbeheerder, zodat de vergoeding klopt en de omvormer niet onnodig uitvalt.
          </p>
          <Link href="/diensten/duurzaam/zonnepanelen" className="mt-3 inline-flex min-h-11 items-center font-semibold text-blue underline-offset-4 hover:underline">
            Meer over zonnepanelen
          </Link>
        </div>
      </section>

      <section data-section="storing-melding" className="mx-auto max-w-3xl px-5 py-12">
        <h2 className="text-3xl font-semibold">Geen spoed?</h2>
        <p className="mt-3">Een melding zonder spoed mailt u naar de klantenservice. Voor een storing die niet kan wachten, belt u.</p>
        <div className="mt-6">
          <MailForm
            to={MAIL_SERVICE}
            subject="Storingsmelding via de website"
            submitLabel="Melding mailen"
            note="Foto mailen kan ook, als bijlage in het e-mailprogramma."
            fields={[
              { name: "naam", label: "Naam", required: true },
              { name: "telefoon", label: "Telefoon", required: true },
              { name: "email", label: "E-mail", required: true },
              { name: "woonplaats", label: "Woonplaats", required: true },
              {
                name: "soort",
                label: "Soort storing",
                required: true,
                options: ["Cv-ketel", "Warmtepomp", "Elektra", "Water of lekkage", "Zonnepanelen", "Anders"],
              },
              { name: "toestel", label: "Merk en type toestel" },
              { name: "code", label: "Storingscode" },
              { name: "omschrijving", label: "Omschrijving", textarea: true, required: true },
            ]}
          />
        </div>
      </section>

      <section data-section="storing-faq" className="bg-paper">
        <div className="mx-auto max-w-3xl px-5 py-12">
          <h2 className="text-3xl font-semibold">Vragen</h2>
          <div className="mt-4 grid gap-3">
            {faq.map((item) => (
              <details key={item.q} className="border border-navy/10 bg-white p-4">
                <summary className="cursor-pointer font-semibold">{item.q}</summary>
                <p className="mt-2">{item.a}</p>
                {item.q.startsWith("Kan ik een onderhoud") ? (
                  <Link href="/diensten/onderhoud-en-inspecties" className="mt-2 inline-flex font-semibold text-blue underline-offset-4 hover:underline">
                    Onderhoud en inspecties
                  </Link>
                ) : null}
              </details>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
