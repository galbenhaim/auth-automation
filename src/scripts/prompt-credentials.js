import { input, select } from "@inquirer/prompts";
import dotenv from "dotenv";

dotenv.config();

export const promptCredentials = async () => {
  let username = process.env.ALFABET_USERNAME;
  let password = process.env.ALFABET_PASSWORD;
  let brand = process.env.ALFABET_BRAND;

  if (!username && !password && !brand) {
    console.log("=========================================================");
    console.log("Adding the following env variables will skip the prompts:");
    console.log("=========================================================");
    console.log("ALFABET_USERNAME=your_username");
    console.log("ALFABET_PASSWORD=your_password");
    console.log("ALFABET_BRAND=your_brand");
    console.log("=========================================================\n");
  }

  if (!username) {
    username = await input({
      message: "Enter your username",
      default: "BETBUILDERTEST",
    });
  } else {
    console.log(`ALFABET_USERNAME=${username}`);
  }

  if (!password) {
    password = await input({
      message: "Enter your password",
      default: "6Qxw6D6RQ3",
    });
  } else {
    console.log(`ALFABET_PASSWORD=${password}`);
  }

  if (!brand) {
    brand = await select({
      message: "Select your brand",
      choices: [
        { value: "caliente", label: "Caliente" },
        { value: "winner", label: "Winner" },
      ],
      default: "caliente",
    });
  } else {
    console.log(`ALFABET_BRAND=${brand}`);
  }

  return { username, password, brand };
};
