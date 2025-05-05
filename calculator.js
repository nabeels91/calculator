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

//here are the display and reset
const display = document.querySelector(".output");
const reset = document.querySelector(".reset");

//here are the operators
const plus = document.querySelector(".plus");

let currentVal = "";

reset.addEventListener("click", ()=>{
    currentVal = "";
    display.textContent = "";
});

button1.addEventListener("click", ()=> {
    currentVal += "1";
    display.textContent = currentVal;
    
});
button2.addEventListener("click", ()=> {
    currentVal += "2";
    display.textContent = currentVal;
    
});
button3.addEventListener("click", ()=> {
    currentVal += "3";
    display.textContent = currentVal;
    
});
button4.addEventListener("click", ()=> {
    currentVal += "4";
    display.textContent = currentVal;
    
});
button5.addEventListener("click", ()=> {
    currentVal += "5";
    display.textContent = currentVal;
    
});
button6.addEventListener("click", ()=> {
    currentVal += "6";
    display.textContent = currentVal;
    
});
button7.addEventListener("click", ()=> {
    currentVal += "7";
    display.textContent = currentVal;
    
});
button8.addEventListener("click", ()=> {
    currentVal += "8";
    display.textContent = currentVal;
    
});
button9.addEventListener("click", ()=> {
    currentVal += "9";
    display.textContent = currentVal;
    
});
button0.addEventListener("click", ()=> {
    currentVal += "0";
    display.textContent = currentVal;
    
});


function sum(val){
    val = parseFloat(currentVal);
    
    return val+= val;
}

plus.addEventListener("click",  (val) =>{
    val = parseFloat(currentVal);
    return val+= val;

});
