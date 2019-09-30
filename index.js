var buttonPlus = document.getElementById("buttonPlus");
var buttonMinuss = document.getElementById("buttonMinus");
var buttonMultiply = document.getElementById("buttonMultiply");
var buttonDevide = document.getElementById("buttonDevide");
var numberOne = document.getElementById("numberOne");
var numberTwo = document.getElementById("numberTwo");




function onButtonPlusClick(){
    var one = Number(numberOne.value);
    var two = Number(numberTwo.value);
    
console.log(one + two);
}
function onButtonMinusClick(){
console.log("onButtonMinusClick")
}
function onButtonMultiplyClick(){
console.log("onButtonMultiplyClick")
}
function onButtonDevideClick(){
console.log("onButtonDevideClick")
}

buttonPlus.addEventListener("click",onButtonPlusClick);

buttonMinuss.addEventListener("click",onButtonMinusClick);

buttonMultiply.addEventListener("click",onButtonMultiplyClick);

buttonDevide.addEventListener("click",onButtonDevideClick);



