export const validatePostalCode = () => {
  const postalCode = document.querySelector("#postalCode") as HTMLInputElement;
  const errorMsg = document.querySelector("#errorNumber") as HTMLElement;

  if (postalCode && errorMsg) {
    const validate = () => {
      if (postalCode.validity.valueMissing) {
        errorMsg.textContent = "You need to enter a Postal Code ";
        return false;
      } else if (postalCode.validity.patternMismatch) {
        errorMsg.textContent = "Enter a valid Postal Code  :1234 5678 ";
        return false;
      } else {
        errorMsg.textContent = "";
        return true;
      }
    };
    postalCode.addEventListener("input", validate);
    return validate();
  }
  return false;
};
