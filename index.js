let allElement = document.getElementsByClassName("name-button");
let result = document.getElementById("return-result")

function makeOperation(operationCode) {
  result.value = operationCode;
  
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
