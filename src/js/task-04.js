const btnDecrementEl = document.querySelector('button[data-action="decrement"]');
const btnIncrementEl = document.querySelector('button[data-action="increment"]');
const counterValue = document.querySelector("#value")

const button = document.querySelector(".my-button");



const handleClick = () => {
  console.log("Button was clicked");
};

button.addEventListener("click", handleClick);