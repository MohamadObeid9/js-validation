export const validateCountry = () => {
  const country = document.querySelector("#country") as HTMLSelectElement;
  const errorMsg = document.querySelector("#errorCountry") as HTMLElement;

  country.addEventListener("click", () => {
    if (country.value == "0") {
      errorMsg.textContent = "You need to enter a valid country.";
    } else {
      return true;
    }
  });
  return false;
};
