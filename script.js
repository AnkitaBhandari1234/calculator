let inputBox = document.getElementById("inputbox");

let num1 = "";
let num2 = "";
let operator = null;

// function for operands
const clickMe = (a) => {
  if (operator == null) {
    num1 += a;
    
    inputBox.value = num1;
    
    
  } else {
    num2 += a;
    
    inputBox.value += a;
  }

  //   console.log(a);
};

// function for operator
const clickOper = (b) => {
  operator = b;
  inputBox.value += b;
  
  
  // console.log(b);
};

// function for output
const result = () => {
  let num;
  inputBox.value = " ";

  switch (operator) {
    case "+":
      num=Number(num1)+Number(num2);
      inputBox.value = num;
      
      break;

    case "-":
      num=num1-num2;
      inputBox.value =num;
      break;

    case "*":
      num=num1*num2;
      inputBox.value =num;
      break;
    case "/":
      num=num1/num2;
      inputBox.value = num;;
      break;
    case "%":
      num=num1%num2;
      inputBox.value = num;
    default:
      console.log("invalid entry");
      break;
  }

  // to perform more than one operand
  num1=num;
  num2=' ';
  operator=' ';


};


// function for reset

const reset=()=>{

  inputBox.value=0;
  num1='';
  num2='';
  operator=null;

 
  
}



