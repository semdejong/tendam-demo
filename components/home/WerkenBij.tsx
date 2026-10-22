import Link from "next/link";
import { MAIL_INFO } from "@/lib/site";

const roles = ["Servicemonteur", "Monteur E of E/W", "Monteur zonnepanelen", "Leerling monteur E of W"];

export default function WerkenBij() {
  return (
    <section data-section="werken-bij" className="bg-white">
      <div className="mx-auto max-w-6xl px-5 py-16">
        <p className="text-xs font-semibold uppercase tracking-[0.16em] text-blue">Werken bij Ten Dam</p>
        <h2 className="mt-2 text-3xl font-semibold md:text-4xl">Wij zoeken regelmatig vakmensen.</h2>
        <p className="mt-4 max-w-3xl text-navy/85">
          Voorbeelden van functies: {roles.join(", ")}. Een open sollicitatie of een stageverzoek mailt u naar{" "}
          <a className="font-semibold text-blue" href={`mailto:${MAIL_INFO}`}>
            {MAIL_INFO}
          </a>
          .
        </p>
        <Link href="/werken-bij" className="mt-6 inline-flex min-h-11 items-center bg-navy px-5 font-semibold text-white">
          Werken en stage
        </Link>
      </div>
    </section>
  );
}
