export const validateEmail = () => {
  const email = document.querySelector("#email") as HTMLInputElement | null;
  const errorMsg = document.querySelector("#errorEmail") as HTMLElement | null;

  if (email && errorMsg) {
    const validate = () => {
      if (email.validity.valueMissing) {
        errorMsg.textContent = "You need to enter an email address.";
        return false;
      } else if (email.validity.typeMismatch) {
        errorMsg.textContent = "Entered value needs to be an e-mail address.";
        return false;
      } else if (email.validity.patternMismatch) {
        errorMsg.textContent = "I am expecting a valid email address!";
        return false;
      } else {
        errorMsg.textContent = "";
        return true;
      }
    };
    email.addEventListener("input", validate);
    return validate();
  }
  return false;
};
