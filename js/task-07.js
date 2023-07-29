const inputRef = document.querySelector("#font-size-control");
const textRef = document.querySelector("#text");
inputRef.addEventListener("input", onSpanSizeInput);

textRef.style.fontSize = inputRef.value + "px";

function onSpanSizeInput() {
  textRef.style.fontSize = `${inputRef.value}px`;
}
