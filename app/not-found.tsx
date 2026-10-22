import Link from "next/link";

export default function NotFound() {
  return (
    <section data-section="niet-gevonden" className="mx-auto max-w-3xl px-5 py-20">
      <h1 className="text-4xl font-semibold">Deze pagina bestaat niet.</h1>
      <p className="mt-4">De pagina is verplaatst of het adres klopt niet. Ga terug naar de homepage of bekijk de projecten.</p>
      <div className="mt-6 flex flex-wrap gap-3">
        <Link href="/" className="inline-flex min-h-11 items-center bg-navy px-5 font-semibold text-white">
          Homepage
        </Link>
        <Link href="/projecten" className="inline-flex min-h-11 items-center border border-navy px-5 font-semibold">
          Projecten
        </Link>
      </div>
    </section>
  );
}
