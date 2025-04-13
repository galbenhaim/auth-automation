import { chromium } from "playwright";

export const openChrome = async ({ sessionToken, userId, username }) => {
  console.log({ sessionToken, userId, username });

  const browser = await chromium.launch({
    headless: false,
    args: ["--auto-open-devtools-for-tabs", "--start-maximized"],
  });

  const context = await browser.newContext({
    viewport: null,
    devtools: true,
  });

  const page = await context.newPage();

  await page.goto("http://localhost:3000");

  await page.addInitScript(
    ({ sessionToken, userId, username }) => {
      window.localStorage.setItem("token", sessionToken);
      window.localStorage.setItem("userId", userId);
      window.localStorage.setItem("username", username);
    },
    { sessionToken, userId, username }
  );

  await page.reload();
};
