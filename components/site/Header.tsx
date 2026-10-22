import Link from "next/link";
import Logo from "@/components/logo/Logo";
import MobileNav from "@/components/site/MobileNav";
import { MAIN_NAV, PHONE } from "@/lib/site";

export default function Header() {
  return (
    <header data-section="header" className="border-b border-navy/10 bg-white/95 backdrop-blur">
      <div className="relative mx-auto flex max-w-6xl items-center justify-between gap-3 px-4 py-2 sm:px-5">
        <Link href="/" className="shrink-0" aria-label="Ten Dam, naar de homepage">
          <Logo />
        </Link>
        <nav className="hidden items-center gap-4 xl:flex" aria-label="Hoofdmenu">
          {MAIN_NAV.map((item) => (
            <Link key={item.href} href={item.href} className="text-sm font-semibold text-navy hover:text-blue">
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <a href={PHONE.tel} className="nums hidden min-h-11 items-center text-sm font-semibold text-navy xl:inline-flex">
            {PHONE.display}
          </a>
          <Link
            href="/offerte"
            data-cta="offerte"
            className="inline-flex min-h-11 items-center bg-navy px-3 text-sm font-semibold text-white sm:px-4"
          >
            <span className="sm:hidden">Offerte</span>
            <span className="hidden sm:inline">Offerte aanvragen</span>
          </Link>
          <MobileNav />
        </div>
      </div>
    </header>
  );
}
