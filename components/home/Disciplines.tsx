import Link from "next/link";
import { Bolt, Flame, Waves } from "@/components/ui/Icons";

const items = [
  {
    icon: Flame,
    title: "Vuur",
    text: "Centrale verwarming, vloerverwarming, infrarood, naregeling en klimaatplafond. Van cv-ketel tot warmtepomp.",
    href: "/diensten/verwarming",
  },
  {
    icon: Bolt,
    title: "Stroom",
    text: "Elektra voor woning, bedrijf, school en overheid. Groepenkast, verlichting, domotica, data en brandmelding. NEN 1010 en NEN 3140.",
    href: "/diensten/elektra",
  },
  {
    icon: Waves,
    title: "Water",
    text: "Loodgieterswerk, badkamer en keuken van A tot Z: sloop, leidingen, sanitair en tegelwerk.",
    href: "/diensten/sanitair-en-keuken",
  },
];

export default function Disciplines() {
  return (
    <section data-section="vuur-stroom-water" className="bg-white">
      <div className="mx-auto max-w-6xl px-5 py-16">
        <p className="text-xs font-semibold uppercase tracking-[0.16em] text-blue">Achter de schermen</p>
        <h2 className="mt-2 max-w-3xl text-3xl font-semibold md:text-4xl">Ons vakwerk is vaak in de muur, achter de schermen.</h2>
        <p className="mt-4 max-w-3xl text-navy/85">
          Specialist op het gebied van elektrotechniek, cv-installaties, dakbedekking en loodgieterswerk. Elektra, leidingwerk en bekabeling: verborgen voor het blote oog, continu van belang.
        </p>
        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {items.map((item) => (
            <Link key={item.title} href={item.href} className="border border-navy/10 bg-paper p-6 hover:border-blue">
              <item.icon />
              <h3 className="mt-3 text-2xl font-semibold">{item.title}</h3>
              <p className="mt-2 text-navy/85">{item.text}</p>
            </Link>
          ))}
        </div>
        <p className="mt-6 text-navy/85">
          Ook dak- en zinkwerk, ventilatie, brandbeveiliging en noodverlichting horen bij het totaalpakket.{" "}
          <Link href="/diensten" className="font-semibold text-blue underline-offset-4 hover:underline">
            Alle diensten
          </Link>
        </p>
      </div>
    </section>
  );
}
