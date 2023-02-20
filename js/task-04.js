const refs = {
  btnDecrement: document.querySelector('[data-action="decrement"]'),
  btnIncrement: document.querySelector('[data-action="increment"]'),
  value: document.querySelector("#value"),
};
// console.log((refs.value.textCont/ent = 1));
refs.btnDecrement.addEventListener("click", onButtonDecrementClick);

let counterValue = 0;

function onButtonDecrementClick() {
  counterValue -= 1;
  refs.value.textContent = counterValue;
}

refs.btnIncrement.addEventListener("click", onButtonIncrementClick);
function onButtonIncrementClick() {
  counterValue += 1;
  refs.value.textContent = counterValue;
}
