import type { ReactNode } from "react";

export default function PageHero({
  eyebrow,
  title,
  text,
  children,
  section = "pagina-hero",
}: {
  eyebrow?: string;
  title: string;
  text?: string;
  children?: ReactNode;
  section?: string;
}) {
  return (
    <section data-section={section} className="sheet-bg border-b border-navy/10">
      <div className="mx-auto grid max-w-6xl gap-8 px-5 py-12 md:grid-cols-12 md:py-16">
        <div className="md:col-span-8">
          {eyebrow ? <p className="text-xs font-semibold uppercase tracking-[0.16em] text-blue">{eyebrow}</p> : null}
          <h1 className="mt-2 max-w-3xl text-4xl font-semibold text-navy md:text-5xl">{title}</h1>
          {text ? <p className="mt-4 max-w-2xl text-lg text-navy/85">{text}</p> : null}
          {children ? <div className="mt-6 flex flex-wrap gap-3">{children}</div> : null}
        </div>
        <div className="hidden items-end md:col-span-4 md:flex" aria-hidden>
          <svg viewBox="0 0 160 220" className="h-44 w-full text-blue">
            <path d="M20 20 H90" fill="none" stroke="currentColor" strokeWidth="1.5" />
            <path d="M20 20 V80" fill="none" stroke="#8BB2DC" strokeWidth="1.5" />
            <path d="M20 110c18 12 30 12 48 0s30-12 48 0 30 12 48 0" fill="none" stroke="#8BB2DC" strokeWidth="1.5" />
            <path d="M110 40 90 70h16l-14 28 28-32h-16l16-26z" fill="#EA282E" />
            <path d="M36 150c2 10 12 16 12 28a12 12 0 1 1-24 0c0-8 6-12 8-20 1 6 3 8 4 8 0-6 0-12 0-16z" fill="#EA282E" />
          </svg>
        </div>
      </div>
    </section>
  );
}
