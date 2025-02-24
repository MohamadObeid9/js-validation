export const validateCountry = () => {
  const country = document.querySelector("#country") as HTMLSelectElement;
  const errorMsg = document.querySelector("#errorCountry") as HTMLElement;

  if (country && errorMsg) {
    const validate = () => {
      if (country.value == "0") {
        errorMsg.textContent = "You need to enter a valid country.";
        return false;
      } else {
        errorMsg.textContent = "";
        return true;
      }
    };
    country.addEventListener("click", validate);
    return validate();
  }
  return false;
};
