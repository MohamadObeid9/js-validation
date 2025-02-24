export const validatePassConfim = () => {
  const passConfim = document.querySelector("#passConfim") as HTMLInputElement;
  const pass = document.querySelector("#password") as HTMLInputElement;
  const errorMsg = document.querySelector("#errorPasswordConfim") as HTMLElement;

  if (pass && passConfim && errorMsg) {
    const validate = () => {
      if (passConfim.validity.valueMissing) {
        errorMsg.textContent = "You need to reenter your password";
        return false;
      } else if (passConfim.value !== pass.value) {
        errorMsg.textContent = "You need to reenter your exact password";
        return false;
      } else {
        errorMsg.textContent = "";
        return true;
      }
    };
    passConfim.addEventListener("input", validate);
    return validate();
  }
  return false;
};
