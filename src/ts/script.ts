import { btnHandler } from "./btnHandler";
import { validateCountry } from "./validateCountry";
import { validateEmail } from "./validateEmail";
import { validatePassConfim } from "./validatePassConfim";
import { validatePassword } from "./validatePassword";
import { validatePostalCode } from "./validatePostalCode";

export const launchPgr = () => {
  validateEmail();
  validateCountry();
  validatePostalCode();
  validatePassword();
  validatePassConfim();
  btnHandler();
};
