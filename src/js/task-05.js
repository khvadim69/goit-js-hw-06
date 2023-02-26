// const inputName =
//   document.querySelector("#name-input");
// const nameOutput =
//   document.querySelector(
//     "#name-output"
//   );

<<<<<<< HEAD
inputName.addEventListener(
  "input",
  () =>
    (nameOutput.innerText =
      inputName.value
        ? inputName.value
        : "Anonymous")
);
=======
// inputName.addEventListener(
//   "input",
//   () =>
//     nameOutput.innerText =
//       inputName.value
//         ? inputName.value
//         : "Anonymous")

const inputName = document.querySelector("#name-input");
const nameOutput = document.querySelector("#name-output");
inputName.addEventListener("input", (event) => {
  nameOutput.textContent = event.currentTarget.value.trim();
  if (nameOutput.textContent === "") {
    nameOutput.textContent = "Anonymous";
  }
});
>>>>>>> a245343850311d953832d83ef10abffa4b44ac8f
