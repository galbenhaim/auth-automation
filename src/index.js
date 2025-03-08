import { login } from "./scripts/login.js";
import { openChrome } from "./scripts/open-chrome.js";
import { promptCredentials } from "./scripts/prompt-credentials.js";

const init = async () => {
  const { username, password, brand } = await promptCredentials();

  const { userId, sessionToken } = await login({ username, password }, brand);

  await openChrome({ sessionToken, userId, username, brand });
};

init();
