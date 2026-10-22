import type { Metadata } from "next";
import PageHero from "@/components/ui/PageHero";
import MailForm from "@/components/forms/MailForm";
import { MAIL_INFO, MAIL_SERVICE, PHONE, SHOP_HOURS, SHOP_PHONE, WHATSAPP } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description: "Contact met Ten Dam in Delden. Telefoon 074-3777077, winkel 074-3777078, WhatsApp tijdens kantooruren.",
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        section="contact-hero"
        eyebrow="Contact"
        title="Wij komen graag in contact met u."
        text="Bel, app tijdens kantooruren of mail. Wij denken graag met u mee. Op het industrieterrein van Delden, makkelijk vindbaar aan de rand van Delden, met ruime parkeergelegenheid."
      />
      <section data-section="contact-gegevens" className="mx-auto grid max-w-6xl gap-10 px-5 py-12 md:grid-cols-2">
        <div className="space-y-3">
          <p>
            Storingsdienst 24/7:{" "}
            <a className="nums font-semibold text-urgent" href={PHONE.tel}>
              {PHONE.display}
            </a>
          </p>
          <p>
            Winkel:{" "}
            <a className="nums font-semibold text-blue" href={SHOP_PHONE.tel}>
              {SHOP_PHONE.display}
            </a>
          </p>
          <p>
            <a className="font-semibold text-blue" href={WHATSAPP.href}>
              WhatsApp {WHATSAPP.display}
            </a>{" "}
            tijdens kantooruren
          </p>
          <p>
            <a className="text-blue" href={`mailto:${MAIL_INFO}`}>
              {MAIL_INFO}
            </a>
          </p>
          <p>
            <a className="text-blue" href={`mailto:${MAIL_SERVICE}`}>
              {MAIL_SERVICE}
            </a>
          </p>
          <h2 className="pt-4 text-2xl font-semibold">Winkelopeningstijden</h2>
          <ul>
            {SHOP_HOURS.map((row) => (
              <li key={row.dag}>
                {row.dag}: <span className="nums">{row.tijd}</span>
              </li>
            ))}
          </ul>
          <p>Kantoor: tijdens kantooruren.</p>
          <p>Werkgebied: een straal van circa 25 kilometer rond Delden, waaronder Hengelo, Enschede en Goor, met uitschieters.</p>
        </div>
        <MailForm
          to={MAIL_INFO}
          subject="Contact via de website"
          submitLabel="Bericht mailen"
          fields={[
            { name: "naam", label: "Naam", required: true },
            { name: "woonplaats", label: "Woonplaats", required: true },
            { name: "telefoon", label: "Telefoon" },
            { name: "email", label: "E-mail", required: true },
            { name: "bericht", label: "Bericht", textarea: true, required: true },
          ]}
        />
      </section>
    </>
  );
}
