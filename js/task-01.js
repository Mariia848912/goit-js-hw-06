const itemRef = document.querySelectorAll(".item");

console.log("Number of categories:", itemRef.length);

const make = itemRef.forEach(function (element, index) {
  const itemTitleRef = document.querySelectorAll(".item h2");
  console.log("Category:", itemTitleRef[index].textContent);

  const itemValueRef = element.querySelectorAll(".item li");
  console.log("Elements:", itemValueRef.length);
});
