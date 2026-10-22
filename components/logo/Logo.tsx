export default function Logo({ className = "" }: { className?: string }) {
  return (
    <span className={`inline-flex min-w-0 flex-col leading-none ${className}`}>
      <span className="flex items-end gap-2">
        <svg viewBox="0 0 78 64" className="h-9 w-auto sm:h-11" aria-hidden="true">
          <g fill="none" stroke="#8BB2DC" strokeWidth="2.4" strokeLinecap="round">
            <path d="M2 28c8 6 14 6 22 0s14-6 22 0 14 6 22 0" />
            <path d="M2 42c8 6 14 6 22 0s14-6 22 0 14 6 22 0" />
            <path d="M2 56c8 6 14 6 22 0s14-6 22 0 14 6 22 0" />
          </g>
          <path fill="#EA282E" d="M22 2c1 5 6 7.4 6.6 13.6C29.2 23 24.6 28 19.2 28S9 22.6 9.8 15.6C10.6 10 14.8 7.2 16.8 3.2 17.6 6.6 19.2 8.8 20.6 8.8 20 5.6 21 3.8 22 2z" />
          <path fill="#EA282E" d="M52 3 38 22h10L42 40l20-22H52L60 3z" />
        </svg>
        <span className="font-display text-[1.55rem] font-bold leading-[0.82] tracking-tight text-blue sm:text-[1.85rem]">
          ten
          <span className="block">dam</span>
        </span>
      </span>
      <span className="mt-1 bg-[#EA282E] text-center font-bold tracking-[0.08em] text-white">
        <span className="hidden px-1.5 py-1 text-[8px] leading-none sm:block sm:text-[9px]">INSTALLATIETECHNIEK & IJZERWAREN</span>
        <span className="block h-1 sm:hidden" aria-hidden />
      </span>
    </span>
  );
}
