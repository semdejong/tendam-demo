import Link from "next/link";
import { WERKWIJZE } from "@/lib/site";

export default function Werkwijze() {
  return (
    <section data-section="werkwijze" className="bg-paper">
      <div className="mx-auto max-w-6xl px-5 py-16">
        <p className="text-xs font-semibold uppercase tracking-[0.16em] text-blue">Werkwijze</p>
        <h2 className="mt-2 max-w-3xl text-3xl font-semibold md:text-4xl">Geen onrealistisch scherpe offerte met achteraf meerwerk.</h2>
        <ol className="mt-8 grid gap-4 md:grid-cols-2">
          {WERKWIJZE.map((step, index) => (
            <li key={step.titel} className="border border-navy/10 bg-white p-5">
              <p className="nums text-sm font-semibold text-blue">0{index + 1}</p>
              <h3 className="mt-1 text-xl font-semibold">{step.titel}</h3>
              <p className="mt-2 text-navy/85">{step.tekst}</p>
            </li>
          ))}
        </ol>
        <Link href="/over-ons/werkwijze" className="mt-6 inline-flex min-h-11 items-center font-semibold text-blue underline-offset-4 hover:underline">
          De werkwijze in het kort
        </Link>
      </div>
    </section>
  );
}
