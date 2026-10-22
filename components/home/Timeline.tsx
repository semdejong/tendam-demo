const steps = [
  { year: "1983", text: "Herman ten Dam start in Bentelo: loodgieterswerk, cv en dak, vanuit een werkplaats in een voormalige kuikenbroederij." },
  { year: "Daarna", text: "Een tweede vestiging in het centrum van Delden, met kantoor en een winkel annex showroom. De werkplaats in Bentelo blijft." },
  { year: "1990", text: "Overname van een elektrotechnisch bedrijf in de buurt. Elektra komt erbij." },
  { year: "1998", text: "Eén pand van 1100 m² op het industrieterrein van Delden: kantoren, winkel en werkplaats." },
  { year: "2017", text: "Begin 2017 draagt Herman ten Dam het bedrijf over aan Frank Volkerink. Hij was zes jaar bedrijfsleider en is sinds 1 januari 2017 directeur." },
];

export default function Timeline() {
  return (
    <section data-section="sinds-1983" className="bg-white">
      <div className="mx-auto max-w-6xl px-5 py-16">
        <p className="text-xs font-semibold uppercase tracking-[0.16em] text-blue">Sinds 1983</p>
        <h2 className="mt-2 text-3xl font-semibold md:text-4xl">Van kuikenbroederij in Bentelo naar Delden.</h2>
        <ol className="mt-8 border-l border-blue/40">
          {steps.map((step) => (
            <li key={step.year} className="relative py-3 pl-6">
              <span className="absolute -left-1.5 top-5 h-3 w-3 rounded-full bg-blue" aria-hidden />
              <p className="nums text-sm font-semibold text-blue">{step.year}</p>
              <p className="text-navy/90">{step.text}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
