const inputRef = document.querySelector("#validation-input");
const length = Number(inputRef.getAttribute("data-length"));
// console.log(length);

inputRef.addEventListener("blur", onInputBlur);

function onInputBlur(event) {
  // v1
  //   if (event.currentTarget.value.length === length) {
  //     inputRef.classList.add("valid");
  //   } else {
  //     inputRef.classList.add("invalid");
  //   }

  //
  // v2
  event.currentTarget.value.length === length
    ? inputRef.classList.add("valid")
    : inputRef.classList.add("invalid");

  // Если написать сначало правильное кол-во символов,
  // а потом не корректоное, а потом корректное, тo, зеленым border не загорается.
  // Подскажите, пожалуйста, это можно пофиксить? и целесообразно ли это исправлять?
}
