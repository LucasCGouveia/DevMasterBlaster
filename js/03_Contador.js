const display = document.getElementById("display");
let number = document.getElementById("display").innerText;
number = parseInt(number);

const decrease = document.getElementById("decrease");
const reset = document.getElementById("reset");

function Incrementar(){
  var incrementar = document.getElementById("display").innerHTML;
  incrementar =+ 1;
  document.getElementById("display").innerHTML = incrementar;
}

// const increase = document.getElementById("increase");
// increase.addEventListener("click", () => {
//   number += 1;
//   display.textContent = `${number}`;
// });

decrease.addEventListener("click", () => {
  number -= 1;
  display.textContent = `${number}`;
});

reset.addEventListener("click", () => {
  number = 0;
  display.textContent = `${number}`;
});
