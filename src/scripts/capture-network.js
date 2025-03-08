export const captureNetwork = async (page, brand) => {
  const url = loginUrls[brand];

  const responsePromise = page.waitForResponse((response) =>
    response.url().includes(url)
  );

  const response = await responsePromise;

  if (!response.ok()) {
    throw new Error(`Failed to fetch ${url}, status: ${response.status()}`);
  }

  return await response.json();
};

const loginUrls = {
  caliente: "login.caliente.mx/Login.php",
  winner: "login-co.winner.mx/Login.php",
};
