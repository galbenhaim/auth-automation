export const openLoginPopup = async (page) => {
  const loginButton = await page.locator('[data-testid="login-top-btn"]');
  await loginButton.click();

  const dialog = await page.locator(".login-msg-lighter");
  await dialog.waitFor({ state: "visible" });
};
