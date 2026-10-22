"use client";

import { useState } from "react";

const stroom = [
  "Brandt de display van de kWh-meter? Zo niet, bel dan uw netbeheerder.",
  "Staan alle aardlekschakelaars en groepenschakelaars ingeschakeld?",
  "Schakelen de automaten zich vanzelf weer uit? Haal de stekkers uit de stopcontacten zonder spanning. Schakel de groep weer in. Blijft de schakelaar aan, plaats dan één voor één de stekkers terug.",
];

const cv = [
  "Is er een stroomstoring? Controleer de aardlekschakelaar of de zekeringen.",
  "Staat de kamerthermostaat hoog genoeg?",
  "Staat de gaskraan open?",
  "Is de waterdruk tussen 1,5 en 2,0 bar? Zo niet, vul de cv-installatie tot maximaal 2,0 bar.",
  "Lekt of druppelt er een waterkraan?",
];

export default function Checks() {
  const [tab, setTab] = useState<"stroom" | "cv">("stroom");
  const steps = tab === "stroom" ? stroom : cv;

  return (
    <div>
      <div className="grid gap-2 sm:grid-cols-2" role="tablist" aria-label="Soort storing">
        <button
          type="button"
          role="tab"
          aria-selected={tab === "stroom"}
          className={`min-h-14 px-4 text-left text-lg font-semibold ${tab === "stroom" ? "bg-navy text-white" : "bg-white text-navy"}`}
          onClick={() => setTab("stroom")}
        >
          Stroomstoring
        </button>
        <button
          type="button"
          role="tab"
          aria-selected={tab === "cv"}
          className={`min-h-14 px-4 text-left text-lg font-semibold ${tab === "cv" ? "bg-navy text-white" : "bg-white text-navy"}`}
          onClick={() => setTab("cv")}
        >
          Storing van de cv-ketel
        </button>
      </div>
      <ol className="mt-4 grid gap-3">
        {steps.map((step, index) => (
          <li key={step} className="flex gap-4 border border-navy/10 bg-white p-4">
            <span className="nums flex h-11 w-11 shrink-0 items-center justify-center bg-paper text-lg font-semibold text-navy">{index + 1}</span>
            <p className="pt-1 text-lg">{step}</p>
          </li>
        ))}
      </ol>
    </div>
  );
}
