/** Subtiele badge: markeert de site als concept van Sleads. Niet verwijderen in demo's. */
export default function SleadsBadge() {
  return (
    <a
      href="https://sleads.nl"
      target="_blank"
      rel="noopener"
      aria-label="Concept door Sleads – bekijk sleads.nl"
      className="fixed right-2 top-1.5 z-[80] inline-flex items-center gap-1.5 rounded-full border border-black/10 bg-white px-2.5 py-1 text-[11px] font-medium text-neutral-700 shadow-sm md:right-3 md:top-2 md:px-3 md:py-1.5 md:text-xs print:hidden"
    >
      <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" aria-hidden />
      Concept door <span className="font-semibold">Sleads</span>
    </a>
  );
}
