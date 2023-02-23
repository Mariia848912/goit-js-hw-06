const refs = {
  input: document.querySelector("#name-input"),
  name: document.querySelector("#name-output"),
};

refs.input.addEventListener("input", onInputChange);

// function onInputChange(event) {
//   refs.name.textContent = event.currentTarget.value;
// }
function onInputChange() {
  console.log(refs.name);
  if (refs.input.value) {
    refs.name.textContent = refs.input.value;
  } else {
    refs.name.textContent = "Anonymous";
  }
}
