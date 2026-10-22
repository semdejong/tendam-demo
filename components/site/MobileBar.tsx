import Link from "next/link";
import { Pulse } from "@/components/ui/Icons";
import { PHONE } from "@/lib/site";

export default function MobileBar() {
  return (
    <div
      data-section="mobiele-balk"
      className="fixed inset-x-0 bottom-0 z-40 grid grid-cols-2 border-t border-navy/10 bg-white md:hidden"
    >
      <a href={PHONE.tel} className="inline-flex min-h-14 items-center justify-center gap-2 bg-urgent px-3 text-sm font-semibold text-white">
        <Pulse />
        Storing 24/7
      </a>
      <Link href="/offerte" data-cta="offerte" className="inline-flex min-h-14 items-center justify-center px-3 text-sm font-semibold text-navy">
        Offerte
      </Link>
    </div>
  );
}
