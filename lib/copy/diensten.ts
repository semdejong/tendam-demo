import type { Block } from "@/components/services/ServiceView";

export type Dienst = {
  slug: string;
  title: string;
  description: string;
  lead: string;
  projects?: string;
  blocks: Block[];
};

export const diensten: Dienst[] = [
  {
    slug: "verwarming",
    title: "Verwarming",
    description: "Centrale verwarming, vloerverwarming, infrarood, naregeling en klimaatplafond door Ten Dam in Delden.",
    lead: "De warmte in een ruimte hoort bij de functie van die ruimte. Naast de cv-ketel en de radiator zijn er meer manieren om een woning of bedrijfspand te verwarmen.",
    blocks: [
      {
        title: "Afgestemd op de ruimte",
        paragraphs: [
          "Door de huidige ontwikkelingen is het op verschillende manieren mogelijk om uw huis of bedrijfspand te verwarmen. Het is al lang niet meer zo dat alleen de cv-installatie met de bijbehorende radiator voor de warmte zorgt.",
          "De techniek staat niet stil. Naast de bekende cv-ketel en radiator wekken wij warmte op langs vernieuwde wegen, altijd afgestemd op wat de ruimte moet doen.",
        ],
      },
      {
        title: "Wat wij aanleggen",
        items: ["Centrale verwarming", "Vloerverwarming", "Infraroodverwarming", "Naregeling verwarming", "Klimaatplafond"],
        links: [
          { href: "/klantenservice/bespaartips", label: "Bespaartips voor pomp en naregeling" },
          { href: "/diensten/onderhoud-en-inspecties", label: "Onderhoud van ketel en warmtepomp" },
          { href: "/storing", label: "Storing aan de cv-ketel" },
        ],
      },
    ],
  },
  {
    slug: "sanitair-en-keuken",
    title: "Sanitair en keuken",
    description: "Badkamer en keuken van A tot Z: sloop, leidingen, sanitair, tegelwerk, elektra en afvoer.",
    lead: "Een nieuwe badkamer, een toiletgroep of renovatie van de douche. U zoekt het sanitair uit, wij nemen het traject over.",
    projects: "sanitair-en-keuken",
    blocks: [
      {
        title: "Badkamer van A tot Z",
        paragraphs: [
          "Installatiewerk, sanitair, aankleding en persoonlijke wensen: wij kunnen het traject regelen. Van sloop van het oude sanitair en het aanleggen van leidingen tot het plaatsen van het sanitair en het betegelen van muren en vloeren.",
          "Een showroombezoek bij Lammering, Hogeweg of Plieger regelen wij. Die showrooms zijn niet voor iedereen toegankelijk; dankzij de samenwerking met deze leveranciers kunnen wij dat voor u openen.",
        ],
      },
      {
        title: "Keuken: meer dan kastjes",
        paragraphs: [
          "Een nieuwe keuken betekent vaak dat elektra en afvoer opnieuw worden aangelegd of verlegd, zodat alles aansluit op het energienet en het riool.",
          "Gaat u elektrisch koken, dan kan een extra groep in de meterkast nodig zijn. Verhuist de vaatwasser, de wasmachine, de Quooker of de gasaansluiting, dan verleggen wij toevoer en afvoer.",
        ],
        links: [{ href: "/projecten/sanitair-en-keuken", label: "Sanitair- en keukenprojecten" }],
      },
    ],
  },
  {
    slug: "elektra",
    title: "Elektrische installaties",
    description: "Elektra voor woning, bedrijf, school en overheid. Groepenkast, verlichting, data en brandmelding, volgens NEN 1010 en NEN 3140.",
    lead: "Van een dimmer tot een nieuwe meterkast of een elektrische besturing. Voor particulieren, bedrijven, scholen en overheidsinstellingen.",
    projects: "utiliteit",
    blocks: [
      {
        title: "Woning, bedrijf, school, overheid",
        paragraphs: [
          "Ten Dam maakt elektrische installaties voor een breed scala aan opdrachtgevers: verlichting en datacommunicatie in woningen en bedrijfspanden, en werk voor scholen en overheidsinstellingen.",
          "Of het nu gaat om het vervangen van een dimmer, het plaatsen van een nieuwe meterkast of een elektrische besturing: u kunt bij ons terecht. Wij hanteren daarbij NEN 1010 en NEN 3140.",
        ],
      },
      {
        title: "Onderdelen",
        items: ["Elektra in woning of bedrijfspand", "Groepenkast en meterkast", "Verlichting", "Intercom", "Brandmeldinstallatie", "Domotica", "Datacommunicatie"],
        links: [
          { href: "/diensten/domotica", label: "Domotica" },
          { href: "/diensten/onderhoud-en-inspecties", label: "Keuring NEN 3140 en thermografie" },
        ],
      },
    ],
  },
  {
    slug: "domotica",
    title: "Domotica",
    description: "Domotica voor comfort, veiligheid en energiebesparing in huis of bedrijf.",
    lead: "Verlichting, verwarming, zonwering en deurcommunicatie bedient u met een schakelaar, telefoon, tablet of spraakopdracht.",
    blocks: [
      {
        title: "Comfort",
        paragraphs: [
          "Een slim huis of bedrijf regelt verlichting, verwarming, airco, zonwering, multimedia en deurcommunicatie. Via een schakelaar aan de muur, of met telefoon, tablet, computer of spraakopdracht.",
          "Dagelijkse handelingen verdwijnen naar de achtergrond. Dat is woon- en werkcomfort, zonder een ingewikkeld systeem op de voorgrond.",
        ],
      },
      {
        title: "Veiligheid",
        paragraphs: [
          "Thuis of op het werk, overdag en midden in de nacht, of als u later bent dan gepland. Deurcommunicatie, aanwezigheidssimulatie, raambewaking, CO-, rook- en bewegingsmelders, en warmte- en waterdetectoren houden een oogje in het zeil.",
        ],
      },
      {
        title: "Energiebesparing",
        paragraphs: [
          "Zonwering, verwarming, airco en elektrische apparaten kunnen automatisch schakelen. Zo wordt er niet verwarmd of verlicht in ruimtes waar niemand is.",
        ],
        links: [{ href: "/diensten/elektra", label: "Elektrische installaties" }],
      },
    ],
  },
  {
    slug: "airco",
    title: "Airco",
    description: "Airco van LG Electronics en Mitsubishi Electric: single split, duo split, VRF en airsock.",
    lead: "Wij leveren en installeren airconditioning van LG Electronics en Mitsubishi Electric. Van één ruimte tot een complete bedrijfsomgeving.",
    blocks: [
      {
        title: "Systemen",
        paragraphs: [
          "Wij adviseren welk systeem past bij woning, kantoor of bedrijfsruimte en verzorgen de installatie van A tot Z.",
        ],
        items: [
          "Single split: koelen en verwarmen van één ruimte. Geschikt voor woning, kantoor of praktijk.",
          "Duo split: twee ruimtes op één buitenunit.",
          "VRF voor grotere projecten en zakelijk gebruik: flexibiliteit per ruimte.",
          "Airsock: textiele luchtverdeling voor een gelijkmatig klimaat, onder meer in kantoren, showrooms, sportaccommodaties en industrie.",
          "Binnenunits in wit, of in zwart voor een strakkere afwerking.",
        ],
      },
    ],
  },
  {
    slug: "onderhoud-en-inspecties",
    title: "Onderhoud en inspecties",
    description: "Onderhoudscontracten voor ketel en warmtepomp, thermografie, noodverlichting, brandmeld, gas en NEN 3140.",
    lead: "Onderhoud van de ketel, of een contract op maat. Samen bepalen we welk periodiek onderhoud verstandig is.",
    blocks: [
      {
        title: "Contract of maatwerk",
        paragraphs: [
          "Wij bieden onderhoudscontracten aan. Denk aan de ketel, en aan contracten die we samen met u op maat maken. Afhankelijk van uw wensen bepalen we welk periodiek onderhoud verstandig is.",
        ],
      },
      {
        title: "Waar wij onderhoud en inspectie op doen",
        items: [
          "Onderhoud van de ketel en de warmtepomp",
          "Meterkasten: met thermografie kijken we of ze nog naar behoren werken en niet brandgevaarlijk zijn",
          "Noodverlichting",
          "Inspectie van de brandmeldinstallatie",
          "Inspectie van de gasinstallatie",
          "Keuring volgens NEN 3140",
        ],
        links: [
          { href: "/offerte", label: "Onderhoudscontract aanvragen" },
          { href: "/storing", label: "Bij een storing: eerst de controles" },
        ],
      },
    ],
  },
];

export function getDienst(slug: string) {
  return diensten.find((dienst) => dienst.slug === slug);
}
