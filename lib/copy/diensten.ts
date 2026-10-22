import type { Block } from "@/components/services/ServiceView";

export type Dienst = {
  slug: string;
  title: string;
  description: string;
  lead: string;
  blocks: Block[];
};

export const diensten: Dienst[] = [
  {
    slug: "verwarming",
    title: "Verwarming",
    description: "Centrale verwarming, vloerverwarming, infrarood, naregeling en klimaatplafond door Ten Dam in Delden.",
    lead: "De warmtevoorziening stemmen wij af op de functie van de ruimte. Naast de cv-ketel en radiator zijn er meer manieren om een woning of bedrijfspand te verwarmen.",
    blocks: [
      {
        items: ["Centrale verwarming", "Vloerverwarming", "Infraroodverwarming", "Naregeling verwarming", "Klimaatplafond"],
      },
    ],
  },
  {
    slug: "sanitair-en-keuken",
    title: "Sanitair en keuken",
    description: "Badkamer en keuken van A tot Z: sloop, leidingen, sanitair, tegelwerk, elektra en afvoer.",
    lead: "Een nieuwe badkamer, een toiletgroep of renovatie van de doucheruimte. U zoekt het sanitair uit, wij nemen het traject over.",
    blocks: [
      {
        title: "Badkamer",
        paragraphs: [
          "Van sloop van het oude sanitair en het aanleggen van leidingen tot het plaatsen van sanitair en het betegelen van muren en vloeren.",
          "Een showroombezoek bij Lammering, Hogeweg of Plieger regelen wij. Die showrooms zijn niet voor iedereen toegankelijk.",
        ],
      },
      {
        title: "Keuken",
        paragraphs: [
          "Een nieuwe keuken is meer dan kastjes. Vaak moeten elektra en afvoer opnieuw worden aangelegd of verlegd, zodat alles aansluit op het energienet en het riool.",
          "Bij elektrisch koken kan een extra groep in de meterkast nodig zijn. Dat geldt ook voor een andere plek van de vaatwasser, wasmachine, Quooker of gasaansluiting.",
        ],
      },
    ],
  },
  {
    slug: "elektra",
    title: "Elektrische installaties",
    description: "Elektra voor woning, bedrijf, school en overheid. Groepenkast, verlichting, data en brandmelding, volgens NEN 1010 en NEN 3140.",
    lead: "Van een dimmer tot een nieuwe meterkast of een elektrische besturing. Voor particulieren, bedrijven, scholen en overheidsinstellingen.",
    blocks: [
      {
        items: ["Elektra in woning of bedrijfspand", "Groepenkast en meterkast", "Verlichting", "Intercom", "Brandmeldinstallatie", "Domotica", "Datacommunicatie"],
      },
      {
        paragraphs: ["Hierbij hanteren wij de geldende veiligheidsnormen NEN 1010 en NEN 3140."],
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
        paragraphs: ["Van verlichting, verwarming en airco tot zonwering, multimedia en deurcommunicatie. Eén druk op de knop, in plaats van een reeks handelingen."],
      },
      {
        title: "Veiligheid",
        paragraphs: ["Deurcommunicatie, aanwezigheidssimulatie, raambewaking, rook- en CO-melders, bewegingsmelders en warmte- en waterdetectoren."],
      },
      {
        title: "Energiebesparing",
        paragraphs: ["Zonwering, verwarming, airco en apparaten kunnen automatisch schakelen. Dat is zuiniger en overzichtelijker."],
      },
    ],
  },
  {
    slug: "airco",
    title: "Airco",
    description: "Airco van LG Electronics en Mitsubishi Electric: single split, duo split, VRF en airsock.",
    lead: "Wij leveren en installeren airconditioning van LG Electronics en Mitsubishi Electric, van één ruimte tot een bedrijfsomgeving.",
    blocks: [
      {
        items: [
          "Single split: koelen en verwarmen van één ruimte.",
          "Duo split: twee ruimtes op één buitenunit.",
          "VRF-systemen voor grotere en zakelijke projecten.",
          "Airsock: textiele luchtverdeling voor een gelijkmatig klimaat, onder meer in kantoren, showrooms, sport en industrie.",
          "Binnenunits in wit of zwart.",
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
        items: [
          "Onderhoud van de ketel en warmtepomp",
          "Meterkasten, met thermografie op werking en brandgevaar",
          "Noodverlichting",
          "Inspectie van de brandmeldinstallatie",
          "Inspectie van de gasinstallatie",
          "Keuring volgens NEN 3140",
        ],
      },
    ],
  },
];

export function getDienst(slug: string) {
  return diensten.find((dienst) => dienst.slug === slug);
}
