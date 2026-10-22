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
    <section data-section={section} className="border-b border-navy/10 bg-paper">
      <div className="mx-auto max-w-6xl px-5 py-12 md:py-16">
        {eyebrow ? <p className="text-xs font-semibold uppercase tracking-[0.16em] text-blue">{eyebrow}</p> : null}
        <h1 className="mt-2 max-w-3xl text-4xl font-semibold text-navy md:text-5xl">{title}</h1>
        {text ? <p className="mt-4 max-w-2xl text-lg text-navy/85">{text}</p> : null}
        {children ? <div className="mt-6 flex flex-wrap gap-3">{children}</div> : null}
      </div>
    </section>
  );
}
