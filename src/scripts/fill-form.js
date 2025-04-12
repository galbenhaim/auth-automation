export const fillForm = async (
  page,
  username,
  password,
  submitButtonSelector
) => {
  const usernameInput = await page.locator("#username");
  await usernameInput.fill(username);

  const passwordInput = await page.locator("#password");
  await passwordInput.fill(password);

  const submitButton = await page.locator(submitButtonSelector);
  submitButton.click();
};
