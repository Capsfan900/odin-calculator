//Global scope variables
let btnInputCollection = [];
const bufferDisplay = [];


//DOM references
const buffer = document.getElementById("buffer");
const calcDisplay = document.getElementById("currentOperation");
const button0 = document.getElementById("button0");
const button1 = document.getElementById("button1");
const button2 = document.getElementById("button2");
const button3 = document.getElementById("button3");
const button4 = document.getElementById("button4");
const button5 = document.getElementById("button5");
const button6 = document.getElementById("button6");
const button7 = document.getElementById("button7");
const button8 = document.getElementById("button8");
const button9 = document.getElementById("button9");
const button10 = document.getElementById("button10");
const button11 = document.getElementById("button11");
const button12 = document.getElementById("button12");
const button13 = document.getElementById("button13");
const button14 = document.getElementById("button14");
const button15 = document.getElementById("button15");
const buttonEval = document.getElementById("buttonEval");
const buttonDel = document.getElementById("buttonDel");
//Main content 


buttonEval.addEventListener("click", function evalu() {
    let myStack = btnInputCollection.split(' ');
    console.log(myStack);
    const operation = myStack[1];
    const a = parseInt(myStack[0]);
    const b = parseInt(myStack[2]);
    let calculatedResult = calculate(operation, a, b);
    console.log(calculatedResult);
    btnInputCollection = "";
    calcDisplay.textContent = calculatedResult;
    btnInputCollection = "";
    myStack.splice(0, 3);
    let update = calculatedResult.toString();
    buffer.textContent = update;
    calcDisplay.textContent = " ";
    console.log(update);
    console.log(btnInputCollection);
    console.log(myStack);
});


//add decimal support and logs for extra credit
function calculate(operation, a, b) {
    switch (operation) {
        case '+':
            let result = a + b;
            return a + b;
        case '-':
            return a - b
        case 'x':
            return a * b;
        case '%':
            return a / b;
        case '*':
            return Math.pow(a, b);
        default:
            return 'Invalid operation.';
    }
}







//add fancy shit eventually



//Event Listeners (i know this is probably a mess im learning lmao)

//start of number buttons
button0.addEventListener("click", function () {
    const buttonNum = "0";
    btnInputCollection += buttonNum
    console.log(buttonNum);
    calcDisplay.textContent = btnInputCollection;
});

button1.addEventListener("click", function () {
    const buttonNum = "1";
    btnInputCollection += buttonNum
    console.log(buttonNum);
    calcDisplay.textContent = btnInputCollection;
});
button2.addEventListener("click", function () {
    const buttonNum = "2";
    btnInputCollection += buttonNum
    console.log(buttonNum);
    calcDisplay.textContent = btnInputCollection;
});

button3.addEventListener("click", function () {
    const buttonNum = "3";
    btnInputCollection += buttonNum
    console.log(buttonNum);
    calcDisplay.textContent = btnInputCollection;
});


button4.addEventListener("click", function () {
    const buttonNum = "4";
    btnInputCollection += buttonNum
    console.log(buttonNum);
    calcDisplay.textContent = btnInputCollection;
});

button5.addEventListener("click", function () {
    const buttonNum = "5";
    btnInputCollection += buttonNum
    console.log(buttonNum);
    calcDisplay.textContent = btnInputCollection;
});


button6.addEventListener("click", function () {
    const buttonNum = "6";
    btnInputCollection += buttonNum
    console.log(buttonNum);
    calcDisplay.textContent = btnInputCollection;
});

button7.addEventListener("click", function () {
    const buttonNum = "7";
    btnInputCollection += buttonNum
    console.log(buttonNum);
    calcDisplay.textContent = btnInputCollection;
});


button8.addEventListener("click", function () {
    const buttonNum = "8";
    btnInputCollection += buttonNum
    console.log(buttonNum);
    calcDisplay.textContent = btnInputCollection;
});

button9.addEventListener("click", function () {
    const buttonNum = "9";
    btnInputCollection += buttonNum
    console.log(buttonNum);
    calcDisplay.textContent = btnInputCollection;
});
//end of number buttons


//add button
button10.addEventListener("click", function () {
    const buttonNum = " " + "+" + " ";
    btnInputCollection += buttonNum
    console.log(buttonNum);
    calcDisplay.textContent = btnInputCollection;
});
// subtract button
button11.addEventListener("click", function () {
    const buttonNum = " " + "-" + " ";
    btnInputCollection += buttonNum
    console.log(buttonNum);
    calcDisplay.textContent = btnInputCollection;
});
//multiplication button
button12.addEventListener("click", function () {
    const buttonNum = " " + "x" + " ";
    btnInputCollection += buttonNum
    console.log(buttonNum);
    calcDisplay.textContent = btnInputCollection;
});
//power button
button13.addEventListener("click", function () {
    const buttonNum = " " + "*" + " ";
    btnInputCollection += buttonNum
    console.log(buttonNum);
    calcDisplay.textContent = btnInputCollection;
})
//division button
button14.addEventListener("click", function () {
    const buttonNum = " " + "%" + " ";
    btnInputCollection += buttonNum
    console.log(buttonNum);
    calcDisplay.textContent = btnInputCollection;
});

//clearbutton
button15.addEventListener("click", function () {
    buffer.textContent = null;
    calcDisplay.textContent = null;
    btnInputCollection = [];
});


//del/back button
buttonDel.addEventListener("click", function () {
    btnInputCollection = btnInputCollection.slice(0, -1);
    console.log(btnInputCollection);
    calcDisplay.textContent = " ";
    calcDisplay.textContent += btnInputCollection;
    console.log(btnInputCollection);
});



// git branch --set-upstream-to=origin/<branch> main
