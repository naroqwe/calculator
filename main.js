const buttons = document.querySelectorAll(".number");
const dot = document.querySelector(".dot");
const equalSign = document.querySelector(".equals");
const signOperator = document.querySelectorAll(".sign");
const result = document.querySelector(".result");
const clearButton = document.querySelector(".clear");
const deleteButton = document.querySelector(".delete");

let firstVal;
let secondVal;
let lastVal;
let mathSign;

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    addToDisplay(button.textContent);
    lastVal = button.textContent;
    console.log(lastVal);
  });
});

signOperator.forEach((sign) => {
  sign.addEventListener("click", () => {
    // console.log(sign.textContent);
    addToDisplay(sign.textContent);
    mathSign = sign.textContent;
    console.log(mathSign);
  });
});

function addToDisplay(number) {
  let numberOnScreen = result.innerHTML;
  if (numberOnScreen.length > 13) {
    result.innerHTML = null;
  } else {
    result.innerHTML += parseInt(number);
    console.log(typeof number);
  }
  clearButton.addEventListener("click", () => {
    result.innerHTML = null;
  });
}
equalSign.addEventListener("click", function () {});
