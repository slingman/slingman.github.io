var header = document.querySelector("header");

console.log(header);

header .addEventListener("click", function(event) {
  this.classList.toggle = ("purple");
  this.innerHTML="Steve";
})
