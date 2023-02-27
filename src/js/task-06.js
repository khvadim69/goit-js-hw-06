// });
const validationInput = document.querySelector("#validation-input");

validationInput.addEventListener("blur", () => {
  const toggleClass =
    validationInput.value.length ==
    Number(validationInput.getAttribute("data-length"));
  validationInput.classList.toggle("valid", toggleClass);
  validationInput.classList.toggle("invalid", !toggleClass);
});
