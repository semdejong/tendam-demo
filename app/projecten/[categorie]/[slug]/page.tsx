import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import PageClose from "@/components/site/PageClose";
import Related from "@/components/projects/Related";
import { categoryIntro, findProject, photoAlt, projectQuote, projecten, slugOf } from "@/lib/projects";

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
  const place =
    project.oudeUrl === "/projecten/horeca/hotel-huis-vermeer"
      ? "Deventer"
      : project.plaats && !project.titel.toLowerCase().includes(project.plaats.toLowerCase())
        ? project.plaats
        : "";

  return (
    <>
      <article data-section="project" className="mx-auto max-w-6xl px-5 py-12">
        <p className="text-xs font-semibold uppercase tracking-[0.16em] text-blue">
          <Link href="/projecten" className="hover:underline">
            Projecten
          </Link>
          <span aria-hidden> / </span>
          <Link href={`/projecten/${project.categorieSlug}`} className="hover:underline">
            {project.categorie}
          </Link>
        </p>
        <h1 className="mt-2 max-w-3xl text-4xl font-semibold md:text-5xl">{project.titel}</h1>
        <dl className="mt-4 flex flex-wrap gap-6 text-sm">
          <div>
            <dt className="text-xs font-semibold uppercase tracking-[0.14em] text-blue">Categorie</dt>
            <dd className="font-semibold">{project.categorie}</dd>
          </div>
          {place ? (
            <div>
              <dt className="text-xs font-semibold uppercase tracking-[0.14em] text-blue">Plaats</dt>
              <dd>{place}</dd>
            </div>
          ) : null}
          <div>
            <dt className="text-xs font-semibold uppercase tracking-[0.14em] text-blue">Foto’s</dt>
            <dd className="nums">{project.fotos.length}</dd>
          </div>
        </dl>
        <p className="mt-4 max-w-2xl text-navy/85">{categoryIntro(project.categorieSlug)}</p>
        {quote ? (
          <blockquote className="mt-6 max-w-2xl border-l-2 border-blue pl-4 text-lg">“{quote}”</blockquote>
        ) : null}
        <ul className="mt-8 grid gap-3 md:grid-cols-2">
          {project.fotos.map((foto, index) => (
            <li key={foto.src} className={index === 0 ? "md:col-span-2" : ""}>
              <img src={foto.src} alt={photoAlt(project, index)} width={foto.w} height={foto.h} loading="lazy" className="h-auto w-full object-cover" />
            </li>
          ))}
        </ul>
        <Link href="/offerte" data-cta="offerte" className="mt-8 inline-flex min-h-11 items-center bg-navy px-5 font-semibold text-white">
          Offerte of advies over een vergelijkbaar project
        </Link>
      </article>
      <Related category={project.categorieSlug} except={project.oudeUrl} />
      <PageClose section="project" />
    </>
  );
}
