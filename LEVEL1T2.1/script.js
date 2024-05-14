const button = document.getElementById("myButton");

button.addEventListener("click", function() {
  if (this.style.backgroundColor === "red") {
    this.style.backgroundColor = "blue";
  } else {
    this.style.backgroundColor = "red";
  }
});
