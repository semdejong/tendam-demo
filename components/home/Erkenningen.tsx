import Link from "next/link";
import { ERKENNINGEN } from "@/lib/site";

export default function Erkenningen() {
  return (
    <section data-section="erkenningen" className="bg-paper">
      <div className="mx-auto grid max-w-6xl items-center gap-8 px-5 py-16 md:grid-cols-2">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-blue">Erkenningen</p>
          <h2 className="mt-2 text-3xl font-semibold">Lidmaatschappen en certificeringen.</h2>
          <ul className="mt-4 grid gap-2 sm:grid-cols-2">
            {ERKENNINGEN.map((item) => (
              <li key={item} className="border border-navy/10 bg-white px-3 py-2 text-sm font-semibold">
                {item}
              </li>
            ))}
          </ul>
          <p className="mt-4 text-navy/85">Ten Dam is een erkend leerbedrijf, met een goede band met ROC van Twente.</p>
          <Link href="/over-ons/erkenningen" className="mt-4 inline-flex min-h-11 items-center font-semibold text-blue underline-offset-4 hover:underline">
            Alle erkenningen
          </Link>
        </div>
        <img
          src="/fotos/bedrijf/erkenningen-logos.jpg"
          alt="Logo-overzicht van de erkenningen van Ten Dam: VCA, InstallQ, KvINL Erkend Installateur, erkend leerbedrijf, Techniek Nederland, ThuisComfort en duurzameaanbieder.nl"
          width={1200}
          height={700}
          loading="lazy"
          className="h-auto w-full bg-white object-contain"
        />
      </div>
    </section>
  );
}
