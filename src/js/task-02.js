const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];
const list = document.querySelector(
  "#ingredients"
);
const liElArray = [];
ingredients.forEach((element) => {
  const liEl =
    document.createElement("li");
  liEl.classList.add("item");
  liEl.textContent = element;
  // console.log(liEl);
  liElArray.push(liEl);
});

list.prepend(...liElArray);
