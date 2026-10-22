export function Flame({ className = "h-8 w-8" }: { className?: string }) {
  return (
    <svg viewBox="0 0 48 48" className={className} aria-hidden>
      <path
        fill="#EA282E"
        d="M26 4c1.4 8 9 12 10 22 1 12-8 20-16 20S6 38 7 26C8 16 16 12 19 6c1 6 4 9 7 9 0-5 0-8 0-11z"
      />
    </svg>
  );
}

export function Bolt({ className = "h-8 w-8" }: { className?: string }) {
  return (
    <svg viewBox="0 0 48 48" className={className} aria-hidden>
      <path fill="#EA282E" d="M28 2 12 26h12L16 46 40 18H26L40 2z" />
    </svg>
  );
}

export function Waves({ className = "h-8 w-8" }: { className?: string }) {
  return (
    <svg viewBox="0 0 48 48" className={className} aria-hidden>
      <g fill="none" stroke="#4268B2" strokeWidth="3" strokeLinecap="round">
        <path d="M4 16c6 6 10 6 16 0s10-6 16 0 10 6 16 0" />
        <path d="M4 26c6 6 10 6 16 0s10-6 16 0 10 6 16 0" />
        <path d="M4 36c6 6 10 6 16 0s10-6 16 0 10 6 16 0" />
      </g>
    </svg>
  );
}

export function Pulse({ className = "h-2.5 w-2.5" }: { className?: string }) {
  return <span className={`pulse-dot inline-block rounded-full bg-white ${className}`} aria-hidden />;
}
