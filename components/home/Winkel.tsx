import Link from "next/link";
import { SHOP_HOURS, SHOP_PHONE } from "@/lib/site";

export default function Winkel() {
  return (
    <section data-section="winkel" className="bg-mist">
      <div className="mx-auto grid max-w-6xl items-center gap-8 px-5 py-16 md:grid-cols-2">
        <img
          src="/fotos/bedrijf/winkel-schappen.jpg"
          alt="Ijzerwarenwinkel van Ten Dam: wand met gereedschap, borstels en kwasten"
          width={1400}
          height={900}
          loading="lazy"
          className="h-auto w-full object-cover"
        />
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-blue">De winkel</p>
          <h2 className="mt-2 text-3xl font-semibold md:text-4xl">Sleutelservice, klaar terwijl u wacht.</h2>
          <p className="mt-4 text-navy/85">
            Gereedschap, pluggen en schroeven, lampen, waterontharderzout, verf, ladders, sloten en loodgieters- en elektromateriaal. Makkelijk vindbaar aan de rand van Delden, met ruime parkeergelegenheid.
          </p>
          <ul className="mt-4 space-y-1">
            {SHOP_HOURS.map((row) => (
              <li key={row.dag}>
                <span className="font-semibold">{row.dag}: </span>
                <span className="nums">{row.tijd}</span>
              </li>
            ))}
          </ul>
          <p className="mt-4">
            Winkel direct:{" "}
            <a className="nums font-semibold text-blue" href={SHOP_PHONE.tel}>
              {SHOP_PHONE.display}
            </a>
          </p>
          <Link href="/winkel" className="mt-5 inline-flex min-h-11 items-center bg-navy px-5 font-semibold text-white">
            Naar de winkel
          </Link>
        </div>
      </div>
    </section>
  );
}
