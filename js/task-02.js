const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const listEl = document.querySelector("#ingredients");
console.log(listEl);

const elements = ingredients.map((ingredient) => {
  const itemEL = document.createElement("li");
  itemEL.classList.add("item");
  itemEL.textContent = ingredient;

  return itemEL;
});

// console.log(elements);

listEl.append(...elements);
