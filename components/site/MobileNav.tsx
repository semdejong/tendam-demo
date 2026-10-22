"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { SITEMAP } from "@/lib/site";

export default function MobileNav() {
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const closeRef = useRef<HTMLButtonElement>(null);
  const menuRef = useRef<HTMLButtonElement>(null);

  useEffect(() => setMounted(true), []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    if (open) closeRef.current?.focus();
    function onKey(event: KeyboardEvent) {
      if (event.key === "Escape") setOpen(false);
    }
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  const menu = (
    <nav
      id="hoofdmenu"
      hidden={!open}
      role="dialog"
      aria-modal="true"
      aria-label="Menu"
      className="fixed inset-0 z-[70] overflow-y-auto bg-white px-5 pb-16 pt-4"
    >
      <div className="mb-2 flex items-center justify-between pr-36">
        <p className="text-sm font-semibold uppercase tracking-[0.16em] text-blue">Menu</p>
        <button
          ref={closeRef}
          type="button"
          className="inline-flex min-h-11 items-center border border-navy/15 px-3 text-sm font-semibold"
          onClick={() => {
            setOpen(false);
            menuRef.current?.focus();
          }}
        >
          Sluiten
        </button>
      </div>
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
  );

  return (
    <div className="xl:hidden">
      <button
        ref={menuRef}
        type="button"
        className="inline-flex min-h-11 min-w-11 items-center justify-center border border-navy/15 px-3 text-sm font-semibold text-navy"
        aria-expanded={open}
        aria-controls="hoofdmenu"
        onClick={() => setOpen(true)}
      >
        Menu
      </button>
      {mounted ? createPortal(menu, document.body) : null}
    </div>
  );
}
