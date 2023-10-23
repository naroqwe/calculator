const buttons = document.querySelectorAll(".number");
const dot = document.querySelector(".dot");
const equalSign = document.querySelector(".equals");
const signOperator = document.querySelectorAll(".sign");

const firstNumber = document.querySelector(".firstNumber");
const secondNumber = document.querySelector(".secondNumber");
const mathSign = document.querySelector(".mathSign");
const clearButton = document.querySelector(".clear");
const deleteButton = document.querySelector(".delete");

let result = "";

function addToDisplay() {
  firstNumber.innerHTML += this.textContent;
}

function asd() {
  if (firstNumber.innerHTML === "") {
    return;
  }

  if (mathSign.innerHTML !== "") {
    operate();
  }

  secondNumber.innerHTML = firstNumber.innerHTML;
  mathSign.innerHTML += this.textContent;
  firstNumber.innerHTML = "";
}

function operate() {
  let a = Number(firstNumber.innerHTML);
  let b = Number(secondNumber.innerHTML);
  let operatorSign = mathSign.innerHTML;

  switch (operatorSign) {
    case "+":
      result = a + b;
      break;
    case "-":
      result = a - b;
      break;
    case "/":
      result = a / b;
      break;
    case "x":
      result = a * b;
      break;
  }
  firstNumber.innerHTML = result;
  secondNumber.innerHTML = "";
  mathSign.innerHTML = "";
}

function clearScreen() {
  firstNumber.innerHTML = "";
  secondNumber.innerHTML = "";
  mathSign.innerHTML = "";
  result.innerHTML = "";
}

buttons.forEach((button) => {
  button.addEventListener("click", addToDisplay);
});

signOperator.forEach((sign) => {
  sign.addEventListener("click", asd);
});

equalSign.addEventListener("click", operate);

clearButton.addEventListener("click", clearScreen);
