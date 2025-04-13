export const captureNetwork = async (page) => {
  const url = "https://alfabet-gateway.parleyit.in/authenticate";

  const response = await page.waitForResponse((response) =>
    response.url().includes(url)
  );

  if (!response.ok()) {
    throw new Error(`Failed to fetch ${url}, status: ${response.status()}`);
  }

  return await response.json();
};
