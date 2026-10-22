import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/ui/PageHero";
import { CategoryChips, ProjectGrid } from "@/components/projects/ProjectList";
import PageClose from "@/components/site/PageClose";
import { categories, categoryIntro, projecten } from "@/lib/projects";

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
      <section data-section="projecten-categorieen" className="mx-auto max-w-6xl px-5 pt-10">
        <h2 className="text-2xl font-semibold">Tien categorieën, elk met de eigen projectnamen.</h2>
        <ul className="mt-4 grid gap-3 md:grid-cols-2">
          {categories.map((category) => (
            <li key={category.slug}>
              <Link href={`/projecten/${category.slug}`} className="block border border-navy/10 p-4 hover:border-blue">
                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-blue">
                  <span className="nums">{category.count}</span> projecten
                </p>
                <h3 className="mt-1 text-xl font-semibold">{category.label}</h3>
                <p className="mt-1 text-sm text-navy/80">{categoryIntro(category.slug)}</p>
              </Link>
            </li>
          ))}
        </ul>
      </section>
      <section data-section="projecten-overzicht" className="mx-auto max-w-6xl px-5 py-10">
        <CategoryChips />
        <ProjectGrid items={projecten} />
      </section>
      <PageClose section="projecten" />
    </>
  );
}
