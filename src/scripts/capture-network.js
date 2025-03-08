export const captureNetwork = async (page) => {
  const responsePromise = page.waitForResponse((response) =>
    response.url().includes("login.caliente.mx/Login.php")
  );

  const response = await responsePromise;

  return await response.json();
};
