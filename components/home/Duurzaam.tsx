import Link from "next/link";

const cards = [
  { title: "Zonnepanelen", text: "Schuin dak, plat dak, indak en veldopstelling. Van offerte tot plaatsing, inclusief SolarEdge StorEdge.", href: "/diensten/duurzaam/zonnepanelen" },
  { title: "Warmtepompen", text: "Duurzaam verwarmen, samen met vloerverwarming en warmteterugwinning.", href: "/diensten/duurzaam" },
  { title: "Laadpalen", text: "Dealer van ICU: Eve Mini, Eve en Twin. Ook New Motion en Wallbox, privé en zakelijk.", href: "/diensten/duurzaam/laadpalen" },
  { title: "Victron accuopslag", text: "Overtollige zonnestroom opslaan voor de avond, piekuren of een stroomuitval.", href: "/diensten/duurzaam/accuopslag" },
];

export default function Duurzaam() {
  return (
    <section data-section="duurzaam" className="blueprint text-white">
      <div className="mx-auto max-w-6xl px-5 py-16">
        <p className="text-xs font-semibold uppercase tracking-[0.16em] text-water">Duurzaam bouwen en verbouwen</p>
        <h2 className="mt-2 max-w-3xl text-3xl font-semibold md:text-4xl">Van zonnepanelen tot accu, onder één dak.</h2>
        <p className="mt-4 max-w-3xl text-white/85">
          Ten Dam plaatst zonnepanelen, installeert warmtepompen en werkt aan warmteterugwinning. Voor een woning of een bedrijfspand, van begin tot eind.
        </p>
        <div className="mt-8 grid gap-4 md:grid-cols-2">
          {cards.map((card) => (
            <Link key={card.href + card.title} href={card.href} className="border border-white/20 p-5 hover:border-water">
              <h3 className="text-xl font-semibold">{card.title}</h3>
              <p className="mt-2 text-white/85">{card.text}</p>
            </Link>
          ))}
        </div>
        <Link href="/klantenservice/subsidies" className="mt-6 inline-flex min-h-11 items-center font-semibold text-water underline-offset-4 hover:underline">
          Subsidies en leningen via RVO
        </Link>
      </div>
    </section>
  );
}
