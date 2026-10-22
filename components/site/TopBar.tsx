import { Pulse } from "@/components/ui/Icons";
import { PHONE } from "@/lib/site";

export default function TopBar() {
  return (
    <a
      href={PHONE.tel}
      data-section="storing-balk"
      className="flex min-h-11 items-center justify-center gap-2 bg-urgent px-3 py-2 pr-36 text-center text-sm font-semibold text-white sm:pr-44 sm:text-base"
    >
      <Pulse />
      <span className="sm:hidden">
        Storing? 24/7: <span className="nums">{PHONE.display}</span>
      </span>
      <span className="hidden sm:inline">
        Storing? Wij zijn 24/7 bereikbaar: <span className="nums">{PHONE.display}</span>
      </span>
    </a>
  );
}
