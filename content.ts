/**
 * Bedrijfsgegevens voor de demo. De slug hoort bij de Sleads-tracker.
 */
export const content = {
  slug: "tendam-demo",

  company: {
    name: "Ten Dam Installatietechniek & IJzerwaren",
    legalName: "Installatiebedrijf Ten Dam B.V.",
    tagline: "Installeren is een vak. Wij verstaan ons vak.",
    description:
      "Totaalinstallateur voor elektra, verwarming, sanitair, dakwerk en duurzaam bouwen, plus een ijzerwarenwinkel. Sinds 1983 vanuit Delden.",
    logo: "",
    city: "Delden",
  },

  colors: {
    primary: "#4268B2",
    primaryForeground: "#ffffff",
    accent: "#D21F26",
    background: "#ffffff",
    foreground: "#1E2F5C",
    muted: "#F3F5F9",
  },

  seo: {
    title: "Ten Dam Installatietechniek & IJzerwaren | Delden",
    description:
      "Totaalinstallateur in Delden voor elektra, cv, sanitair, dak en duurzaam bouwen, en een ijzerwarenwinkel. Storingsdienst 24/7: 074-3777077. Sinds 1983.",
    lang: "nl",
  },
};

export type Content = typeof content;
