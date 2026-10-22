import type { Metadata } from "next";
import PageHero from "@/components/ui/PageHero";
import { bijvullen, ontluchten, ventilatie, wtw } from "@/lib/copy/steps";

export const metadata: Metadata = {
  title: "Stappenplannen",
  description: "Stappenplannen van Ten Dam: cv-ketel bijvullen, radiatoren ontluchten en ventilatie of WTW reinigen.",
};

const blocks = [
  { title: "Cv-ketel bijvullen", steps: bijvullen },
  { title: "Cv-ketel ontluchten", steps: ontluchten },
  { title: "Ventilatiebox reinigen", steps: ventilatie },
  { title: "WTW-onderhoud", steps: wtw },
];

export default function StappenPage() {
  return (
    <>
      <PageHero section="stappenplannen" eyebrow="Klantenservice" title="Stappenplannen" text="Bijvullen, ontluchten en ventilatie reinigen, in de stappen van Ten Dam." />
      <section data-section="stappen-inhoud" className="mx-auto max-w-3xl space-y-8 px-5 py-12">
        {blocks.map((block) => (
          <article key={block.title}>
            <h2 className="text-2xl font-semibold">{block.title}</h2>
            <ol className="mt-3 list-decimal space-y-2 pl-5">
              {block.steps.map((step) => (
                <li key={step}>{step}</li>
              ))}
            </ol>
          </article>
        ))}
        <p>Na langdurig gebruik kan een ventilator meer lawaai maken. De technische levensduur wordt gesteld op circa 16 jaar. Nieuwere ventilatoren zijn vaak zuiniger.</p>
        <p>
          Een schone WTW-unit geeft schonere lucht, een betere afzuiging, minder lawaai en een lager verbruik. Problemen worden zo eerder gezien.
        </p>
      </section>
    </>
  );
}
