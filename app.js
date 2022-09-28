const input = document.querySelector(".input");
const input2 = document.querySelector(".input2");
const btnContainer = document.querySelector(".button-container");

let num1;
let num2;
let operator;

let num1Done = false;
let floating = false;

btnContainer.addEventListener("click", (e) => {
  if (e.target.id == "n0") {
    input.innerText += 0;
  } else if (e.target.id == "n1") {
    input.innerText += 1;
  } else if (e.target.id == "n2") {
    input.innerText += 2;
  } else if (e.target.id == "n3") {
    input.innerText += 3;
  } else if (e.target.id == "n4") {
    input.innerText += 4;
  } else if (e.target.id == "n5") {
    input.innerText += 5;
  } else if (e.target.id == "n6") {
    input.innerText += 6;
  } else if (e.target.id == "n7") {
    input.innerText += 7;
  } else if (e.target.id == "n8") {
    input.innerText += 8;
  } else if (e.target.id == "n9") {
    input.innerText += 9;
  } else if (e.target.id == "division" && !num1Done && input.innerText) {
    input2.innerText += input.innerText + "÷";
    input.innerText = "";
    num1 = Number(input.innerText);
    operator = "division";
    num1Done = true;
  } else if (e.target.id == "multi" && !num1Done && input.innerText) {
    input2.innerText += input.innerText + "x";
    input.innerText = "";
    num1 = Number(input.innerText);
    operator = "multi";
    num1Done = true;
  } else if (e.target.id == "sub" && !num1Done && input.innerText) {
    input2.innerText += input.innerText + "-";
    input.innerText = "";
    num1 = Number(input.innerText);
    operator = "sub";
    num1Done = true;
  } else if (e.target.id == "add" && !num1Done && input.innerText) {
    input2.innerText += input.innerText + "+";
    input.innerText = "";
    num1 = Number(input.innerText);
    operator = "add";
    num1Done = true;
  } else if (e.target.id == "dec" && !floating) {
    input.innerText += ".";
  } else if (e.target.id == "equal" && num1Done && input.innerText) {
    num2 = Number(input.innerText);
    num1Done = false;
    input2.innerText = "";
    switch (operator) {
      case "division":
        input.innerText = num1 / num2;
        break;
      case "add":
        input.innerText = num1 + num2;
        break;
      case "sub":
        input.innerText = num1 - num2;
        break;
      case "multi":
        input.innerText = num1 * num2;
        break;
    }
  } else if (e.target.id == "per" && input.innerText) {
    input.innerText = Number(input.innerText) / 100;
  }
});
