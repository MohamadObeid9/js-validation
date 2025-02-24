export const validatePassword = () => {
  const password = document.querySelector("#password") as HTMLInputElement;
  const errorMsg = document.querySelector("#errorPassword") as HTMLElement;

  if (password && errorMsg) {
    const validate = () => {
      if (password.validity.valueMissing) {
        errorMsg.textContent = "You need to enter a password";
        return false;
      } else if (password.validity.patternMismatch) {
        errorMsg.textContent = "Enter a valid password , ex : Password1!";
        return false;
      } else {
        errorMsg.textContent = "";
        return true;
      }
    };
    password.addEventListener("input", validate);
    return validate();
  }
  return false;
};
