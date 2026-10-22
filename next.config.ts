import type { NextConfig } from "next";
import { readFileSync } from "node:fs";
import { join } from "node:path";

type ProjectRow = { categorieSlug: string; oudeUrl: string };

const projecten = JSON.parse(readFileSync(join(process.cwd(), "data/projecten.json"), "utf8")) as ProjectRow[];

function projectRedirects() {
  const seen = new Set<string>();
  const rules: { source: string; destination: string; permanent: false }[] = [];
  for (const project of projecten) {
    const slug = project.oudeUrl.split("/").filter(Boolean).pop();
    if (!slug) continue;
    const destination = `/projecten/${project.categorieSlug}/${slug}`;
    if (project.oudeUrl === destination || seen.has(project.oudeUrl)) continue;
    seen.add(project.oudeUrl);
    rules.push({ source: project.oudeUrl, destination, permanent: false });
  }
  return rules;
}

const staticRedirects: { source: string; destination: string; permanent: false }[] = [
  { source: "/diensten/duurzaam-bouwen-en-verbouwen", destination: "/diensten/duurzaam", permanent: false },
  { source: "/diensten/duurzaam-bouwen-en-verbouwen/laadpalen1", destination: "/diensten/duurzaam/laadpalen", permanent: false },
  {
    source: "/diensten/duurzaam-bouwen-en-verbouwen/victron-accuopslag-systeem",
    destination: "/diensten/duurzaam/accuopslag",
    permanent: false,
  },
  {
    source: "/diensten/duurzaam-bouwen-en-verbouwen/zonnepanelen1",
    destination: "/diensten/duurzaam/zonnepanelen",
    permanent: false,
  },
  { source: "/diensten/elektrische-installaties", destination: "/diensten/elektra", permanent: false },
  {
    source: "/diensten/onderhoudscontracten-en-inspecties",
    destination: "/diensten/onderhoud-en-inspecties",
    permanent: false,
  },
  { source: "/projecten/utiliteiten", destination: "/projecten/utiliteit", permanent: false },
  { source: "/projecten/dak-en-zinkwerkzaamheden1", destination: "/projecten/dak-en-zinkwerk", permanent: false },
  { source: "/projecten/sanitair-en-keuken1", destination: "/projecten/sanitair-en-keuken", permanent: false },
  { source: "/projecten/in-aanbouw", destination: "/projecten", permanent: false },
  { source: "/projecten/in-aanbouw/:path*", destination: "/projecten", permanent: false },
  { source: "/over-ons/vacatures", destination: "/werken-bij", permanent: false },
  { source: "/klantenservice/ik-heb-een-storing", destination: "/storing", permanent: false },
  { source: "/klantenservice/ik-wil-graag-een-offerte", destination: "/offerte", permanent: false },
  { source: "/klantenservice/ik-wil-mijn-cvketel-bijvullen", destination: "/klantenservice/stappenplannen", permanent: false },
  { source: "/klantenservice/ik-wil-mijn-cvketel-ontluchten", destination: "/klantenservice/stappenplannen", permanent: false },
  { source: "/klantenservice/ventilatie-reinigen", destination: "/klantenservice/stappenplannen", permanent: false },
  { source: "/klantenservice/subsidies-en-leningen", destination: "/klantenservice/subsidies", permanent: false },
  { source: "/klantenservice/ik-wil-een-onderhoudscontract", destination: "/diensten/onderhoud-en-inspecties", permanent: false },
  { source: "/klantenservice/ik-wil-graag-duurzaam-verbouwen", destination: "/diensten/duurzaam", permanent: false },
];

const nextConfig: NextConfig = {
  cacheComponents: true,
  partialPrefetching: true,
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
  images: {
    unoptimized: true,
  },
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [{ key: "X-Robots-Tag", value: "noindex, nofollow" }],
      },
    ];
  },
  async redirects() {
    return [...staticRedirects, ...projectRedirects()];
  },
};

export default nextConfig;
