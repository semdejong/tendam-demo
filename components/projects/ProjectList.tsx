import Link from "next/link";
import { categories, pathOf, photoAlt, type Project } from "@/lib/projects";

export function CategoryChips({ active }: { active?: string }) {
  const base = "inline-flex min-h-11 shrink-0 items-center border px-4 text-sm font-semibold";
  return (
    <div className="-mx-5 flex gap-2 overflow-x-auto px-5 pb-2" role="navigation" aria-label="Projectcategorieën">
      <Link href="/projecten" aria-current={active ? undefined : "page"} className={`${base} ${active ? "border-navy/15 bg-white" : "border-navy bg-navy text-white"}`}>
        Alles
      </Link>
      {categories.map((category) => (
        <Link
          key={category.slug}
          href={`/projecten/${category.slug}`}
          aria-current={active === category.slug ? "page" : undefined}
          className={`${base} ${active === category.slug ? "border-navy bg-navy text-white" : "border-navy/15 bg-white"}`}
        >
          {category.label}
          <span className="nums ml-2 text-xs opacity-70">{category.count}</span>
        </Link>
      ))}
    </div>
  );
}

export function ProjectGrid({ items }: { items: Project[] }) {
  return (
    <ul className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {items.map((project) => {
        const foto = project.fotos[0];
        return (
          <li key={project.oudeUrl}>
            <Link href={pathOf(project)} className="block border border-navy/10 bg-white">
              {foto ? (
                <img src={foto.src} alt={photoAlt(project, 0)} width={foto.w} height={foto.h} loading="lazy" className="aspect-[4/3] w-full object-cover" />
              ) : null}
              <div className="p-4">
                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-blue">{project.categorie}</p>
                <h2 className="mt-1 text-lg font-semibold">{project.titel}</h2>
              </div>
            </Link>
          </li>
        );
      })}
    </ul>
  );
}
