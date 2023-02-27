const ref = {
  decrement: document.querySelector('[data-action="decrement"]'),
  increment: document.querySelector('[data-action="increment"]'),
  span: document.querySelector("#value"),
};
let counterValue = 0;

ref.decrement.addEventListener("click", () => {
  counterValue = parseInt(ref.span.textContent);
  ref.span.textContent = counterValue - 1;
});
ref.increment.addEventListener("click", () => {
  counterValue = parseInt(ref.span.textContent);
  ref.span.textContent = counterValue + 1;
});
