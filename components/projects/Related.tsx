import Link from "next/link";
import { highlights, pathOf, photoAlt, projecten, type Project } from "@/lib/projects";

export default function Related({
  category,
  except,
  title,
}: {
  category?: string;
  except?: string;
  title?: string;
}) {
  const pool = (category ? projecten.filter((item) => item.categorieSlug === category) : highlights).filter(
    (item) => item.oudeUrl !== except,
  );
  const items: Project[] = pool.slice(0, 3);
  if (items.length === 0) return null;
  const heading = title ?? (category ? "Meer in deze categorie" : "Projecten in beeld");

  return (
    <section data-section="meer-projecten" className="bg-paper">
      <div className="mx-auto max-w-6xl px-5 py-14">
        <h2 className="text-2xl font-semibold">{heading}</h2>
        <ul className="mt-6 grid gap-4 md:grid-cols-3">
          {items.map((project) => {
            const foto = project.fotos[0];
            return (
              <li key={project.oudeUrl}>
                <Link href={pathOf(project)} className="block bg-white">
                  {foto ? (
                    <img
                      src={foto.src}
                      alt={photoAlt(project, 0)}
                      width={foto.w}
                      height={foto.h}
                      loading="lazy"
                      className="aspect-[4/3] w-full object-cover"
                    />
                  ) : null}
                  <div className="p-4">
                    <p className="text-xs font-semibold uppercase tracking-[0.14em] text-blue">{project.categorie}</p>
                    <p className="mt-1 font-semibold">{project.titel}</p>
                  </div>
                </Link>
              </li>
            );
          })}
        </ul>
        <Link href={category ? `/projecten/${category}` : "/projecten"} className="mt-6 inline-flex min-h-11 items-center font-semibold text-blue underline-offset-4 hover:underline">
          {category ? "Alle projecten in deze categorie" : "Bekijk alle projecten"}
        </Link>
      </div>
    </section>
  );
}
