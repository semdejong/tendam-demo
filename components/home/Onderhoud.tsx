import Link from "next/link";

const items = [
  "Onderhoud van ketel en warmtepomp",
  "Meterkasten, gecontroleerd met thermografie",
  "Noodverlichting",
  "Inspectie van de brandmeldinstallatie",
  "Inspectie van de gasinstallatie",
  "Keuring volgens NEN 3140",
];

export default function Onderhoud() {
  return (
    <section data-section="onderhoud" className="bg-white">
      <div className="mx-auto grid max-w-6xl gap-8 px-5 py-16 md:grid-cols-12">
        <div className="md:col-span-5">
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-blue">Onderhoud en inspecties</p>
          <h2 className="mt-2 text-3xl font-semibold md:text-4xl">Contract op maat, of vast voor ketel en warmtepomp.</h2>
          <p className="mt-4 text-navy/85">Samen bepalen we welk periodiek onderhoud verstandig is. Ook contracten op maat zijn mogelijk.</p>
          <Link href="/offerte" data-cta="offerte" className="mt-6 inline-flex min-h-11 items-center bg-navy px-5 font-semibold text-white">
            Onderhoudscontract aanvragen
          </Link>
        </div>
        <ul className="grid gap-3 md:col-span-7">
          {items.map((item) => (
            <li key={item} className="border border-navy/10 bg-paper px-4 py-3">
              {item}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
