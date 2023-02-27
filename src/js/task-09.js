function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const spanColorName = document.querySelector(".color");
const btnChangeColor = document.querySelector(".change-color");
btnChangeColor.addEventListener("click", (event) => {
  const spanColor = getRandomHexColor();
  document.body.style.backgroundColor = spanColor;

  spanColorName.textContent = spanColor;
});
