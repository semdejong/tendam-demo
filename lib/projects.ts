import data from "@/data/projecten.json";

export type Foto = { src: string; w: number; h: number };

export type Project = {
  categorie: string;
  categorieSlug: string;
  titel: string;
  plaats: string;
  oudeUrl: string;
  fotos: Foto[];
};

export const projecten = data as Project[];

export function slugOf(project: Project) {
  const slug = project.oudeUrl.split("/").filter(Boolean).pop();
  if (!slug) throw new Error(`Geen slug voor ${project.titel}`);
  return slug;
}

export function pathOf(project: Project) {
  return `/projecten/${project.categorieSlug}/${slugOf(project)}`;
}

export function findProject(categorie: string, slug: string) {
  return projecten.find((project) => project.categorieSlug === categorie && slugOf(project) === slug);
}

const order = [
  "utiliteit",
  "nieuwbouw",
  "verbouwingen",
  "zonnepanelen",
  "sanitair-en-keuken",
  "horeca",
  "dak-en-zinkwerk",
  "verduurzaming",
  "restauratie",
  "agrarisch",
];

export const categories = order
  .map((slug) => projecten.find((project) => project.categorieSlug === slug))
  .filter((project): project is Project => Boolean(project))
  .map((project) => ({
    slug: project.categorieSlug,
    label: project.categorie,
    count: projecten.filter((item) => item.categorieSlug === project.categorieSlug).length,
  }));

const intros: Record<string, string> = {
  agrarisch: "Agrarische referenties van Ten Dam Installatietechniek in Delden.",
  "dak-en-zinkwerk": "Dak- en zinkwerk van Ten Dam: dakrenovatie en zinkwerk.",
  horeca:
    "Hotels of restaurants helpen aan een nieuwe keuken, nieuwe badkamers of een complete renovatie is één van onze specialiteiten.",
  nieuwbouw: "Nieuwbouwreferenties van Ten Dam Installatietechniek in Delden.",
  restauratie: "Restauratiereferenties van Ten Dam Installatietechniek in Delden.",
  "sanitair-en-keuken": "Sanitair- en keukenreferenties van Ten Dam Installatietechniek in Delden.",
  utiliteit:
    "Installaties voor utiliteitsbouw: kantoren, industrie, onderwijs en sport, bedrijfshuisvesting en zorg. We gaan uit van de functie van het pand.",
  verbouwingen: "Verbouwingsreferenties van Ten Dam Installatietechniek in Delden en omgeving.",
  verduurzaming: "Verduurzaming van woningen, laadpalen en ledverlichting.",
  zonnepanelen:
    "Wij hebben een breed aanbod zonnepanelen, waardoor er altijd wel een systeem tussen zit dat past bij uw dak. Hieronder de systemen die wij hebben geplaatst.",
};

export function categoryIntro(slug: string) {
  return intros[slug] ?? "";
}

const highlightUrls = [
  "/projecten/horeca/hotel-huis-vermeer",
  "/projecten/restauratie/bolwerksmolendeventer",
  "/projecten/restauratie/erve-postambt-delden",
  "/projecten/nieuwbouw/luxe-woonhuishengelo",
  "/projecten/agrarisch/kapschuurbuurse",
  "/projecten/zonnepanelen/schuin-dak-systeem",
];

export const highlights = highlightUrls
  .map((url) => projecten.find((project) => project.oudeUrl === url))
  .filter((project): project is Project => Boolean(project));

export function projectQuote(project: Project) {
  if (project.oudeUrl === "/projecten/horeca/hotel-huis-vermeer") {
    return "Werkelijk alles wat er aan te leggen was, hebben wij aangelegd.";
  }
  return "";
}

export function photoAlt(project: Project, index: number) {
  const place =
    project.plaats && !project.titel.toLowerCase().includes(project.plaats.toLowerCase())
      ? ` in ${project.plaats}`
      : "";
  return `${project.titel}${place}, ${project.categorie.toLowerCase()} van Ten Dam, foto ${index + 1} van ${project.fotos.length}`;
}
