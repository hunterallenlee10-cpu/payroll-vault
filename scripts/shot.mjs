// Usage: node scripts/shot.mjs <url> <outPrefix> [selector] [--full]
import { createRequire } from "node:module";
const require = createRequire(import.meta.url);
let chromium;
try { ({ chromium } = require("playwright")); } catch { ({ chromium } = require(require("node:child_process").execSync("npm root -g").toString().trim() + "/playwright")); }
const [url = "http://localhost:3000/", out = "shot", sel = "", ...rest] = process.argv.slice(2);
const full = rest.includes("--full");
const scale = rest.includes("--hd") ? 2 : 1;
const browser = await chromium.launch();
for (const [name, vp] of [["desktop", { width: 1440, height: 900 }], ["mobile", { width: 375, height: 667 }]]) {
  const page = await browser.newPage({ viewport: vp, deviceScaleFactor: scale });
  await page.goto(url, { waitUntil: "networkidle" });
  await page.waitForTimeout(1800);
  if (sel && sel !== "-") {
    const el = page.locator(sel).first();
    await el.scrollIntoViewIfNeeded();
    await page.waitForTimeout(600);
    await el.screenshot({ path: `${out}-${name}.png` });
  } else {
    await page.screenshot({ path: `${out}-${name}.png`, fullPage: full });
  }
  const overflow = await page.evaluate(() => document.documentElement.scrollWidth - window.innerWidth);
  console.log(name, "horizontal overflow px:", overflow);
  await page.close();
}
await browser.close();
