import Link from "next/link";
import { MAIL_INFO, MAIL_SERVICE, PHONE, SHOP_HOURS, SHOP_PHONE, WHATSAPP } from "@/lib/site";

export default function ContactBand() {
  return (
    <section data-section="contact" className="bg-navy text-white">
      <div className="mx-auto grid max-w-6xl gap-8 px-5 py-16 md:grid-cols-2">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-water">Contact</p>
          <h2 className="mt-2 text-3xl font-semibold">Delden, en een straal van circa 25 kilometer eromheen.</h2>
          <p className="mt-4 text-white/85">Hengelo, Enschede, Goor, met uitschieters. Op het industrieterrein van Delden, met ruime parkeergelegenheid.</p>
          <ul className="mt-4 space-y-2">
            <li>
              <a className="nums font-semibold" href={PHONE.tel}>
                {PHONE.display}
              </a>{" "}
              – ook de 24/7 storingsdienst
            </li>
            <li>
              Winkel:{" "}
              <a className="nums font-semibold" href={SHOP_PHONE.tel}>
                {SHOP_PHONE.display}
              </a>
            </li>
            <li>
              <a className="font-semibold underline-offset-4 hover:underline" href={WHATSAPP.href}>
                WhatsApp {WHATSAPP.display}
              </a>{" "}
              tijdens kantooruren
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
        <div>
          <h3 className="text-xl font-semibold">Winkelopeningstijden</h3>
          <ul className="mt-3 space-y-1">
            {SHOP_HOURS.map((row) => (
              <li key={row.dag}>
                {row.dag}: <span className="nums">{row.tijd}</span>
              </li>
            ))}
          </ul>
          <p className="mt-4 text-white/80">Kantoor: tijdens kantooruren.</p>
          <Link href="/contact" className="mt-6 inline-flex min-h-11 items-center bg-white px-5 font-semibold text-navy">
            Contact opnemen
          </Link>
        </div>
      </div>
    </section>
  );
}
