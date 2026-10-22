import type { ReactNode } from "react";
import { Bolt, Flame, Waves } from "@/components/ui/Icons";

const marks = [
  { icon: Flame, label: "Vuur", text: "Verwarming" },
  { icon: Bolt, label: "Stroom", text: "Elektra" },
  { icon: Waves, label: "Water", text: "Sanitair" },
];

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
      <div className="mx-auto grid max-w-6xl items-end gap-8 px-5 py-10 md:grid-cols-12 md:py-14">
        <div className="md:col-span-8">
          {eyebrow ? <p className="text-xs font-semibold uppercase tracking-[0.16em] text-blue">{eyebrow}</p> : null}
          <h1 className="mt-2 max-w-3xl text-balance text-4xl font-semibold text-navy md:text-5xl">{title}</h1>
          {text ? <p className="mt-4 max-w-2xl text-pretty hyphens-none text-lg text-navy/85">{text}</p> : null}
          {children ? <div className="mt-6 flex flex-wrap gap-3">{children}</div> : null}
        </div>
        <ul className="hidden gap-2 md:col-span-4 md:grid">
          {marks.map((mark) => (
            <li key={mark.label} className="flex items-center gap-3 border border-navy/10 bg-white px-3 py-2">
              <mark.icon className="h-7 w-7 shrink-0" />
              <span>
                <span className="block text-sm font-semibold">{mark.label}</span>
                <span className="text-sm text-navy/70">{mark.text}</span>
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
