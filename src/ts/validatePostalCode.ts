export const validatePostalCode = () => {
  const postalCode = document.querySelector("#postalCode") as HTMLInputElement;
  const errorMsg = document.querySelector("#errorNumber") as HTMLElement;
  postalCode.addEventListener("input", () => {
    if (postalCode.validity.valueMissing) {
      errorMsg.textContent = "You need to enter a Postal Code ";
    } else if (postalCode.validity.patternMismatch) {
      errorMsg.textContent = "Enter a valid Postal Code  :1234 5678 ";
    } else {
      errorMsg.textContent = "";
      return true;
    }
  });
  return false;
};
