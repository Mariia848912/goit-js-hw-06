const refs = {
  button: document.querySelector(".change-color"),
  spanColor: document.querySelector(".color"),
};

refs.button.addEventListener("click", onBtnChangeColorClick);

function onBtnChangeColorClick() {
  let randomValue = getRandomHexColor();

  refs.spanColor.textContent = randomValue;
  document.body.style.backgroundColor = randomValue;
}
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
