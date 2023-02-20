const formRef = document.querySelector(".login-form");

formRef.addEventListener("submit", onFormSubmit);

function onFormSubmit(event) {
  event.preventDefault();
  const email = event.currentTarget.elements.email.value;
  const password = event.currentTarget.elements.password.value;

  if (!email || !password) {
    alert("Все поля должны быть заполнены");
  } else {
    const formData = {
      email,
      password,
    };
    console.log(formData);
    formRef.reset();
  }
}
