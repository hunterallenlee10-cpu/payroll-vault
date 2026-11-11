import { business } from "@/lib/business";

// A simple outlined map of Frederick County, drawn by hand from approximate coordinates.
// Labelled dots for the towns served. No street address, no Google Maps embed.
// DRAFT: confirm towns served

type Town = { name: string; x: number; y: number; lx: number; ly: number; anchor: "start" | "middle" | "end" };

const OUTLINE =
  "M198.3 27.6 L373.4 27.6 L385.2 82.0 L392.1 154.0 L406.0 226.0 L413.0 298.0 L423.4 329.5 L440.8 343.0 L406.0 365.5 L371.3 406.0 L308.7 442.0 L246.2 469.0 L204.5 478.0 L176.7 460.0 L149.0 433.0 L121.2 415.0 L86.4 397.0 L51.7 388.0 L27.4 379.0 L58.6 316.0 L86.4 244.0 L135.1 172.0 L169.8 100.0 Z";

const towns: Town[] = [
  { name: "Emmitsburg", x: 296.9, y: 42.4, lx: 288, ly: 47, anchor: "end" },
  { name: "Thurmont", x: 238.6, y: 114.4, lx: 247, ly: 119, anchor: "start" },
  { name: "Myersville", x: 130.9, y: 221.5, lx: 139, ly: 226, anchor: "start" },
  { name: "Walkersville", x: 279.6, y: 238.6, lx: 288, ly: 243, anchor: "start" },
  { name: "Middletown", x: 145.5, y: 277.3, lx: 153, ly: 282, anchor: "start" },
  { name: "Frederick", x: 239.3, y: 303.4, lx: 251, ly: 309, anchor: "start" },
  { name: "New Market", x: 336.5, y: 331.3, lx: 340, ly: 350, anchor: "middle" },
  { name: "Mount Airy", x: 416.4, y: 337.6, lx: 412, ly: 324, anchor: "end" },
  { name: "Ijamsville", x: 304.6, y: 354.7, lx: 312, ly: 372, anchor: "start" },
  { name: "Urbana", x: 280.3, y: 382.6, lx: 272, ly: 400, anchor: "end" },
  { name: "Adamstown", x: 195.5, y: 396.1, lx: 196, ly: 415, anchor: "middle" },
  { name: "Brunswick", x: 87.8, y: 393.4, lx: 84, ly: 376, anchor: "middle" },
];

export default function CountyMap({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 470 500"
      className={className}
      role="img"
      aria-labelledby="county-map-title"
    >
      <title id="county-map-title">
        {`Simplified map of Frederick County, Maryland, marking the towns we serve: ${business.towns.join(", ")}.`}
      </title>
      <path d={OUTLINE} fill="#FFFFFF" stroke="#14212B" strokeWidth="1.5" strokeLinejoin="round" />
      <text x="420" y="22" textAnchor="end" fontSize="12" fill="#5B6670" letterSpacing="1.5" fontWeight="600">
        PENNSYLVANIA
      </text>
      <text x="40" y="452" fontSize="12" fill="#5B6670" letterSpacing="1.5" fontWeight="600" transform="rotate(-24 40 452)">
        VIRGINIA
      </text>
      {towns.map((t) => {
        const hub = t.name === "Frederick";
        return (
          <g key={t.name}>
            <circle cx={t.x} cy={t.y} r={hub ? 7 : 4.5} fill={hub ? "#3A781E" : "#FFFFFF"} stroke="#3A781E" strokeWidth="2" />
            <text
              x={t.lx}
              y={t.ly}
              textAnchor={t.anchor}
              fontSize={hub ? 18 : 15}
              fontWeight={hub ? 600 : 500}
              fill="#14212B"
              className={hub ? undefined : "county-label-minor"}
              style={{ fontFamily: "var(--font-public-sans), system-ui, sans-serif" }}
            >
              {t.name}
            </text>
          </g>
        );
      })}
    </svg>
  );
}
