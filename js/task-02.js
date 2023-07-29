const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const listEl = document.querySelector("#ingredients");

const elements = ingredients.map((ingredient) => {
  const itemEL = document.createElement("li");
  itemEL.classList.add("item");
  itemEL.textContent = ingredient;

  return itemEL;
});

listEl.append(...elements);
