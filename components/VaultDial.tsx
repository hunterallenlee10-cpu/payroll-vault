// The vault dial, rebuilt as clean SVG from the Payroll Vault dial icon:
// a dotted steel ring around a green padlock with a dollar sign.
// `animate` plays the Vault Lock once on load (CSS only, so it starts before hydration).
// Decorative wherever it appears: aria-hidden.

type Props = {
  className?: string;
  animate?: boolean;
  /** Unique prefix for gradient ids when more than one dial is on the page. */
  idPrefix?: string;
};

export default function VaultDial({ className, animate = false, idPrefix = "vd" }: Props) {
  const steel = `${idPrefix}-steel`;
  const steelDark = `${idPrefix}-steel-dark`;
  const face = `${idPrefix}-face`;
  const lock = `${idPrefix}-lock`;
  return (
    <svg
      viewBox="0 0 200 200"
      className={`${animate ? "vault-animate " : ""}${className ?? ""}`}
      aria-hidden="true"
      focusable="false"
    >
      <defs>
        <linearGradient id={steel} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#f4f5f5" />
          <stop offset="0.35" stopColor="#a9b0b4" />
          <stop offset="0.55" stopColor="#eceeef" />
          <stop offset="0.8" stopColor="#868e93" />
          <stop offset="1" stopColor="#d9dcde" />
        </linearGradient>
        <linearGradient id={steelDark} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#3c454b" />
          <stop offset="1" stopColor="#15191c" />
        </linearGradient>
        <radialGradient id={face} cx="0.42" cy="0.36" r="0.75">
          <stop offset="0" stopColor="#ffffff" />
          <stop offset="1" stopColor="#ecebe4" />
        </radialGradient>
        <linearGradient id={lock} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#5E9E36" />
          <stop offset="1" stopColor="#498B2A" />
        </linearGradient>
      </defs>

      {/* Fixed bezel */}
      <circle cx="100" cy="100" r="97" fill={`url(#${steel})`} stroke="#5f686d" strokeWidth="0.75" />

      {/* Turning ring: detent ticks and the perforated steel band */}
      <g className="vault-ring">
        <circle cx="100" cy="100" r="90" fill="#2a3136" />
        <circle cx="100" cy="100" r="90" fill={`url(#${steel})`} opacity="0.92" />
        {/* minor ticks */}
        <circle
          cx="100"
          cy="100"
          r="92.5"
          fill="none"
          stroke="#2f363b"
          strokeWidth="3"
          strokeDasharray="0.7 4.144"
          opacity="0.55"
        />
        {/* major ticks every 10 */}
        <circle
          cx="100"
          cy="100"
          r="91.5"
          fill="none"
          stroke="#1c2226"
          strokeWidth="5"
          strokeDasharray="1.1 46.81"
          opacity="0.75"
        />
        {/* perforations: round-capped zero-length dashes read as drilled dots */}
        {[84, 79, 74, 69].map((r, i) => (
          <circle
            key={r}
            cx="100"
            cy="100"
            r={r}
            fill="none"
            stroke="#2b3237"
            strokeWidth="2"
            strokeLinecap="round"
            strokeDasharray={`0 ${((2 * Math.PI * r) / Math.round((2 * Math.PI * r) / 5.2)).toFixed(3)}`}
            strokeDashoffset={i % 2 ? 2.6 : 0}
            opacity="0.62"
          />
        ))}
      </g>

      {/* Index mark: the dial turns to meet it */}
      <path d="M100 11 l-5 -8 h10 z" fill="#3A781E" />

      {/* Inner bevel and face */}
      <circle cx="100" cy="100" r="64" fill={`url(#${steelDark})`} />
      <circle cx="100" cy="100" r="60" fill={`url(#${steel})`} />
      <circle cx="100" cy="100" r="57" fill={`url(#${face})`} />

      {/* Padlock */}
      <g className="vault-shackle">
        <path
          d="M83 96 V80 a17 17 0 0 1 34 0 V96"
          fill="none"
          stroke="#3A781E"
          strokeWidth="9"
          strokeLinecap="butt"
        />
      </g>
      <rect x="70" y="90" width="60" height="50" rx="8" fill={`url(#${lock})`} />
      <rect x="70" y="90" width="60" height="50" rx="8" fill="none" stroke="#3A781E" strokeWidth="1.25" />
      {/* Dollar sign */}
      <path
        d="M108.5 107 c-1.8-2.9-4.9-4.4-8.5-4.4 c-4.6 0-7.8 2.4-7.8 5.9 c0 8.3 16.6 4.4 16.6 12.6 c0 3.7-3.4 6.3-8.3 6.3 c-4 0-7.3-1.7-9-4.6"
        fill="none"
        stroke="#ffffff"
        strokeWidth="3.6"
        strokeLinecap="round"
      />
      <path d="M100 97 V133" stroke="#ffffff" strokeWidth="3.6" strokeLinecap="round" />
    </svg>
  );
}
