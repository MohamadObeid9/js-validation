export const validatePassConfim = () => {
  const passConfim = document.querySelector("#passConfim") as HTMLInputElement;
  const pass = document.querySelector("#password") as HTMLInputElement;
  const errorMsg = document.querySelector(
    "#errorPasswordConfim"
  ) as HTMLElement;
  passConfim.addEventListener("input", () => {
    if (passConfim.validity.valueMissing) {
      errorMsg.textContent = "You need to reenter your password";
    } else if (passConfim.value !== pass.value) {
      errorMsg.textContent = "You need to reenter your exact password";
    } else {
      errorMsg.textContent = "";
      return true;
    }
  });
  return false;
};
