export const validateEmail = () => {
  const email = document.querySelector("#email") as HTMLInputElement | null;
  const errorMsg = document.querySelector("#errorEmail") as HTMLElement | null;

  if (email && errorMsg) {
    email.addEventListener("input", () => {
      if (email.validity.valueMissing) {
        errorMsg.textContent = "You need to enter an email address.";
      } else if (email.validity.typeMismatch) {
        errorMsg.textContent = "Entered value needs to be an e-mail address.";
      } else if (email.validity.patternMismatch) {
        errorMsg.textContent = "I am expecting a valid email address!";
      } else {
        errorMsg.textContent = "";
        return true;
      }
    });
    return false;
  }
};
