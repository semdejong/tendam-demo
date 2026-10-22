import type { ReactNode } from "react";

export default function Sheet({
  n,
  title,
  children,
  className = "",
}: {
  n?: string;
  title?: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <article className={`relative border border-navy/15 bg-white p-5 sm:p-6 ${className}`}>
      <span className="absolute left-0 top-0 h-3 w-3 border-l-2 border-t-2 border-blue" aria-hidden />
      <span className="absolute right-0 top-0 h-3 w-3 border-r-2 border-t-2 border-blue" aria-hidden />
      <span className="absolute bottom-0 left-0 h-3 w-3 border-b-2 border-l-2 border-water" aria-hidden />
      <span className="absolute bottom-0 right-0 h-3 w-3 border-b-2 border-r-2 border-water" aria-hidden />
      {n ? <p className="nums text-xs font-semibold tracking-[0.18em] text-blue">{n}</p> : null}
      {title ? <h2 className="mt-1 text-2xl font-semibold">{title}</h2> : null}
      <div className={title || n ? "mt-3" : ""}>{children}</div>
    </article>
  );
}
