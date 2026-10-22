import Link from "next/link";
import { highlights, pathOf, photoAlt, projectQuote, projecten } from "@/lib/projects";

export default function ProjectSelect() {
  return (
    <section data-section="projecten" className="bg-white">
      <div className="mx-auto max-w-6xl px-5 py-16">
        <p className="text-xs font-semibold uppercase tracking-[0.16em] text-blue">Projecten in beeld</p>
        <h2 className="mt-2 text-3xl font-semibold md:text-4xl">Werk met een naam en een plaats.</h2>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {highlights.map((project) => {
            const quote = projectQuote(project);
            const foto = project.fotos[0];
            return (
              <Link key={project.oudeUrl} href={pathOf(project)} className="group border border-navy/10">
                {foto ? (
                  <img src={foto.src} alt={photoAlt(project, 0)} width={foto.w} height={foto.h} loading="lazy" className="aspect-[4/3] w-full object-cover" />
                ) : null}
                <div className="p-4">
                  <p className="text-xs font-semibold uppercase tracking-[0.14em] text-blue">{project.categorie}</p>
                  <h3 className="mt-1 text-xl font-semibold group-hover:text-blue">{project.titel}</h3>
                  {quote ? <p className="mt-2 text-sm text-navy/80">“{quote}”</p> : null}
                </div>
              </Link>
            );
          })}
        </div>
        <Link href="/projecten" className="mt-8 inline-flex min-h-11 items-center bg-navy px-5 font-semibold text-white">
          Bekijk alle {projecten.length} projecten
        </Link>
      </div>
    </section>
  );
}
