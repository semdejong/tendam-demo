import type { Metadata } from "next";
import ServiceView from "@/components/services/ServiceView";
import { duurzaamBlocks, duurzaamLead } from "@/lib/copy/duurzaam";

export const metadata: Metadata = {
  title: "Duurzaam bouwen en verbouwen",
  description: "Zonnepanelen, warmtepompen, laadpalen en accuopslag door Ten Dam in Delden.",
};

export default function DuurzaamPage() {
  return (
    <ServiceView
      eyebrow="Duurzaam"
      title="Duurzaam bouwen en verbouwen"
      lead={duurzaamLead}
      blocks={duurzaamBlocks}
      section="duurzaam"
      projects="zonnepanelen"
      image={{
        src: "/fotos/bedrijf/zonnepanelen-luchtfoto.jpg",
        alt: "Luchtfoto van een boerderij of schuur met zonnepanelen van Ten Dam",
      }}
    />
  );
}
