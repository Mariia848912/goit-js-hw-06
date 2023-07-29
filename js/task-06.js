const inputRef = document.querySelector("#validation-input");
const length = Number(inputRef.getAttribute("data-length"));

inputRef.addEventListener("blur", onInputBlur);

function onInputBlur(event) {
  // v1
  if (event.currentTarget.value.length === length) {
    inputRef.classList.add("valid");
    inputRef.classList.remove("invalid");
  } else {
    inputRef.classList.add("invalid");
    inputRef.classList.remove("valid");
  }

  // v2
  //   console.log(event.currentTarget.value.length);
  //   event.currentTarget.value.length === length
  //     ? inputRef.classList.add("valid")
  //     : inputRef.classList.add("invalid");
  //
}
