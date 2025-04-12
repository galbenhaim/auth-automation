import { chromium, devices } from "playwright";

export const setup = async (brand) => {
  const browser = await chromium.launch({ headless: false, devtools: false });
  const context = await browser.newContext(devices["iPhone 13"]);
  const page = await context.newPage();

  await page.goto(`https://m.alfabet-dev.${brand}.mx/`);

  return { page, browser };
};
