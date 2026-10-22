import type { Metadata } from "next";
import { notFound } from "next/navigation";
import ServiceView from "@/components/services/ServiceView";
import { duurzaamKinderen } from "@/lib/copy/duurzaam";

export function generateStaticParams() {
  return Object.keys(duurzaamKinderen).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const page = duurzaamKinderen[slug];
  if (!page) return {};
  return { title: page.title, description: page.description };
}

export default async function DuurzaamKind({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const page = duurzaamKinderen[slug];
  if (!page) notFound();
  return (
    <ServiceView
      eyebrow="Duurzaam"
      title={page.title}
      lead={page.lead}
      blocks={page.blocks}
      section={slug}
      projects={page.projects}
      image={page.image}
    />
  );
}
