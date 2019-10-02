var allElement = document.getElementsByClassName("name-button");

function makeOperation(operationCode) {
  if (operationCode === "+") {
    window.alert("+");
  }
  else if (operationCode === "-"){
      window.alert("-");
  }
}

function onOperationButtonClick(eventObject) {
  var clickedElement = eventObject.currentTarget;
  var operation = clickedElement.innerHTML;
  makeOperation(operation);
}
for (let index = 0; index < allElement.length; index++) {
  var button = allElement[index];
  button.addEventListener("click", onOperationButtonClick);
}


