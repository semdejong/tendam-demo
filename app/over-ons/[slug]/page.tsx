import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import PageHero from "@/components/ui/PageHero";
import { ERKENNINGEN, WERKWIJZE } from "@/lib/site";
import { aboutPages } from "@/lib/copy/about";

export function generateStaticParams() {
  return Object.keys(aboutPages).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const page = aboutPages[slug];
  if (!page) return {};
  return { title: page.title, description: page.description };
}

export default async function AboutSlug({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const page = aboutPages[slug];
  if (!page) notFound();
  return (
    <>
      <PageHero section={slug} eyebrow="Over ons" title={page.title} text={page.description} />
      <section data-section={`${slug}-inhoud`} className="mx-auto max-w-3xl space-y-4 px-5 py-12">
        {page.paragraphs.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
        {slug === "werkwijze" ? (
          <ol className="grid gap-4">
            {WERKWIJZE.map((step, index) => (
              <li key={step.titel} className="border border-navy/10 p-4">
                <p className="nums text-sm font-semibold text-blue">0{index + 1}</p>
                <h2 className="text-xl font-semibold">{step.titel}</h2>
                <p className="mt-2">{step.tekst}</p>
              </li>
            ))}
          </ol>
        ) : null}
        {slug === "erkenningen" ? (
          <>
            <ul className="grid gap-2 sm:grid-cols-2">
              {ERKENNINGEN.map((item) => (
                <li key={item} className="border border-navy/10 bg-paper px-3 py-2 font-semibold">
                  {item}
                </li>
              ))}
            </ul>
            <img
              src="/fotos/bedrijf/erkenningen-logos.jpg"
              alt="Logo-overzicht van de erkenningen van Ten Dam: VCA, InstallQ, KvINL Erkend Installateur, erkend leerbedrijf, Techniek Nederland, ThuisComfort en duurzameaanbieder.nl"
              width={1200}
              height={700}
              loading="lazy"
              className="h-auto w-full bg-white object-contain"
            />
            <p>
              Ten Dam is een erkend leerbedrijf. Meer daarover op de pagina{" "}
              <Link href="/over-ons/erkend-leerbedrijf" className="font-semibold text-blue underline-offset-4 hover:underline">
                erkend leerbedrijf
              </Link>
              .
            </p>
          </>
        ) : null}
      </section>
    </>
  );
}
