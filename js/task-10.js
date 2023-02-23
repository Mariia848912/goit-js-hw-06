const refs = {
  boxСollection: document.querySelector("#boxes"),
  btnCreate: document.querySelector("[data-create]"),
  btnDestroy: document.querySelector("[data-destroy]"),
  numberCreated: document.querySelector("input"),
};
const numberCreated = document.querySelector("#controls input");
function getAmount() {
  // let amount = Number(refs.numberCreated.value);
  let amount = Number(numberCreated.value);

  console.log(amount);
}
getAmount();
// refs.textCreated.addEventListener("input", createBoxes);
// let amount = refs.textCreated.value;
// function createBoxes() {
//   const child = document.createElement("div");
//   console.log(child);
// }
// Создай функцию createBoxes(amount), которая принимает один параметр
//   - число.Функция создает столько < div >, сколько указано в amount
//    и добавляет их в div#boxes.

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
