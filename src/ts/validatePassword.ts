export const validatePassword = () => {
  const password = document.querySelector("#password") as HTMLInputElement;
  const errorMsg = document.querySelector("#errorPassword") as HTMLElement;

  password.addEventListener("input", () => {
    if (password.validity.valueMissing) {
      errorMsg.textContent = "You need to enter a password";
    } else if (password.validity.patternMismatch) {
      errorMsg.textContent = "Enter a valid password , ex : Password1!";
    } else {
      errorMsg.textContent = "";
      return true;
    }
  });
  return false;
};
