"use client";

import { useState, type FormEvent } from "react";

type Field = {
  name: string;
  label: string;
  required?: boolean;
  textarea?: boolean;
  options?: string[];
};

export default function MailForm({
  to,
  subject,
  fields,
  submitLabel,
  note,
}: {
  to: string;
  subject: string;
  fields: Field[];
  submitLabel: string;
  note?: string;
}) {
  const [sent, setSent] = useState(false);

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const lines = fields.map((field) => `${field.label}: ${String(data.get(field.name) ?? "").trim()}`);
    const body = lines.join("\n");
    window.location.href = `mailto:${to}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setSent(true);
  }

  return (
    <form onSubmit={onSubmit} className="grid gap-4">
      {fields.map((field) => (
        <label key={field.name} className="grid gap-1 text-sm font-semibold text-navy">
          {field.label}
          {field.options ? (
            <select name={field.name} required={field.required} className="min-h-11 border border-navy/20 bg-white px-3 font-normal">
              <option value="">Kies</option>
              {field.options.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          ) : field.textarea ? (
            <textarea name={field.name} required={field.required} rows={5} className="border border-navy/20 px-3 py-2 font-normal" />
          ) : (
            <input name={field.name} required={field.required} className="min-h-11 border border-navy/20 px-3 font-normal" />
          )}
        </label>
      ))}
      {note ? <p className="text-sm text-navy/80">{note}</p> : null}
      <button type="submit" data-cta="offerte" className="inline-flex min-h-11 items-center justify-center bg-navy px-5 font-semibold text-white">
        {submitLabel}
      </button>
      {sent ? (
        <p role="status" className="border border-blue/30 bg-mist px-4 py-3 text-sm">
          Uw e-mailprogramma is geopend met de ingevulde gegevens. Verstuur het bericht om het af te ronden. Komt er geen venster, mail dan zelf naar {to}.
        </p>
      ) : null}
    </form>
  );
}
