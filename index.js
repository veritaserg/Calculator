"use strict";
let allElement = document.getElementsByClassName("name-button");
let result = document.getElementById("return-result");
let operation = 0;
let res;

function makeOperation(operationCode) {
  operation = operation + operationCode;
  makeResult(operationCode);
  if (operationCode === "=") {
    operation = Number(operation);
  }
  result.value = operation;
}
function makeResult(operationCode) {
  res = Number(operationCode)

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



