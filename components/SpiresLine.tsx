// Frederick "clustered spires" line art. An original, single-weight drawing of a small-city skyline:
// slim church spires, a clock tower, a cupola and brick rooflines. Decoration only.

type Piece =
  | ["row", number, number] // width, roof y
  | ["gable", number, number, number] // width, eave y, ridge y
  | ["chimney", number, number] // width, roof y
  | ["spire", number, number, number] // width, tower top y, apex y
  | ["clock", number, number, number] // width, tower top y, cap apex y
  | ["cupola", number, number, number]; // width, base y, dome top y

const BASE = 150;

const pieces: Piece[] = [
  ["row", 46, 128], ["gable", 44, 122, 104], ["chimney", 34, 116], ["row", 30, 124],
  ["spire", 26, 92, 30], ["row", 30, 118], ["gable", 64, 112, 90],
  ["spire", 20, 86, 44], ["row", 22, 100], ["spire", 20, 86, 44],
  ["row", 42, 122], ["cupola", 34, 102, 80], ["row", 54, 126], ["gable", 40, 120, 102],
  ["spire", 22, 96, 50], ["row", 46, 114], ["chimney", 40, 124], ["gable", 52, 118, 98],
  ["row", 28, 110], ["spire", 18, 100, 60], ["row", 64, 122], ["clock", 30, 82, 62],
  ["row", 48, 128], ["gable", 46, 120, 100], ["row", 36, 116],
  ["spire", 16, 98, 62], ["row", 18, 104], ["spire", 16, 98, 62],
  ["row", 52, 124], ["gable", 58, 114, 94], ["chimney", 36, 120], ["spire", 24, 94, 40],
  ["row", 44, 118], ["gable", 42, 124, 108], ["row", 40, 130],
];

function build() {
  let x = 0;
  let d = `M0 ${BASE} V128`;
  const details: string[] = [];
  for (const p of pieces) {
    const [kind] = p;
    if (kind === "row") {
      const [, w, y] = p;
      d += ` V${y} H${x + w}`;
      x += w;
    } else if (kind === "gable") {
      const [, w, eave, ridge] = p;
      d += ` V${eave} L${x + w / 2} ${ridge} L${x + w} ${eave}`;
      details.push(`M${x + w / 2 - 4} ${BASE} V${eave + 14} a4 4 0 0 1 8 0 V${BASE}`);
      x += w;
    } else if (kind === "chimney") {
      const [, w, y] = p;
      d += ` V${y} H${x + w * 0.6} V${y - 9} H${x + w * 0.6 + 6} V${y} H${x + w}`;
      x += w;
    } else if (kind === "spire") {
      const [, w, top, apex] = p;
      const c = x + w / 2;
      d += ` V${top} H${x + 2} L${c} ${apex} L${x + w - 2} ${top} H${x + w}`;
      // finial and belfry opening
      details.push(`M${c} ${apex} V${apex - 7}`, `M${c - 3} ${top + 12} V${top + 6} a3 3 0 0 1 6 0 V${top + 12}`);
      x += w;
    } else if (kind === "clock") {
      const [, w, top, apex] = p;
      const c = x + w / 2;
      d += ` V${top} L${c} ${apex} L${x + w} ${top}`;
      details.push(`M${x} ${top} H${x + w}`, `M${c + 5} ${top + 14} a5 5 0 1 1 -10 0 a5 5 0 1 1 10 0`);
      x += w;
    } else {
      const [, w, base, top] = p;
      const c = x + w / 2;
      d += ` V${base} H${x + 6} V${base - 8} Q${c} ${top - 6} ${x + w - 6} ${base - 8} V${base} H${x + w}`;
      details.push(`M${c} ${top} V${top - 8}`);
      x += w;
    }
  }
  d += ` V${BASE}`;
  return { outline: d, details: details.join(" "), width: x };
}

const art = build();

export default function SpiresLine({
  className,
  stroke = "#14212B",
  opacity = 0.12,
}: {
  className?: string;
  stroke?: string;
  opacity?: number;
}) {
  return (
    <svg
      viewBox={`0 0 ${art.width} 156`}
      preserveAspectRatio="xMidYMax slice"
      className={className}
      aria-hidden="true"
      focusable="false"
    >
      <g fill="none" stroke={stroke} strokeWidth="1.25" strokeLinejoin="round" strokeLinecap="round" opacity={opacity} vectorEffect="non-scaling-stroke">
        <path d={art.outline} vectorEffect="non-scaling-stroke" />
        <path d={art.details} vectorEffect="non-scaling-stroke" />
        <path d={`M0 ${BASE} H${art.width}`} vectorEffect="non-scaling-stroke" />
      </g>
    </svg>
  );
}
