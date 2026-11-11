import type { Metadata, Viewport } from "next";
import { Fraunces, Public_Sans } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import QuoteProvider from "@/components/QuoteProvider";
import Nav from "@/components/sections/Nav";
import MobileBar from "@/components/sections/MobileBar";
import BackToTop from "@/components/BackToTop";
import { business } from "@/lib/business";
import { isLive, siteUrl } from "@/lib/site";
import "./globals.css";

const fraunces = Fraunces({
  subsets: ["latin"],
  weight: "variable",
  axes: ["opsz"],
  display: "swap",
  variable: "--font-fraunces",
});

const publicSans = Public_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
  variable: "--font-public-sans",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#F7F5EF",
};

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  applicationName: business.name,
  authors: [{ name: business.name }],
  // Demo mode keeps the concept out of search results. Live mode is for launch day.
  robots: isLive ? { index: true, follow: true } : { index: false, follow: false },
  formatDetection: { telephone: false },
  openGraph: {
    type: "website",
    siteName: business.name,
    locale: "en_US",
  },
  twitter: { card: "summary_large_image" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${fraunces.variable} ${publicSans.variable}`}>
      <body>
        <QuoteProvider>
          <Nav />
          {children}
          <MobileBar />
          <BackToTop />
        </QuoteProvider>
        <Analytics />
      </body>
    </html>
  );
}
