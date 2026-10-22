import Link from "next/link";
import PageHero from "@/components/ui/PageHero";

export type Block = { title?: string; paragraphs?: string[]; items?: string[] };

export default function ServiceView({
  eyebrow,
  title,
  lead,
  blocks,
  section,
}: {
  eyebrow: string;
  title: string;
  lead: string;
  blocks: Block[];
  section: string;
}) {
  return (
    <>
      <PageHero eyebrow={eyebrow} title={title} text={lead} section={section}>
        <Link href="/offerte" data-cta="offerte" className="inline-flex min-h-11 items-center bg-navy px-5 font-semibold text-white">
          Offerte of advies
        </Link>
        <Link href="/projecten" className="inline-flex min-h-11 items-center border border-navy px-5 font-semibold text-navy">
          Bekijk projecten
        </Link>
      </PageHero>
      <section data-section={`${section}-inhoud`} className="mx-auto max-w-3xl space-y-8 px-5 py-12">
        {blocks.map((block) => (
          <div key={block.title ?? block.paragraphs?.[0]}>
            {block.title ? <h2 className="text-2xl font-semibold">{block.title}</h2> : null}
            {block.paragraphs?.map((paragraph) => (
              <p key={paragraph} className="mt-3 text-navy/90">
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
          </div>
        ))}
      </section>
    </>
  );
}
