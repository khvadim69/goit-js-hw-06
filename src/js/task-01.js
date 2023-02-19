const itemEl = document.querySelectorAll(".item");
console.log(itemEl);
console.log("Number of categories:", itemEl.length);
itemEl.forEach((element) => {
  const titleEl = element.firstElementChild;
  const lengthLiEl = element.lastElementChild.children.length;
  console.log("Category:", titleEl.textContent);
  console.log("Elements:", lengthLiEl);
});
// const categoriesRef = document.querySelectorAll('li.item');

// const numberOfCategoriesRef = categoriesRef.length;

// console.log(`Number of categories: ${numberOfCategoriesRef}`);

// const categoryRef = categoriesRef.forEach(el => {
//     const category = el.firstElementChild.textContent;
//     const elements = el.lastElementChild.children.length;
//     console.log(`Category: ${category} 
// Elements: ${elements}`)
// });