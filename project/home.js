const input = document.getElementById("input1");
const inputValue = localStorage.getItem("username");
console.log(inputValue);
input.value = inputValue;

const bodyDocument = document.getElementById("body");

setInterval(() => {
  var randomColor = "#"+ Math.floor(Math.random()*16777215).toString(16);
  bodyDocument.style.backgroundColor = randomColor;
}, 3000);