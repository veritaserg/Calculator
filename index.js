"use strict";
let allElement = document.getElementsByClassName("name-button");
let result = document.getElementById("return-result");
let numbers = "";
let listOperations = [];

let input = "";
let res;

function makeOperation(operationCode) {
  if (Number.isFinite(Number(operationCode))) {
    numbers = numbers + operationCode;
    input = input + operationCode;
    result.value = input;
  } else {
    listOperations.push(Number(numbers));
    input = input + operationCode;
    numbers = "";
    listOperations.push(operationCode);
    result.value = input;
  }

  // operation = operation + operationCode;
  // makeResult(operationCode);
  // if (operationCode === "=") {
  //   operation = Number(operation);
  // }
  // result.value = operation;
}

function makeResult(operationCode) {
  res = Number(operationCode);
}

function onOperationButtonClick(eventObject) {
  let clickedElement = eventObject.currentTarget;
  let operation = clickedElement.innerHTML;

  makeOperation(operation);
}
for (let index = 0; index < allElement.length; index++) {
  let button = allElement[index];
  button.addEventListener("click", onOperationButtonClick);
}
