import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { findProject, photoAlt, projectQuote, projecten, slugOf } from "@/lib/projects";

export function generateStaticParams() {
  return projecten.map((project) => ({ categorie: project.categorieSlug, slug: slugOf(project) }));
}

export async function generateMetadata({ params }: { params: Promise<{ categorie: string; slug: string }> }): Promise<Metadata> {
  const { categorie, slug } = await params;
  const project = findProject(categorie, slug);
  if (!project) return {};
  return { title: project.titel, description: `${project.titel}, ${project.categorie} door Ten Dam.` };
}

export default async function ProjectPage({ params }: { params: Promise<{ categorie: string; slug: string }> }) {
  const { categorie, slug } = await params;
  const project = findProject(categorie, slug);
  if (!project) notFound();
  const quote = projectQuote(project);
  return (
    <article data-section="project" className="mx-auto max-w-6xl px-5 py-12">
      <p className="text-xs font-semibold uppercase tracking-[0.16em] text-blue">
        <Link href={`/projecten/${project.categorieSlug}`} className="hover:underline">
          {project.categorie}
        </Link>
      </p>
      <h1 className="mt-2 text-4xl font-semibold">{project.titel}</h1>
      {project.oudeUrl === "/projecten/horeca/hotel-huis-vermeer" ? <p className="mt-2 text-navy/80">Deventer</p> : null}
      {project.plaats && !project.titel.toLowerCase().includes(project.plaats.toLowerCase()) ? (
        <p className="mt-2 text-navy/80">{project.plaats}</p>
      ) : null}
      {quote ? <blockquote className="mt-4 max-w-2xl border-l-2 border-blue pl-4 text-lg">“{quote}”</blockquote> : null}
      <ul className="mt-8 grid gap-4">
        {project.fotos.map((foto, index) => (
          <li key={foto.src}>
            <img src={foto.src} alt={photoAlt(project, index)} width={foto.w} height={foto.h} loading="lazy" className="h-auto w-full object-cover" />
          </li>
        ))}
      </ul>
      <Link href="/offerte" data-cta="offerte" className="mt-8 inline-flex min-h-11 items-center bg-navy px-5 font-semibold text-white">
        Offerte of advies over een vergelijkbaar project
      </Link>
    </article>
  );
}
