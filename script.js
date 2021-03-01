const num1 = document.querySelector(".num1"),
  num2 = document.querySelector(".num2"),
  display = document.querySelector(".display"),
  btn = document.querySelector(".btn");

btn.addEventListener("click", check);

let res1 = [Math.floor(Math.random() * 10)];
let res2 = [Math.floor(Math.random() * 10)];
num1.innerHTML = ++res1;
num2.innerHTML = ++res2;
let sum = res1 + res2;

function check() {
  if (display.value == sum) {
    display.style.backgroundColor = "green";
  } else {
    display.style.backgroundColor = "red";
  }
  window.location.reload();
}
