// const inputName =
//   document.querySelector("#name-input");
// const nameOutput =
//   document.querySelector(
//     "#name-output"
//   );

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
