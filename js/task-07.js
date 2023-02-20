const inputRef = document.querySelector("#font-size-control");
const textRef = document.querySelector("#text");
inputRef.addEventListener("input", onSpanSizeInput);

function onSpanSizeInput() {
  console.log(inputRef.value);
  textRef.style.fontSize = `${inputRef.value}px`;

  //   console.log(textRef.style.fontSize);
}
