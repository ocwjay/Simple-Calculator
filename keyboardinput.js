//Event Listenerssss
document.body.addEventListener("keydown", keyboardIn);

function keyboardIn(){
  //Assigning the Unicode character code to a variable so we can check it
  var keyPressed = event.which;
  //Now we check which key was pressed, and only do things if one of the right keys were pressed. Yay for switch cases.
  switch(keyPressed){
    case 49:
      btnOneFunc();
      break;
    case 50:
      btnTwoFunc();
      break;
    case 51:
      btnThreeFunc();
      break;
    case 52:
      btnFourFunc();
      break;
    case 53:
      btnFiveFunc();
      break;
    case 54:
      btnSixFunc();
      break;
    case 55:
      btnSevenFunc();
      break;
    case 56:
      //Checking to see if shift was pressed for multiply, or if it was just eight
      if(event.shiftKey){
        btnMultiplyFunc();
        break;
      }
      else{
        btnEightFunc();
        break;
      }
      btnEightFunc();
      break;
    case 57:
      btnNineFunc();
      break;
    case 48:
      btnZeroFunc();
      break;
    case 8:
      btnBackFunc();
      break;
    case 46:
      btnClearFunc();
      break;
    case 187:
      //Gotta make sure shift was pressed. Wouldn't matter, but multiply requires it soooo might as well keep it consistent
      if(event.shiftKey){
        btnPlusFunc();
        break;
      }
      else{
        break;
      }
    case 189:
      btnMinusFunc();
      break;
    case 191:
      btnDivideFunc();
      break;
    case 190:
      btnDecimalFunc();
      break;
    case 13:
      btnEqualFunc();
  }
}