import Link from "next/link";

const shots = [
  {
    src: "/fotos/bedrijf/woningbouw.jpg",
    alt: "Nieuwbouwwoning met rieten kap uit het werk van Ten Dam",
    kicker: "Woning",
    title: "Van lekkende kraan tot complete installatie",
    href: "/projecten/nieuwbouw",
  },
  {
    src: "/fotos/bedrijf/horeca-huis-vermeer.jpg",
    alt: "Hotel Huis Vermeer in Deventer, een horecaproject van Ten Dam",
    kicker: "Horeca",
    title: "Hotel Huis Vermeer, Deventer",
    href: "/projecten/horeca/hotel-huis-vermeer",
  },
  {
    src: "/fotos/bedrijf/zonnepanelen-luchtfoto.jpg",
    alt: "Luchtfoto van een boerderij of schuur met zonnepanelen van Ten Dam",
    kicker: "Dak",
    title: "Zonnepanelen op schuur en woning",
    href: "/projecten/zonnepanelen",
  },
];

export default function Triptych() {
  return (
    <section data-section="achter-de-gevel" className="bg-white">
      <div className="mx-auto max-w-6xl px-5 py-16">
        <p className="text-xs font-semibold uppercase tracking-[0.16em] text-blue">Blauwdruk</p>
        <h2 className="mt-2 max-w-2xl text-3xl font-semibold md:text-4xl">Wat u ziet is de gevel. Het werk zit erachter.</h2>
        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {shots.map((shot, index) => (
            <Link key={shot.src} href={shot.href} className="group relative block">
              <img src={shot.src} alt={shot.alt} width={1200} height={800} loading="lazy" className="aspect-[4/5] w-full object-cover" />
              <div className="absolute inset-x-0 bottom-0 bg-navy/90 p-4 text-white">
                <p className="nums text-xs tracking-[0.16em] text-water">0{index + 1} · {shot.kicker}</p>
                <p className="mt-1 font-semibold">{shot.title}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
