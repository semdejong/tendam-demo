export default function Logo({ className = "h-16 w-auto" }: { className?: string }) {
  return (
    <svg viewBox="0 0 480 156" className={className} role="img" aria-label="Ten Dam Installatietechniek en IJzerwaren">
      <title>Ten Dam Installatietechniek & IJzerwaren</title>
      <path
        fill="#EA282E"
        d="M58 8c1.6 8 9.4 12.2 10.2 22.2C69.2 42.6 62 51 52.2 51S35.2 42.4 36.4 30.4C37.4 21.2 44.4 16.4 47.4 10c1.4 5.2 4 8.8 6.4 8.8C52.6 14.2 56 10.6 58 8z"
      />
      <path fill="#EA282E" d="M112 10 84 42h20L90 74l40-40h-22L126 10z" />
      <g fill="none" stroke="#8BB2DC" strokeWidth="3.4" strokeLinecap="round">
        <path d="M16 68c14 9 24 9 38 0s24-9 38 0 24 9 38 0 24-9 38 0" />
        <path d="M16 84c14 9 24 9 38 0s24-9 38 0 24 9 38 0 24-9 38 0" />
        <path d="M16 100c14 9 24 9 38 0s24-9 38 0 24 9 38 0 24-9 38 0" />
      </g>
      <text
        x="188"
        y="62"
        fill="#4268B2"
        fontFamily="Archivo, Arial, sans-serif"
        fontSize="46"
        fontWeight="700"
      >
        ten
      </text>
      <text
        x="188"
        y="112"
        fill="#4268B2"
        fontFamily="Archivo, Arial, sans-serif"
        fontSize="50"
        fontWeight="700"
      >
        dam
      </text>
      <rect x="0" y="122" width="480" height="34" fill="#EA282E" />
      <text
        x="240"
        y="144"
        textAnchor="middle"
        fill="#ffffff"
        fontFamily="Archivo, Arial, sans-serif"
        fontSize="13"
        fontWeight="700"
        letterSpacing="0.8"
      >
        INSTALLATIETECHNIEK &amp; IJZERWAREN
      </text>
    </svg>
  );
}
