import type { Metadata } from "next";
import Link from "next/link";
import ServiceView from "@/components/services/ServiceView";
import { duurzaamBlocks, duurzaamLead } from "@/lib/copy/duurzaam";

export const metadata: Metadata = {
  title: "Duurzaam bouwen en verbouwen",
  description: "Zonnepanelen, warmtepompen, laadpalen en accuopslag door Ten Dam in Delden.",
};

const links = [
  { href: "/diensten/duurzaam/zonnepanelen", label: "Zonnepanelen" },
  { href: "/diensten/duurzaam/laadpalen", label: "Laadpalen" },
  { href: "/diensten/duurzaam/accuopslag", label: "Victron accuopslag" },
  { href: "/klantenservice/subsidies", label: "Subsidies" },
];

export default function DuurzaamPage() {
  return (
    <>
      <ServiceView eyebrow="Duurzaam" title="Duurzaam bouwen en verbouwen" lead={duurzaamLead} blocks={duurzaamBlocks} section="duurzaam" />
      <section data-section="duurzaam-links" className="mx-auto flex max-w-3xl flex-wrap gap-3 px-5 pb-12">
        {links.map((link) => (
          <Link key={link.href} href={link.href} className="inline-flex min-h-11 items-center border border-navy px-4 font-semibold">
            {link.label}
          </Link>
        ))}
      </section>
    </>
  );
}
