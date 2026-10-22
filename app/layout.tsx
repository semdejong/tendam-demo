import type { Metadata, Viewport } from "next";
import { Archivo, Source_Sans_3 } from "next/font/google";
import type { CSSProperties } from "react";
import "./globals.css";
import { content } from "@/content";
import SleadsBadge from "@/components/SleadsBadge";
import TopBar from "@/components/site/TopBar";
import Header from "@/components/site/Header";
import Footer from "@/components/site/Footer";
import MobileBar from "@/components/site/MobileBar";
import { MAIL_INFO, PHONE } from "@/lib/site";

const display = Archivo({ subsets: ["latin"], weight: ["500", "600", "700"], variable: "--font-archivo" });
const body = Source_Sans_3({ subsets: ["latin"], weight: ["400", "600", "700"], variable: "--font-source" });

export const metadata: Metadata = {
  title: {
    default: content.seo.title,
    template: "%s | Ten Dam",
  },
  description: content.seo.description,
  robots: {
    index: false,
    follow: false,
    nocache: true,
    googleBot: { index: false, follow: false, noimageindex: true },
  },
};

export const viewport: Viewport = { themeColor: content.colors.primary };

const TRACKER_SRC = "https://sleads-demo-analytics.vercel.app/t.js";
const TRACKER_ENDPOINT = "https://basic-tiger-117.convex.site/track";

const c = content.colors;
const themeVars = {
  "--brand": c.primary,
  "--brand-fg": c.primaryForeground,
  "--accent": c.accent,
  "--background": c.background,
  "--foreground": c.foreground,
  "--muted": c.muted,
} as CSSProperties;

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "HomeAndConstructionBusiness",
  name: content.company.name,
  description: content.company.description,
  telephone: "+31743777077",
  email: MAIL_INFO,
  url: "https://www.tendamdelden.nl/",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Delden",
    addressRegion: "Overijssel",
    addressCountry: "NL",
  },
  areaServed: "Delden, Hengelo, Enschede, Goor en omgeving",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang={content.seo.lang} style={themeVars} className={`${display.variable} ${body.variable} h-full scroll-smooth antialiased`}>
      <head>
        <script async src={TRACKER_SRC} data-demo={content.slug} data-endpoint={TRACKER_ENDPOINT} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      </head>
      <body className="flex min-h-full flex-col pb-14 md:pb-0">
        <a href="#inhoud" className="sr-only focus:not-sr-only focus:absolute focus:left-3 focus:top-3 focus:z-50 focus:bg-white focus:px-3 focus:py-2">
          Ga naar de inhoud
        </a>
        <div className="sticky top-0 z-30">
          <TopBar />
          <Header />
        </div>
        <main id="inhoud" className="flex-1">
          {children}
        </main>
        <Footer />
        <MobileBar />
        <SleadsBadge />
        <span className="sr-only">Storingsnummer {PHONE.display}</span>
      </body>
    </html>
  );
}
