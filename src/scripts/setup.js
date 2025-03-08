import { chromium } from "playwright";

export const setup = async (brand) => {
  const browser = await chromium.launch({ headless: false });
  const context = await browser.newContext({ viewport: null });
  const page = await context.newPage();

  await page.goto(`https://m.alfabet-dev.${brand}.mx/`);
  await page.waitForTimeout(2000);

  return { page, browser };
};
