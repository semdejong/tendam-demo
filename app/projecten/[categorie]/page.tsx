import type { Metadata } from "next";
import { notFound } from "next/navigation";
import PageHero from "@/components/ui/PageHero";
import { CategoryChips, ProjectGrid } from "@/components/projects/ProjectList";
import PageClose from "@/components/site/PageClose";
import { categories, categoryIntro, projecten } from "@/lib/projects";

export function generateStaticParams() {
  return categories.map((category) => ({ categorie: category.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ categorie: string }> }): Promise<Metadata> {
  const { categorie } = await params;
  const category = categories.find((item) => item.slug === categorie);
  if (!category) return {};
  return { title: category.label, description: categoryIntro(category.slug) };
}

export default async function CategoriePage({ params }: { params: Promise<{ categorie: string }> }) {
  const { categorie } = await params;
  const category = categories.find((item) => item.slug === categorie);
  if (!category) notFound();
  const items = projecten.filter((project) => project.categorieSlug === categorie);
  return (
    <>
      <PageHero section="projectcategorie" eyebrow="Projecten" title={category.label} text={categoryIntro(category.slug)} />
      <section data-section="projectcategorie-lijst" className="mx-auto max-w-6xl px-5 py-10">
        <CategoryChips active={category.slug} />
        <ProjectGrid items={items} />
      </section>
      <PageClose section="projectcategorie" />
    </>
  );
}
