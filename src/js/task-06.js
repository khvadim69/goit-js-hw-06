<<<<<<< HEAD
const validationInput =
  document.querySelector(
    "#validation-input"
  );
validationInput.addEventListener(
  "blur",
  () => {
    validationInput.classList.toggle(
      "valid",
      validationInput.value.length ==
        Number(
          validationInput.getAttribute(
            "data-length"
          )
        )
    );
    validationInput.classList.toggle(
      "invalid",
      validationInput.value.length !==
        Number(
          validationInput.getAttribute(
            "data-length"
          )
        )
    );
    // validationInput.classList.toggle("none ", validationInput.value.length = 0);
  }
);
=======
// const validationInput = document.querySelector("#validation-input");
// validationInput.addEventListener("blur", () => {
//   validationInput.classList.toggle("valid", validationInput.value.length == 6);
//   validationInput.classList.toggle("invalid", validationInput.value.length !== 6);
//   // validationInput.classList.toggle("none ", validationInput.value.length = 0);
// });
const validationInput = document.querySelector("#validation-input");

validationInput.addEventListener("blur", () => {
  // validationInput.classList.remove(
  //   "valid",
  //   "invalid"
  // );
  validationInput.classList.toggle(
    "valid",
    validationInput.value.length ==
      Number(validationInput.getAttribute("data-length"))
  );
  validationInput.classList.toggle(
    "invalid",
    validationInput.value.length !==
      Number(validationInput.getAttribute("data-length"))
  );
});
>>>>>>> a245343850311d953832d83ef10abffa4b44ac8f
