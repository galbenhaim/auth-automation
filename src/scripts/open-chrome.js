import { chromium } from "playwright";

export const openChrome = async ({ sessionToken, userId, username }) => {
  console.log({ token: sessionToken, userId });

  const browser = await chromium.launch({ headless: false });
  const context = await browser.newContext({ viewport: null });
  const page = await context.newPage();

  await page.goto("http://localhost:3000");

  await page.evaluate(
    ({ sessionToken, userId, username }) => {
      localStorage.setItem("token", sessionToken);
      localStorage.setItem("userId", userId);
      localStorage.setItem("username", username);
    },
    { sessionToken, userId, username }
  );

  await page.reload();
};
