const button1 = document.querySelector(".num1");
const button2 = document.querySelector(".num2");
const button3 = document.querySelector(".num3");
const button4 = document.querySelector(".num4");
const button5 = document.querySelector(".num5");
const button6 = document.querySelector(".num6");
const button7 = document.querySelector(".num7");
const button8 = document.querySelector(".num8");
const button9 = document.querySelector(".num9");
const button0 = document.querySelector(".num0");
const point = document.querySelector(".point");

//here are the display and reset
const display = document.querySelector(".output");
const reset = document.querySelector(".reset");

//here are the operators
const plus = document.querySelector(".plus");
const minus = document.querySelector(".minus");
const multiply = document.querySelector(".multi");
const divide = document.querySelector(".divide");
const equals = document.querySelector(".equals");


let currentVal = "";
let previousVal = 0
let currentRes = 0;
let operand = "";
display.textContent = "";


reset.addEventListener("click", ()=>{
    currentVal = "";
    currentRes = 0;
    previousVal =0;
    operand = "";
    display.textContent = 0;
   
});

button1.addEventListener("click", ()=> {
   if(currentVal.length<=9){
    currentVal += 1;
    display.textContent = currentVal;
}
    
});
button2.addEventListener("click", ()=> {
    if(currentVal.length<=9){
    currentVal += 2;
    display.textContent = currentVal;
    } 
});
button3.addEventListener("click", ()=> {
    if(currentVal.length<=9){
    currentVal += 3;
    display.textContent = currentVal;
    }
});
button4.addEventListener("click", ()=> {
    if(currentVal.length<=9){
    currentVal += 4;
    display.textContent = currentVal;
    } 
});
button5.addEventListener("click", ()=> {
    if(currentVal.length<=9){
    currentVal += 5;
    display.textContent = currentVal;
    }
});
button6.addEventListener("click", ()=> {
    if(currentVal.length<=9){
    currentVal += 6;
    display.textContent = currentVal;
    }
});
button7.addEventListener("click", ()=> {
    if(currentVal.length<=9){
    currentVal += 7;
    display.textContent = currentVal;
    }
});
button8.addEventListener("click", ()=> {
    if(currentVal.length<=9){
    currentVal += 8;
    display.textContent = currentVal;
    }
});
button9.addEventListener("click", ()=> {
    if(currentVal.length <=9){
    currentVal += 9;
    display.textContent = currentVal;
    }
});
button0.addEventListener("click", ()=> {
    if(currentVal.length <=9){
    currentVal += 0;
    display.textContent = currentVal;
    }
});

point.addEventListener("click", ()=> {
    if(!currentVal.includes('.') && currentVal.length <=9 ){
    currentVal += ".";
    display.textContent = currentVal;
    }
});



function add(){
    operand = "+";
    const val = check();
    if(previousVal ===0 ){
        previousVal = val;
    } 
    else{
        currentRes = previousVal +  val;
        previousVal = currentRes;
        display.textContent = currentRes;
        
    }
    currentVal = "";
}
plus.addEventListener("click", ()=> {
    
    add();
});

function subtract(){
    operand = "-";
    const val = check();
    if(previousVal ===0){
        previousVal = val;
        
    } 
    else{
        currentRes = previousVal -  val;
        previousVal = currentRes;
        display.textContent = currentRes;
        
    }
   currentVal = "" ;
}
minus.addEventListener("click", ()=> {
    
    subtract();
});

function times(){
    operand = "*";
    if(currentVal !== ''){
        if(previousVal ===0){
            previousVal = parseFloat(currentVal);
            currentVal = "" ;
        } 
        else{
            currentRes = previousVal * parseFloat(currentVal);
            previousVal = currentRes;
            display.textContent = currentRes;
            currentVal = "" ;
        }
    }
    check();
   
}
multiply.addEventListener("click", ()=> {
    times();
});

function fraction(){
    operand = "/";
    if(currentVal !== ''){
        if(previousVal ===0){
            previousVal = parseFloat(currentVal);
            currentVal = "" ;
        } 
        else{
            currentRes = previousVal / parseFloat(currentVal);
            previousVal = currentRes;
            display.textContent = currentRes;
            currentVal = "" ;
        }
    }
     check();
}
divide.addEventListener("click", ()=> {
    fraction();
    
});

equals.addEventListener("click", ()=> { 
    check();
     if(operand === "+"){
        add();
     } 
     if(operand === "-"){
        subtract();
     }
     if(operand === "*"){
        times();
     }
     if(operand === "/"){
        fraction();
     }
     
});

function  check(){
    if(currentVal === "" && previousVal === 0){
        currentVal = "0";
    } 
    if(currentRes > 99999999999 || previousVal >= 99999999999){
        currentRes= 0;
        previousVal = 0;
        display.textContent = "Too Large"
    }
    return currentVal === "" ? 0 : parseFloat(currentVal);
   
}