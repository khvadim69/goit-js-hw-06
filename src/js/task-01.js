const itemEl =
  document.querySelectorAll(".item");
console.log(itemEl);
console.log(
  "Number of categories:",
  itemEl.length
);
itemEl.forEach((element) => {
  const titleEl =
    element.firstElementChild;
  const lengthLiEl =
    element.lastElementChild.children
      .length;
  console.log(
    "Category:",
    titleEl.textContent
  );
  console.log("Elements:", lengthLiEl);
});
