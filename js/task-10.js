const refs = {
  boxСollection: document.querySelector("#boxes"),
  btnCreate: document.querySelector("[data-create]"),
  btnDestroy: document.querySelector("[data-destroy]"),
  numberCreated: document.querySelector("input"),
};

let createdBoxes = [];

function createBoxes(amount) {
  for (let index = 0; index < amount; index++) {
    const element = document.createElement("div");
    let basicSize = 30;
    let size = basicSize + index * 10;
    element.style.width = `${size}px`;
    element.style.height = `${size}px`;
    element.style.backgroundColor = getRandomHexColor();

    createdBoxes.push(element);
  }
  refs.boxСollection.append(...createdBoxes);
}

function getAmount() {
  const amount = Number(refs.numberCreated.value);

  createBoxes(amount);
}
getAmount();

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
