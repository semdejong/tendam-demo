import Link from "next/link";
import { PHONE, SHOP_PHONE } from "@/lib/site";

export default function PageClose({ section }: { section: string }) {
  return (
    <section data-section={`${section}-vervolg`} className="blueprint text-white">
      <div className="mx-auto max-w-6xl px-5 py-14">
        <p className="text-xs font-semibold uppercase tracking-[0.16em] text-water">Drie lijnen, één bedrijf</p>
        <h2 className="mt-2 max-w-xl text-3xl font-semibold">Vuur, stroom en water. En de winkel ernaast.</h2>
        <div className="mt-8 grid gap-4 md:grid-cols-3">
          <a href={PHONE.tel} className="border border-white/25 p-5 hover:border-white">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-white/70">01 · Storing</p>
            <p className="mt-2 text-xl font-semibold">24/7 bereikbaar</p>
            <p className="nums mt-2 text-lg">{PHONE.display}</p>
          </a>
          <Link href="/offerte" data-cta="offerte" className="border border-white/25 p-5 hover:border-white">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-white/70">02 · Gepland werk</p>
            <p className="mt-2 text-xl font-semibold">Offerte of advies</p>
            <p className="mt-2 text-white/80">Met schetsplan, zonder een te scherpe prijs en achteraf meerwerk.</p>
          </Link>
          <Link href="/winkel" className="border border-white/25 p-5 hover:border-white">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-white/70">03 · Winkel</p>
            <p className="mt-2 text-xl font-semibold">Langskomen in Delden</p>
            <p className="nums mt-2">
              {SHOP_PHONE.display}
              <span className="nums font-normal text-white/80"> · rand van Delden, ruime parkeergelegenheid</span>
            </p>
          </Link>
        </div>
      </div>
    </section>
  );
}
