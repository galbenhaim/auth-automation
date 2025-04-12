import { setup } from "./setup.js";
import { captureNetwork } from "./capture-network.js";
import { fillForm } from "./fill-form.js";
import { getSubmitButtonSelector } from "./get-submit-button-selector.js";

export const login = async ({ username, password }, brand) => {
  const { page, browser } = await setup(brand);

  await fillForm(page, username, password, getSubmitButtonSelector(brand));

  const responseData = await captureNetwork(page, brand);
  const { perm_token, user_id } = responseData.payload.payload;

  await browser.close();

  return { userId: user_id, sessionToken: perm_token };
};
