"use client";

import Link from "next/link";
import { useState } from "react";
import { SITEMAP } from "@/lib/site";

export default function MobileNav() {
  const [open, setOpen] = useState(false);

  return (
    <div className="lg:hidden">
      <button
        type="button"
        className="inline-flex min-h-11 min-w-11 items-center justify-center border border-navy/15 px-3 text-sm font-semibold text-navy"
        aria-expanded={open}
        aria-controls="hoofdmenu"
        onClick={() => setOpen((value) => !value)}
      >
        {open ? "Sluiten" : "Menu"}
      </button>
      <nav
          id="hoofdmenu"
          hidden={!open}
          className="absolute inset-x-0 top-full z-40 max-h-[calc(100vh-8rem)] overflow-y-auto border-b border-navy/10 bg-white px-5 py-4 shadow-lg"
        >
          {SITEMAP.map((group) => (
            <div key={group.title} className="border-b border-navy/10 py-3 last:border-0">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-blue">{group.title}</p>
              <ul className="mt-2 grid gap-1">
                {group.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="inline-flex min-h-11 items-center text-base font-medium text-navy"
                      data-cta={link.href === "/offerte" || link.href === "/storing" ? "offerte" : undefined}
                      onClick={() => setOpen(false)}
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </nav>
    </div>
  );
}
