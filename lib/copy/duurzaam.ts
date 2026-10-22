import type { Block } from "@/components/services/ServiceView";

export const duurzaamLead =
  "Ten Dam plaatst zonnepanelen, installeert warmtepompen en werkt aan warmteterugwinning. Van offerte tot plaatsing, voor woning en bedrijf.";

export const duurzaamBlocks: Block[] = [
  {
    paragraphs: [
      "Een duurzame installatie is zuiniger in gebruik en vriendelijker voor het milieu door minder uitstoot van CO2 en andere broeikasgassen.",
    ],
    items: [
      "Zonnepanelen",
      "Warmtepompen",
      "Vloerverwarming",
      "Warmteterugwinning",
      "Laadpalen",
      "Ledverlichting",
      "Zonneboiler",
      "Pelletkachels",
      "Waterontharders",
      "Slimme boiler op zonnestroom",
      "Victron accuopslag",
    ],
  },
];

export const duurzaamKinderen: Record<string, { title: string; description: string; lead: string; blocks: Block[] }> = {
  zonnepanelen: {
    title: "Zonnepanelen",
    description: "Zonnepanelen op schuin dak, plat dak, indak of in een veldopstelling. Van offerte tot plaatsing door Ten Dam.",
    lead: "Het Nederlandse klimaat leent zich voor zonnepanelen op woning en bedrijf. Wij begeleiden het traject van offerte tot plaatsing.",
    blocks: [
      {
        title: "Systemen",
        items: [
          "Schuin dak: golfplaat, dakpannen of bitumen.",
          "Plat dak: panelen in frames op de juiste hellingshoek.",
          "Indak: de panelen komen in plaats van de dakpannen.",
          "Veldopstelling of zonneschans als het dak niet geschikt is, bijvoorbeeld bij riet.",
          "Utiliteit en agrarisch.",
        ],
      },
      {
        title: "Praktisch",
        paragraphs: [
          "Panelen liggen doorgaans rond 350 tot 450 wattpiek. Als vuistregel rekent men in Nederland 85 procent van dat vermogen; uw dak wijkt daar vaak van af. Laat u daarom voorlichten.",
          "De kabels lopen meestal door het dakbeschot naar de omvormer, en vandaar naar de meterkast: via een loze leiding, een koof, buitenom, achter de regenpijp of een onderverdeelkast.",
          "Tot ongeveer 4000 Wp kan een omvormer op een 16 ampère-groep. Terugleveren vraagt een geschikte meter; die regelt uw netbeheerder. Voor inzicht op telefoon of computer is een bruikbaar wifisignaal nodig.",
          "Wij leveren de omvormer SolarEdge StorEdge, met DC-gekoppelde opslag, zodat zonnestroom rechtstreeks in de batterij gaat.",
        ],
      },
      {
        title: "Storing en aanmelden",
        paragraphs: [
          "Heeft u een storing aan de zonnepanelen, neem dan contact op. Meld de opwekinstallatie aan bij de netbeheerder, zodat de vergoeding klopt en de omvormer niet onnodig uitvalt.",
        ],
      },
    ],
  },
  laadpalen: {
    title: "Laadpalen",
    description: "Laadpaal voor thuis of op het werk. Ten Dam is dealer van ICU en installeert ook New Motion en Wallbox.",
    lead: "Wij adviseren welk laadpunt past, welke aanpassing de meterkast nodig heeft, en installeren het punt privé of zakelijk.",
    blocks: [
      {
        paragraphs: [
          "Thuisladen of ook op de zaak, de hele nacht of sneller, verrekenen op het bedrijf of privégebruik: die keuzes bepalen de laadpaal. Tijdgeschakeld, met sleutel of met paslezer.",
        ],
        items: ["ICU Eve Mini, Eve en Twin – Ten Dam is dealer van ICU", "New Motion", "Wallbox"],
      },
      {
        title: "Installatie",
        paragraphs: [
          "Een laadpunt krijgt een eigen groep in de meterkast. Wij kijken of die ruimte er is of dat de kast uitgebreid moet worden.",
          "Daarna leggen we de kabel naar de laadpaal. Soms hoort daar graafwerk of het lichten van tegels bij. De paal wordt gemonteerd, aangesloten en in bedrijf gesteld.",
        ],
      },
    ],
  },
  accuopslag: {
    title: "Victron accuopslag",
    description: "Accuopslag van Victron Energy, gekoppeld aan uw zonnepanelen, geïnstalleerd door Ten Dam.",
    lead: "Victron Energy is een Nederlands merk. De accu’s slaan overtollige zonnestroom op voor de avond, piekuren of een stroomuitval.",
    blocks: [
      {
        items: [
          "Ontwikkeld en geproduceerd in Nederland.",
          "Opslag bij intensief gebruik.",
          "Inzicht via monitoring en apps.",
          "Geschikt voor woningen, bedrijven en grotere of off-grid systemen.",
        ],
      },
      {
        paragraphs: ["Wij installeren de accu’s en koppelen ze aan een bestaand of nieuw zonne-energiesysteem."],
      },
    ],
  },
};
