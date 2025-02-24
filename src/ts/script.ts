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

  const submitBtn = document.querySelector("#submit");
  submitBtn.addEventListener("submit", (event) => {
    event.preventDefault();
    const isEmailValid = validateEmail();
    const isCountryValid = validateCountry();
    const isPostalCodeValid = validatePostalCode();
    const isPasswordValid = validatePassword();
    const isPassConfimValid = validatePassConfim();

    if (
      isEmailValid &&
      isCountryValid &&
      isPostalCodeValid &&
      isPasswordValid &&
      isPassConfimValid
    ) {
      // All validations passed, submit the form
      const form = document.querySelector("form");
      form.submit();
    } else {
      // Handle validation errors
      console.log("Validation failed");
    }
  });
};
