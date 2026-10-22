export type AboutPage = { title: string; description: string; paragraphs: string[]; items?: string[] };

export const aboutPages: Record<string, AboutPage> = {
  geschiedenis: {
    title: "Geschiedenis",
    description: "Ten Dam sinds 1983: van Bentelo naar het industrieterrein van Delden, en de overdracht in 2017.",
    paragraphs: [
      "In 1983 start Herman ten Dam een bedrijf voor loodgieterswerk, cv-installaties en dakbedekking. Het begint in Bentelo, in een werkplaats in een voormalige kuikenbroederij, met één medewerker en een bescheiden klantenkring van vooral particulieren uit de regio.",
      "Door mond-tot-mondreclame groeit het bedrijf. Er komt een tweede vestiging in het centrum van Delden, met kantoor en een winkel annex showroom voor sanitair en onderdelen. De werkplaats in Bentelo blijft.",
      "In 1990 wordt een nabijgelegen elektrotechnisch bedrijf overgenomen. Elektra komt bij het pakket.",
      "Sinds 1998 werkt Ten Dam vanuit één pand op het industrieterrein van Delden, 1100 m², met kantoren, winkel en werkplaats. De vestigingen in Bentelo en het centrum van Delden behoren tot het verleden.",
      "Begin 2017 draagt Herman ten Dam het bedrijf over aan Frank Volkerink. De zes jaar daarvoor was Frank bedrijfsleider. Sinds 1 januari 2017 is hij directeur.",
    ],
  },
  werkwijze: {
    title: "Werkwijze",
    description: "Van kennismaking tot service. Een gespecificeerde offerte met schetsplan, zonder onrealistisch scherpe prijs en achteraf meerwerk.",
    paragraphs: [],
  },
  erkenningen: {
    title: "Erkenningen",
    description: "VCA, InstallQ, KvINL, Techniek Nederland, erkend leerbedrijf, ThuisComfort en duurzameaanbieder.nl.",
    paragraphs: ["Lidmaatschappen en certificeringen van Ten Dam."],
  },
  "erkend-leerbedrijf": {
    title: "Erkend leerbedrijf",
    description: "Stage bij Ten Dam, erkend leerbedrijf, in overleg met ROC van Twente.",
    paragraphs: [
      "Wij zien de jeugd als onze toekomst en bieden stageplaatsen. Ten Dam is een erkend leerbedrijf en bereidt stagiairs voor op een baan in de installatietechniek.",
      "De band met ROC van Twente is goed. Studenten komen eerst voor een snuffelstage en daarna voor een langere periode.",
      "Volgt u een technische opleiding en zoekt u een stageplaats? Mail uw motivatie en cv naar info@tendamdelden.nl.",
    ],
  },
  "ons-team": {
    title: "Ons team",
    description: "Loodgieters en elektriciens die multi-inzetbaar zijn, ondersteund door een klein administratief team.",
    paragraphs: [
      "Het team bestaat uit goed opgeleide, vakbekwame en ervaren loodgieters en elektriciens die multi-inzetbaar zijn. Daardoor blijft het bedrijf flexibel. Intern is er ondersteuning door een klein team van administratieve en secretariële medewerkers.",
    ],
  },
  "in-de-media": {
    title: "In de media",
    description: "Ten Dam over Hotel Huis Vermeer en het werk als totaalinstallateur vanuit Delden.",
    paragraphs: [
      "Over Hotel Huis Vermeer in Deventer staat op de mediapagina van Ten Dam: “Werkelijk alles wat er aan te leggen was, hebben wij aangelegd.”",
      "Het bedrijf is in 1983 opgericht door Herman ten Dam. Het pakket omvat verwarming, sanitair, gas, water en riool, dakwerk, elektro, netwerken, luchtbehandeling, brandbeveiliging, zonnepanelen en laadpalen. Daarnaast is er de ijzerwarenwinkel.",
      "De winkel, gekoppeld aan het bedrijfspand, ligt makkelijk vindbaar aan de rand van Delden en heeft ruime parkeergelegenheid.",
      "Het werkgebied ligt in een straal van circa 25 kilometer rond Delden: Hengelo, Enschede, Goor, met uitschieters.",
      "Ten Dam is een erkend leerbedrijf. Wat het bedrijf niet zelf doet, gaat via betrouwbare partners. Daar zijn ze open over, ook in offertes.",
    ],
  },
  mvo: {
    title: "MVO",
    description: "Maatschappelijk verantwoord ondernemen bij Ten Dam: duurzame installaties en inleveren van e-waste.",
    paragraphs: [
      "Maatschappelijk verantwoord ondernemen is een pijler van Ten Dam. Het bedrijf werkt aan duurzame oplossingen voor klanten en vernieuwt ook het eigen bedrijf, onder meer met zonnepanelen, isolatie, trainingen en cursussen.",
      "Oude elektrische apparaten of kapotte spaarlampen kunt u inleveren bij Ten Dam. Via recycling worden daar nieuwe grondstoffen van gemaakt.",
    ],
  },
  sponsoring: {
    title: "Sponsoring",
    description: "Ten Dam sponsort verenigingen en projecten in Delden, Bentelo en omstreken.",
    paragraphs: ["Wij sponsoren al jaren verenigingen, teams en culturele en sociale projecten in Delden, Bentelo en omstreken."],
  },
  leveringsvoorwaarden: {
    title: "Leveringsvoorwaarden",
    description: "Leveringsvoorwaarden van Ten Dam vraagt u op via info@tendamdelden.nl.",
    paragraphs: ["De leveringsvoorwaarden sturen wij u op verzoek toe. Mail info@tendamdelden.nl."],
  },
};
