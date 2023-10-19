const buttons = document.querySelectorAll(".number");
const dot = document.querySelector(".dot");
const equalSign = document.querySelector(".equals");
const signOperator = document.querySelectorAll(".sign");
const result = document.querySelector(".result");
const clearButton = document.querySelector(".clear");
const deleteButton = document.querySelector(".delete");

let firstVal;
let secondVal;
let mathSign;

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    addToDisplay(button.textContent);
    firstVal = Number(result.innerHTML);
    console.log(firstVal);
  });
});

signOperator.forEach((sign) => {
  sign.addEventListener("click", () => {});
});

function addToDisplay(number) {
  result.innerHTML += number;
}

//push to values array, then extract them and calculate
