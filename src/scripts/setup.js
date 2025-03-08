import { chromium } from "playwright";

export const setup = async (headless = false, brand) => {
  const browser = await chromium.launch({ headless });
  const context = await browser.newContext();
  const page = await context.newPage();

  await page.goto(`https://m.alfabet-dev.${brand}.mx/`);
  await page.waitForTimeout(2000);

  return { page, browser };
};
