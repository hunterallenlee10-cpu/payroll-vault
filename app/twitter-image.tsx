import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import path from "node:path";
import { spiresArt } from "@/components/SpiresLine";

// 1200x630 link preview: paper, his wordmark exactly as supplied, the line, and the spires.
export const alt = "Payroll Vault Frederick: Payroll, handled by your neighbors. Frederick, MD";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const dynamic = "force-static";

export default async function OgImage() {
  const root = process.cwd();
  const [fraunces, publicSans, logo] = await Promise.all([
    readFile(path.join(root, "assets/fonts/Fraunces-SemiBold.ttf")),
    readFile(path.join(root, "assets/fonts/PublicSans-Medium.ttf")),
    readFile(path.join(root, "public/images/00-logo-2-logo-wordmark-transparent.png")),
  ]);
  const logoSrc = `data:image/png;base64,${logo.toString("base64")}`;
  const spires = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${spiresArt.width} 156" preserveAspectRatio="xMidYMax slice" width="1200" height="170"><g fill="none" stroke="#14212B" stroke-width="1.4" stroke-linejoin="round" stroke-linecap="round" opacity="0.2"><path d="${spiresArt.outline}"/><path d="${spiresArt.details}"/><path d="M0 150 H${spiresArt.width}"/></g></svg>`;
  const spiresSrc = `data:image/svg+xml;base64,${Buffer.from(spires).toString("base64")}`;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          background: "#F7F5EF",
          backgroundImage: "repeating-linear-gradient(to bottom, transparent 0, transparent 31px, rgba(227,223,211,0.45) 31px, rgba(227,223,211,0.45) 32px)",
          padding: "64px 80px",
          position: "relative",
        }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={logoSrc} width={320} height={82} alt="" />
        <div style={{ display: "flex", flexDirection: "column", marginTop: 56 }}>
          <div style={{ fontFamily: "Fraunces", fontSize: 76, lineHeight: 1.04, color: "#14212B", letterSpacing: -1.5 }}>
            Payroll, handled by your neighbors.
          </div>
          <div
            style={{
              fontFamily: "Public Sans",
              fontSize: 26,
              color: "#3A781E",
              marginTop: 26,
              letterSpacing: 4,
              textTransform: "uppercase",
            }}
          >
            Frederick, MD · Payroll Vault Frederick
          </div>
        </div>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={spiresSrc} width={1200} height={170} alt="" style={{ position: "absolute", left: 0, bottom: 0 }} />
      </div>
    ),
    {
      ...size,
      fonts: [
        { name: "Fraunces", data: fraunces, weight: 600, style: "normal" },
        { name: "Public Sans", data: publicSans, weight: 500, style: "normal" },
      ],
    },
  );
}
