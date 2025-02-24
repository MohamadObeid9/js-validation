import { validateCountry } from "./validateCountry";
import { validateEmail } from "./validateEmail";
import { validatePassConfim } from "./validatePassConfim";
import { validatePassword } from "./validatePassword";
import { validatePostalCode } from "./validatePostalCode";

export const btnHandler = () => {
  const email = document.querySelector("#email") as HTMLInputElement;
  const country = document.querySelector("#country") as HTMLInputElement;
  const postalCode = document.querySelector("#postalCode") as HTMLInputElement;
  const password = document.querySelector("#password") as HTMLInputElement;
  const passConfim = document.querySelector("#passConfim") as HTMLInputElement;

  const submitBtn = document.querySelector("#submit") as HTMLButtonElement;

  const isEmailValid = validateEmail;
  const isCountryValid = validateCountry;
  const isPostalCodeValid = validatePostalCode;
  const isPasswordValid = validatePassword;
  const isPassConfimValid = validatePassConfim;

  submitBtn.addEventListener("click", (e) => {
    e.preventDefault();
    if (!isEmailValid()) {
      email.focus();
    } else if (!isCountryValid()) {
      country.focus();
    } else if (!isPostalCodeValid()) {
      postalCode.focus();
    } else if (!isPasswordValid()) {
      password.focus();
    } else if (!isPassConfimValid()) {
      passConfim.focus();
    }
  });
};
