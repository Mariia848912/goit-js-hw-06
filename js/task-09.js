const refs = {
  button: document.querySelector(".change-color"),
  spanColor: document.querySelector(".color"),
};

refs.button.addEventListener("click", onBtnChangeColorClick);

function onBtnChangeColorClick() {
  // console.log(getRandomHexColor());
  let randomValue = getRandomHexColor();

  refs.spanColor.textContent = randomValue;
  document.body.style.backgroundColor = randomValue;
  // refs.spanColor.textContent = getRandomHexColor();
  // document.body.style.backgroundColor = getRandomHexColor();
}
//  refs.spanColor.style.backgroundColor = getRandomHexColor();
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
