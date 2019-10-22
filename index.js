"use strict";
let allElement = document.getElementsByClassName("name-button");
let result = document.getElementById("return-result");
let numbers = "";
let listOperations = [];
let input = "";

function makeOperation(operationCode) {
  if (Number.isFinite(Number(operationCode))) {
    numbers = numbers + operationCode;
    input = input + operationCode;
    result.value = input;
  } else if (operationCode === "=") {
    listOperations.push(parseFloat(numbers));
    operationMultiplayAndDevide();
    operationPlusAndMinus();
    result.value = input;
    clean();
  } else if (operationCode !== "C") {
    listOperations.push(parseFloat(numbers));
    input = input + operationCode;
    numbers = "";
    listOperations.push(operationCode);
    result.value = input;
  } else {
    clean();
    result.value = input;
  }
}

function clean() {
  input = "";
  numbers = "";
  listOperations = [];
}
function operationMultiplayAndDevide() {
  for (let i = 0; i < listOperations.length; i++) {
    if (!Number.isFinite(Number(listOperations[i]))) {
      if (listOperations[i] === "*") {
        input = (listOperations[i - 1] * listOperations[i + 1]).toFixed(8);
        listOperations[i + 1] = parseFloat(input);
        listOperations.splice(i - 1, 2);
        i = 0;
      }
      if (listOperations[i] === "/") {
        input = (listOperations[i - 1] / listOperations[i + 1]).toFixed(8);
        listOperations[i + 1] = parseFloat(input);
        listOperations.splice(i - 1, 2);
        i = 0;
      }
    }
    input = Number(input);
  }
}
function operationPlusAndMinus() {
  for (let i = 0; i < listOperations.length; i++) {
    if (!Number.isFinite(Number(listOperations[i]))) {
      if (listOperations[i] === "+") {
        input = (listOperations[i - 1] + listOperations[i + 1]).toFixed(8);
        listOperations[i + 1] = parseFloat(input);
      }
      if (listOperations[i] === "-") {
        input = (listOperations[i - 1] - listOperations[i + 1]).toFixed(8);
        listOperations[i + 1] = parseFloat(input);
      }
    }
    input = Number(input);
  }
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
