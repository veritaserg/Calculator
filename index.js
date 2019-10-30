"use strict";
let allElement = document.getElementsByClassName("name-button");
let result = document.getElementById("return-result");
let numbers = "";
let listOperations = [];
let input = "";
let point = false;

function makeOperation(e) {
  if (isFinite(e) || e == ".") {
    addNumber(e);
  } else if (e == "=") {
    operationMultiplayAndDevide();
    operationPlusAndMinus();
    result.value = input;
    listOperations = [];
    listOperations.push(+input);
    input = String(input);
  } else if (e == "+" || e == "-" || e == "*" || e == "/") {
    input = input + e;
    numbers = "";
    listOperations.push(e);
    result.value = input;
  } else if (e == "⇐") {
    backspace();
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
    if (listOperations[i] == "*") {
      input = +(listOperations[i - 1] * listOperations[i + 1]).toFixed(14);
      listOperations[i + 1] = input;
      listOperations.splice(i - 1, 2);
      i = 0;
    }
    if (listOperations[i] == "/") {
      input = +(listOperations[i - 1] / listOperations[i + 1]).toFixed(14);
      listOperations[i + 1] = input;
      listOperations.splice(i - 1, 2);
      i = 0;
    }
  }
}
function operationPlusAndMinus() {
  listOperations.forEach((element, i, lists) => {
    if (element == "+") {
      input = +(lists[i - 1] + lists[i + 1]).toFixed(14);
      lists[i + 1] = input;
    }
    if (element == "-") {
      input = +(lists[i - 1] - lists[i + 1]).toFixed(14);
      lists[i + 1] = input;
    }
  });
}
function addNumber(e) {
  if (
    listOperations.length > 0 &&
    isFinite(listOperations[listOperations.length - 1])
  ) {
    if (!numbers.indexOf(".") || numbers == "") {
      numbers = String(listOperations[listOperations.length - 1]);
      if (point) {
        numbers = numbers + ".";
        point = false;
      }
    }
    listOperations.splice(listOperations.length - 1, 1);
  }
  numbers = numbers + e;
  input = input + e;
  result.value = input;
  listOperations.push(+numbers);
}
function backspace() {
  if (point) {
    point = false;
    input = input.slice(0, input.length - 1);
    result.value = input;
    return;
  }
  if (listOperations[listOperations.length - 1].length == 1) {
    listOperations.splice(listOperations.length - 1, 1);
  } else if (isFinite(listOperations[listOperations.length - 1])) {
    let number = String(listOperations[listOperations.length - 1]);

    if (number.length == 1) {
      listOperations.splice(listOperations.length - 1, 1);
    } else {
      number = number.slice(0, number.length - 1);
      if (number.endsWith(".")) {
        point = true;
      }
      listOperations[listOperations.length - 1] = +number;
    }
  }
  input = input.slice(0, input.length - 1);
  result.value = input;
  numbers = "";
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
