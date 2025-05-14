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
    if(previousVal ===0){
        previousVal = parseFloat(currentVal);
        currentVal = "" ;
    } 
    else{
        currentRes = previousVal +  parseFloat(currentVal);
        previousVal = currentRes;
        display.textContent = currentRes;
        currentVal = "" ;
    }
    operand = "+";
}
plus.addEventListener("click", ()=> {
    check();
    add();
});

function subtract(){
    if(previousVal ===0){
        previousVal = parseFloat(currentVal);
        currentVal = "" ;
    } 
    else{
        currentRes = previousVal -  parseFloat(currentVal);
        previousVal = currentRes;
        display.textContent = currentRes;
        currentVal = "" ;
    }
   operand = "-";
}
minus.addEventListener("click", ()=> {
    check();
    subtract();
});

function times(){
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
    
   operand = "*";
}
multiply.addEventListener("click", ()=> {
    check();
    times();
});

function fraction(){
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
    operand = "/";
}
divide.addEventListener("click", ()=> {
    check();
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
    if(currentVal === ""&& previousVal === 0){
        currentVal = 0;
    }
   if(parseFloat(currentVal) === 0 && operand ==='*' ){
    console.log("multiplying by 0");
    console.log(`this is the previousVal ${previousVal} and the currentVal = ${currentVal} and the currentRes is= ${currentRes} `);
   }if(parseFloat(currentVal) === 0  && operand ==='/'){
    console.log("dividing by 0");
    console.log(`this is the previousVal ${previousVal} and the currentVal = ${currentVal} and the currentRes is= ${currentRes} `);
   }
   
};