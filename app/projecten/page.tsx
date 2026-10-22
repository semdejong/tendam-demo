import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/ui/PageHero";
import { CategoryChips, ProjectGrid } from "@/components/projects/ProjectList";
import { projecten } from "@/lib/projects";

export const metadata: Metadata = {
  title: "Projecten",
  description: "Projecten van Ten Dam: utiliteit, nieuwbouw, verbouw, restauratie, horeca, sanitair en zonnepanelen.",
};

export default function ProjectenPage() {
  return (
    <>
      <PageHero
        section="projecten-hero"
        eyebrow="Projecten"
        title={`${projecten.length} projecten, met eigen foto’s`}
        text="Sinds 1983 combineren wij vakmanschap met moderne techniek. De titels hieronder zijn de projectnamen zoals Ten Dam ze zelf publiceert."
      >
        <Link href="/offerte" data-cta="offerte" className="inline-flex min-h-11 items-center bg-navy px-5 font-semibold text-white">
          Vrijblijvend afspreken
        </Link>
      </PageHero>
      <section data-section="projecten-overzicht" className="mx-auto max-w-6xl px-5 py-10">
        <CategoryChips />
        <ProjectGrid items={projecten} />
      </section>
    </>
  );
}
