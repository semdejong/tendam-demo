import Link from "next/link";
import PageHero from "@/components/ui/PageHero";
import Sheet from "@/components/ui/Sheet";
import PageClose from "@/components/site/PageClose";
import Related from "@/components/projects/Related";

export type Block = {
  title?: string;
  paragraphs?: string[];
  items?: string[];
  links?: { href: string; label: string }[];
};

export default function ServiceView({
  eyebrow,
  title,
  lead,
  blocks,
  section,
  projects,
  image,
}: {
  eyebrow: string;
  title: string;
  lead: string;
  blocks: Block[];
  section: string;
  projects?: string;
  image?: { src: string; alt: string };
}) {
  return (
    <>
      <PageHero eyebrow={eyebrow} title={title} text={lead} section={section}>
        <Link href="/offerte" data-cta="offerte" className="inline-flex min-h-11 items-center bg-navy px-5 font-semibold text-white">
          Offerte of advies
        </Link>
        <Link href="/projecten" className="inline-flex min-h-11 items-center border border-navy bg-white px-5 font-semibold text-navy">
          Bekijk projecten
        </Link>
      </PageHero>
      {image ? (
        <div className="mx-auto max-w-6xl px-5">
          <img src={image.src} alt={image.alt} width={1600} height={900} className="mt-8 h-auto w-full object-cover" />
        </div>
      ) : null}
      <section data-section={`${section}-inhoud`} className="mx-auto grid max-w-6xl gap-8 px-5 py-12 lg:grid-cols-12">
        <aside className="lg:col-span-4">
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-blue">Op deze bladzijde</p>
          <ol className="mt-3 border-l border-blue/40">
            {blocks.map((block, index) => (
              <li key={block.title ?? index} className="py-2 pl-4">
                <span className="nums text-sm font-semibold text-blue">0{index + 1}</span>
                <span className="mt-0.5 block font-semibold">{block.title ?? title}</span>
              </li>
            ))}
          </ol>
        </aside>
        <div className="grid gap-4 lg:col-span-8">
          {blocks.map((block, index) => (
            <Sheet key={block.title ?? index} n={`0${index + 1}`} title={block.title}>
              {block.paragraphs?.map((paragraph) => (
                <p key={paragraph} className="mt-3 text-navy/90 first:mt-0">
                  {paragraph}
                </p>
              ))}
              {block.items ? (
                <ul className="mt-3 grid gap-2">
                  {block.items.map((item) => (
                    <li key={item} className="border border-navy/10 bg-paper px-4 py-3">
                      {item}
                    </li>
                  ))}
                </ul>
              ) : null}
              {block.links ? (
                <div className="mt-4 flex flex-wrap gap-3">
                  {block.links.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      data-cta={link.href === "/offerte" || link.href === "/storing" ? "offerte" : undefined}
                      className="inline-flex min-h-11 items-center font-semibold text-blue underline-offset-4 hover:underline"
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
              ) : null}
            </Sheet>
          ))}
        </div>
      </section>
      <Related category={projects} title={projects ? "Projecten in deze categorie" : "Projecten in beeld"} />
      <PageClose section={section} />
    </>
  );
}
