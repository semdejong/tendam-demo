import Link from "next/link";
import { PHONE, SHOP_HOURS } from "@/lib/site";

const routes = [
  {
    title: "Ik heb een storing",
    text: "De storingsdienst is 24/7 bereikbaar. Een flink deel van de storingen is met een paar controles al geholpen.",
    href: "/storing",
    cta: "Naar de controles",
    tone: "urgent" as const,
  },
  {
    title: "Ik wil (ver)bouwen of verduurzamen",
    text: "Van badkamer en elektra tot zonnepanelen, warmtepomp en laadpaal. Eerst advies, daarna een duidelijke offerte.",
    href: "/offerte",
    cta: "Offerte of adviesgesprek",
    tone: "navy" as const,
  },
  {
    title: "Ik kom naar de winkel",
    text: "IJzerwaren, sleutelservice en installatiemateriaal, aan de rand van Delden met ruime parkeergelegenheid.",
    href: "/winkel",
    cta: "Openingstijden en assortiment",
    tone: "blue" as const,
  },
];

export default function Routes() {
  return (
    <section data-section="drie-routes" className="bg-paper">
      <div className="mx-auto grid max-w-6xl gap-4 px-5 py-14 md:grid-cols-3">
        {routes.map((route) => (
          <article key={route.title} className="flex flex-col border border-navy/10 bg-white p-6">
            <h2 className="text-2xl font-semibold text-navy">{route.title}</h2>
            <p className="mt-3 flex-1 text-navy/85">{route.text}</p>
            {route.tone === "urgent" ? (
              <a href={PHONE.tel} className="nums mt-4 inline-flex min-h-11 items-center font-semibold text-urgent">
                Bel 24/7: {PHONE.display}
              </a>
            ) : null}
            {route.href === "/winkel" ? (
              <ul className="mt-4 space-y-1 text-sm">
                {SHOP_HOURS.map((row) => (
                  <li key={row.dag}>
                    <span className="font-semibold">{row.dag}: </span>
                    <span className="nums">{row.tijd}</span>
                  </li>
                ))}
              </ul>
            ) : null}
            <Link
              href={route.href}
              data-cta={route.href === "/offerte" || route.href === "/storing" ? "offerte" : undefined}
              className={`mt-5 inline-flex min-h-11 items-center px-4 font-semibold text-white ${route.tone === "urgent" ? "bg-urgent" : "bg-navy"}`}
            >
              {route.cta}
            </Link>
          </article>
        ))}
      </div>
    </section>
  );
}
