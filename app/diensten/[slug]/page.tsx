import type { Metadata } from "next";
import { notFound } from "next/navigation";
import ServiceView from "@/components/services/ServiceView";
import { diensten, getDienst } from "@/lib/copy/diensten";

export function generateStaticParams() {
  return diensten.map((dienst) => ({ slug: dienst.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const dienst = getDienst(slug);
  if (!dienst) return {};
  return { title: dienst.title, description: dienst.description };
}

export default async function DienstPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const dienst = getDienst(slug);
  if (!dienst) notFound();
  return <ServiceView eyebrow="Diensten" title={dienst.title} lead={dienst.lead} blocks={dienst.blocks} section={dienst.slug} />;
}
