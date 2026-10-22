import Link from "next/link";
import Logo from "@/components/logo/Logo";
import { MAIL_INFO, MAIL_SERVICE, PHONE, SHOP_PHONE, SITEMAP, SOCIALS, WHATSAPP } from "@/lib/site";

export default function Footer() {
  return (
    <footer data-section="footer" className="bg-navy text-white">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-14 md:grid-cols-12">
        <div className="md:col-span-4">
          <Logo className="h-16 w-auto bg-white p-1" />
          <p className="mt-4 max-w-sm text-white/85">
            Totaalinstallateur en ijzerwarenwinkel in Delden. Vuur, stroom en water, sinds 1983.
          </p>
          <ul className="mt-4 space-y-1 text-sm">
            <li>
              <a className="nums underline-offset-4 hover:underline" href={PHONE.tel}>
                {PHONE.display} (24/7)
              </a>
            </li>
            <li>
              Winkel:{" "}
              <a className="nums underline-offset-4 hover:underline" href={SHOP_PHONE.tel}>
                {SHOP_PHONE.display}
              </a>
            </li>
            <li>
              <a className="underline-offset-4 hover:underline" href={WHATSAPP.href}>
                WhatsApp {WHATSAPP.display}
              </a>{" "}
              (tijdens kantooruren)
            </li>
            <li>
              <a className="underline-offset-4 hover:underline" href={`mailto:${MAIL_INFO}`}>
                {MAIL_INFO}
              </a>
            </li>
            <li>
              <a className="underline-offset-4 hover:underline" href={`mailto:${MAIL_SERVICE}`}>
                {MAIL_SERVICE}
              </a>
            </li>
          </ul>
        </div>
        {SITEMAP.map((group) => (
          <div key={group.title} className="md:col-span-2">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-water">{group.title}</p>
            <ul className="mt-3 space-y-2 text-sm">
              {group.links.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="hover:underline"
                    data-cta={link.href === "/offerte" || link.href === "/storing" ? "offerte" : undefined}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="border-t border-white/15">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-3 px-5 py-4 text-sm text-white/80">
          <p>Ten Dam, Delden. Sinds 1983.</p>
          <ul className="flex gap-4">
            {SOCIALS.map((item) => (
              <li key={item.href}>
                <a href={item.href} className="hover:underline" rel="noopener noreferrer" target="_blank">
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}
