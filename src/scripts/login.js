import { setup } from "./setup.js";
import { captureNetwork } from "./capture-network.js";
import { openLoginPopup } from "./open-login-popup.js";
import { fillForm } from "./fill-form.js";
import { getSubmitButtonSelector } from "./get-submit-button-selector.js";

export const login = async ({ username, password }, brand) => {
  const { page, browser } = await setup(false, brand);

  await openLoginPopup(page);

  await fillForm(page, username, password, getSubmitButtonSelector(brand));

  const responseData = await captureNetwork(page);

  await browser.close();

  return {
    userId: responseData.username.userId,
    sessionToken: responseData.rootSessionToken.sessionToken,
  };
};
