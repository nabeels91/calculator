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
// its probobly better that i add values as an object, to keep the signs 
//under a key "sign" and the value inputted in Value.
let valArray = [];

reset.addEventListener("click", ()=>{
    currentVal = "";
    display.textContent = "";
    valArray = [];
});

button1.addEventListener("click", ()=> {
   if(currentVal.length<=9){
    currentVal += "1";
    display.textContent = currentVal;
}
    
});
button2.addEventListener("click", ()=> {
    if(currentVal.length<=9){
    currentVal += "2";
    display.textContent = currentVal;
    }
    
});
button3.addEventListener("click", ()=> {
    if(currentVal.length<=9){
    currentVal += "3";
    display.textContent = currentVal;
    }
    
});
button4.addEventListener("click", ()=> {
    if(currentVal.length<=9){
    currentVal += "4";
    display.textContent = currentVal;
    } 
});
button5.addEventListener("click", ()=> {
    if(currentVal.length<=9){
    currentVal += "5";
    display.textContent = currentVal;
    }
});
button6.addEventListener("click", ()=> {
    if(currentVal.length<=9){
    currentVal += "6";
    display.textContent = currentVal;
    }
    
});
button7.addEventListener("click", ()=> {
    if(currentVal.length<=9){
    currentVal += "7";
    display.textContent = currentVal;
    }
    
});
button8.addEventListener("click", ()=> {
    if(currentVal.length<=9){
    currentVal += "8";
    display.textContent = currentVal;
    }
    
});
button9.addEventListener("click", ()=> {
    if(currentVal.length<=9){
    currentVal += "9";
    display.textContent = currentVal;
    }
    
});
button0.addEventListener("click", ()=> {
    if(currentVal.length<=9){
    currentVal += "0";
    display.textContent = currentVal;
    }
});

point.addEventListener("click", ()=> {
    if(currentVal.length<=9 ){
    currentVal += ".";
    display.textContent = currentVal;
    }
    
});

// i want to to add to valArray when the operators are selected.
// this will first parse the value then add it to the array.
// when the ac is selected it clears out the array.
// when i press equals or any operator the value continues to work on the 
// the array. 


function sum(arrs){
    if(arrs.length <=0){
        return 0;
    }
    
};

    

plus.addEventListener("click", ()=> {
    valArray.push("+");
    if(currentVal === ""){  
        valArray.push(0);
    }
    else {
        
        valArray.push(parseFloat(currentVal));
    }
    
    currentVal = "";
    display.textContent = "";
    
});

