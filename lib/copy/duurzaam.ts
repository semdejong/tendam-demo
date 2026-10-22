import type { Block } from "@/components/services/ServiceView";

export const duurzaamLead =
  "Ten Dam plaatst zonnepanelen, installeert warmtepompen en werkt aan warmteterugwinning. Van offerte tot plaatsing, voor een bestaande woning of een nieuw duurzaam pand.";

export const duurzaamBlocks: Block[] = [
  {
    title: "Waarom een duurzame installatie",
    paragraphs: [
      "Ten Dam is volop bezig met duurzaam bouwen en verbouwen. Wij hebben de mensen en de producten om u van dienst te zijn: zonnepanelen, warmtepompen en warmteterugwinning.",
      "Een duurzame installatie is zuiniger in gebruik en vriendelijker voor het milieu, door minder uitstoot van CO2 en andere broeikasgassen. Of u een bestaande woning of bedrijfspand verbetert, of een nieuwe duurzame woning bouwt: het traject loopt van offerte tot plaatsing.",
    ],
  },
  {
    title: "Het pakket",
    items: [
      "Zonnepanelen — schuin dak, plat dak, indak en veldopstelling",
      "Warmtepompen",
      "Vloerverwarming en warmteterugwinning",
      "Laadpalen, dealer van ICU",
      "Ledverlichting",
      "Zonneboiler en pelletkachels",
      "Waterontharders en een slimme boiler op zonnestroom",
      "Victron accuopslag",
    ],
    links: [
      { href: "/diensten/duurzaam/zonnepanelen", label: "Zonnepanelen" },
      { href: "/diensten/duurzaam/laadpalen", label: "Laadpalen" },
      { href: "/diensten/duurzaam/accuopslag", label: "Victron accuopslag" },
      { href: "/klantenservice/subsidies", label: "Subsidies bij RVO" },
    ],
  },
];

type Kind = {
  title: string;
  description: string;
  lead: string;
  projects?: string;
  image?: { src: string; alt: string };
  blocks: Block[];
};

export const duurzaamKinderen: Record<string, Kind> = {
  zonnepanelen: {
    title: "Zonnepanelen",
    description: "Zonnepanelen op schuin dak, plat dak, indak of in een veldopstelling. Van offerte tot plaatsing door Ten Dam.",
    lead: "Zonnepanelen zijn een duurzame investering voor woning en bedrijf. Het Nederlandse klimaat leent zich daarvoor. Wij begeleiden het traject van offerte tot plaatsing.",
    projects: "zonnepanelen",
    image: {
      src: "/fotos/bedrijf/zonnepanelen-luchtfoto.jpg",
      alt: "Luchtfoto van een boerderij of schuur met zonnepanelen van Ten Dam",
    },
    blocks: [
      {
        title: "Bijna elk dak",
        paragraphs: [
          "Over het algemeen werken panelen het best op een schuin dak. Met frames werken ze ook op een plat dak. Is het dak niet geschikt, bijvoorbeeld bij riet, dan zijn een zonneschans of een veldopstelling mogelijk.",
          "Doorgaans duurt het ongeveer vier tot acht jaar voordat de investering is terugverdiend. Met tien zonnepanelen kan een huishouden van twee personen al tot 60 procent besparen op het verbruik. Uw dak wijkt daar zeer waarschijnlijk van af. Laat u daarom voorlichten.",
        ],
        items: [
          "Schuin dak: golfplaat, dakpannen of bitumen.",
          "Plat dak: panelen in frames op de juiste hellingshoek.",
          "Indak: de panelen komen in de plaats van de dakpannen.",
          "Veldopstelling: op de grond, als het dak te klein is.",
          "Ook op utiliteit en in de agrarische sector.",
        ],
      },
      {
        title: "Van paneel naar meterkast",
        paragraphs: [
          "Panelen liggen doorgaans rond 350 tot 450 wattpiek. Als vuistregel rekent men in Nederland 85 procent van dat vermogen. Dat is een grove inschatting; uw situatie wijkt daar zeer waarschijnlijk van af.",
          "De omvormer zet gelijkstroom om naar 230 volt. Bij twee oriëntaties of schaduw kunnen de panelen in velden worden verdeeld. Tot ongeveer 4000 Wp kan dat op een 16 ampère-groep. Terugleveren vraagt een geschikte meter; die regelt uw netbeheerder.",
          "Wij leveren de omvormer SolarEdge StorEdge. Daarbij gaat zonnestroom rechtstreeks de batterij in, zonder extra omzetting van wisselstroom naar gelijkstroom en terug.",
        ],
        items: [
          "Kabel door het dakbeschot naar de omvormer",
          "Via een loze leiding, een koof, buitenom of achter de regenpijp naar de meterkast",
          "Of een onderverdeelkast op de groep van de wasmachine",
          "Wifi bij de omvormer, zodat u de opbrengst op telefoon of computer ziet",
        ],
      },
      {
        title: "Storing en aanmelden",
        paragraphs: [
          "Heeft u een storing aan de zonnepanelen, neem dan contact op. Meld de opwekinstallatie aan bij de netbeheerder. Dan klopt de vergoeding voor teruglevering, en valt de omvormer niet onnodig uit.",
        ],
        links: [
          { href: "/storing", label: "Storing melden" },
          { href: "/klantenservice/subsidies", label: "Subsidies en financiering" },
          { href: "/diensten/duurzaam/accuopslag", label: "Accuopslag" },
        ],
      },
    ],
  },
  laadpalen: {
    title: "Laadpalen",
    description: "Laadpaal voor thuis of op het werk. Ten Dam is dealer van ICU en installeert ook New Motion en Wallbox.",
    lead: "Elektrisch rijden, met de auto of de fiets, vraagt een laadpunt dat bij de situatie past. Wij adviseren, kijken naar de meterkast en installeren het punt privé of zakelijk.",
    projects: "verduurzaming",
    blocks: [
      {
        title: "Welk punt past",
        paragraphs: [
          "Alleen thuis, of ook op de zaak? De hele nacht, of sneller? Verrekenen op het bedrijf, of privégebruik? Die keuzes bepalen de laadpaal. Een laadstation is maatwerk: tijdgeschakeld, met sleutel of met paslezer.",
          "In de basis werken wij met drie merken. Van ICU zijn wij dealer.",
        ],
        items: ["ICU Eve Mini", "ICU Eve", "ICU Twin", "New Motion", "Wallbox"],
      },
      {
        title: "Zo wordt de paal geplaatst",
        paragraphs: [
          "Een laadpunt krijgt een eigen groep in de meterkast. Wij kijken of die ruimte er is, of dat de kast uitgebreid moet worden.",
          "Daarna komt de kabel van de meterkast naar de paal. Soms hoort daar graafwerk bij, of het lichten van tegels op de oprit. De paal wordt gemonteerd, aangesloten en in bedrijf gesteld.",
          "Wij adviseren vrijblijvend welke laadpaal het best bij uw situatie past. Subsidies voor een laadpaal verschillen; de actuele regelingen staan bij RVO.",
        ],
        links: [{ href: "/klantenservice/subsidies", label: "Subsidies" }],
      },
    ],
  },
  accuopslag: {
    title: "Victron accuopslag",
    description: "Accuopslag van Victron Energy, gekoppeld aan uw zonnepanelen, geïnstalleerd door Ten Dam.",
    lead: "Victron Energy is een Nederlands merk. De accu’s slaan overtollige zonnestroom op voor de avond, voor piekuren of voor een stroomuitval.",
    projects: "verduurzaming",
    blocks: [
      {
        title: "Wat de accu doet",
        paragraphs: [
          "Overtollige stroom van de panelen blijft beschikbaar op het moment dat u die nodig heeft. U leunt minder op het net. Wij installeren de accu’s en koppelen ze aan een bestaand of nieuw zonne-energiesysteem.",
        ],
        items: [
          "Ontwikkeld en geproduceerd in Nederland",
          "Opslag ook bij intensief gebruik",
          "Inzicht via monitoring en apps",
          "Voor woningen, bedrijven en grotere of off-grid systemen",
        ],
        links: [
          { href: "/offerte", label: "Vrijblijvend een offerte aanvragen" },
          { href: "/diensten/duurzaam/zonnepanelen", label: "Eerst de zonnepanelen" },
        ],
      },
    ],
  },
};
