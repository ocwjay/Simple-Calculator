//Adding event listeners to the buttons
document.getElementById("btnOne").addEventListener("click", btnOneFunc);
document.getElementById("btnTwo").addEventListener("click", btnTwoFunc);
document.getElementById("btnThree").addEventListener("click", btnThreeFunc);
document.getElementById("btnFour").addEventListener("click", btnFourFunc);
document.getElementById("btnFive").addEventListener("click", btnFiveFunc);
document.getElementById("btnSix").addEventListener("click", btnSixFunc);
document.getElementById("btnSeven").addEventListener("click", btnSevenFunc);
document.getElementById("btnEight").addEventListener("click", btnEightFunc);
document.getElementById("btnNine").addEventListener("click", btnNineFunc);
document.getElementById("btnZero").addEventListener("click", btnZeroFunc);
document.getElementById("btnDecimal").addEventListener("click", btnDecimalFunc);
document.getElementById("btnPlus").addEventListener("click", btnPlusFunc);
document.getElementById("btnMinus").addEventListener("click", btnMinusFunc);
document.getElementById("btnMultiply").addEventListener("click", btnMultiplyFunc);
document.getElementById("btnDivide").addEventListener("click", btnDivideFunc);
document.getElementById("btnBack").addEventListener("click", btnBackFunc);
document.getElementById("btnClear").addEventListener("click", btnClearFunc);
document.getElementById("btnEqual").addEventListener("click", btnEqualFunc);

//Global Variables
var together = "";

//Creating the functions for each button. Will elaborate if needed.
function btnOneFunc(){
  together = together + "1";
  document.getElementById("calcText").innerHTML = together;
}
function btnTwoFunc(){
  together = together + "2";
  document.getElementById("calcText").innerHTML = together;
}
function btnThreeFunc(){
  together = together + "3";
  document.getElementById("calcText").innerHTML = together;
}
function btnFourFunc(){
  together = together + "4";
  document.getElementById("calcText").innerHTML = together;
}
function btnFiveFunc(){
  together = together + "5";
  document.getElementById("calcText").innerHTML = together;
}
function btnSixFunc(){
  together = together + "6";
  document.getElementById("calcText").innerHTML = together;
}
function btnSevenFunc(){
  together = together + "7";
  document.getElementById("calcText").innerHTML = together;
}
function btnEightFunc(){
  together = together + "8";
  document.getElementById("calcText").innerHTML = together;
}
function btnNineFunc(){
  together = together + "9";
  document.getElementById("calcText").innerHTML = together;
}
function btnZeroFunc(){
  together = together + "0";
  document.getElementById("calcText").innerHTML = together;
}
function btnDecimalFunc(){
  together = together + ".";
  document.getElementById("calcText").innerHTML = together;
}
function btnPlusFunc(){
  together = together + "+";
  document.getElementById("calcText").innerHTML = together;
}
function btnMinusFunc(){
  together = together + "-";
  document.getElementById("calcText").innerHTML = together;
}
function btnMultiplyFunc(){
  together = together + "*";
  document.getElementById("calcText").innerHTML = together;
}
function btnDivideFunc(){
  together = together + "/";
  document.getElementById("calcText").innerHTML = together;
}
function btnBackFunc(){
  var undoLength = together.length - 1;
  var undo = together.substr(0, undoLength);
  together = undo;
  document.getElementById("calcText").innerHTML = together;
}
function btnClearFunc(){
  together = "";
  document.getElementById("calcText").innerHTML = together;
}
function btnEqualFunc(){
  //I will continue to look for a way around eval. It'll do for now.
  var result = eval(together);
  together = result;
  document.getElementById("calcText").innerHTML = together;
}
