
// BASIC ARITHMETIC PROBLEMS
// function  to verify if its a number or not 
function isNum(val){
    return !isNaN(val)
  }

let sol = 0;
function start() {
    const first_num = Math.floor(Math.random() * 1000);
    const second_num = Math.floor(Math.random() * 1000);
    const solution = first_num + second_num;
    document.getElementById("questions").innerHTML = "Find: " + first_num + " + " + second_num; 

    sol += solution;
} 
function answer() {
    
    //let userinput = document.querySelector("#userinput");  // always had 
    //let message = document.querySelector("#message");
    let y = String(userinput.value);
    
    // Check if the string is valid or not
    if (isNum(y)) {
        let user_value = parseInt(y);
        if(user_value == sol) {
            alert("Correct, press next");
            sol = 0;
        } else { 
            alert("Incorrect, try again");
            sol = 0;
        }
    } 
    else {
    alert("Not valid please type a proper number");
    } 
}

// initialize multiplcation values, all below for multiplication
let multiplcation_val = 0;

function start2() {
    const first_num1 = Math.floor(Math.random() * 500);
    const second_num1 = Math.floor(Math.random() * 500);
    const solution1 = first_num1 * second_num1;
    document.getElementById("questions1").innerHTML = "Find: " + first_num1 + " * " + second_num1; 

    multiplcation_val += solution1;

}

function answer2() {
    
    //let userinput = document.querySelector("#userinput");  // always had 
    //let message = document.querySelector("#message");
    let y = String(userinput1.value);
    
    // Check if the string is valid or not
    if (isNum(y)) {
        let user_value = parseInt(y);
        
        if(user_value == multiplcation_val) {
            alert("Correct, press next");
            multiplcation_val *= 0;
        } else { 
            alert("Incorrect, try again");
            multiplcation_val *= 0;

        }
    } 
    else {
    alert("Not valid please type a proper number");
    
    
    } 
}
 // Subtraction

 let subtraction_value = 0;
 function start3() {
     const first_num2 = Math.floor(Math.random() * 10);
     const second_num2 = Math.floor(Math.random() * 10);
     const solution2 = first_num2 - second_num2;
     document.getElementById("questions2").innerHTML = "Find: " + first_num2 + " - " + second_num2; 
 
     subtraction_value += solution2;
 
     
 } 
 function answer3() {
     
     //let userinput = document.querySelector("#userinput");  // always had 
     //let message = document.querySelector("#message");
     let y = String(userinput2.value);
     
     // Check if the string is valid or not
     if (isNum(y)) {
         let user_value = parseInt(y);
         // check if equal to solution! 
         if(user_value == subtraction_value) {
             alert("Correct, press next");
             subtraction_value *= 0;
         } else { 
             alert("Incorrect, try again");
             subtraction_value *= 0;
         }
         
     } 
     else {
     alert("Not valid please type a proper number");
     } 
 }

    // Division, round to nearest tenth
    let division_val = 0;
    
    function divide(x,y) {
        let z = x / y;
        return z.toFixed(1);
    }
    function randomNumber(min, max) { 
        return Math.floor(Math.random() * (max - min) + min);
    }

function start4() {
    const first_num3 = randomNumber(1, 50);
    const second_num3 = randomNumber(1, 50);
    const solution3 = divide(first_num3, second_num3); // round to nearest tenth place 
    document.getElementById("questions3").innerHTML = "Find: " + first_num3 + " / " + second_num3; 
    division_val += solution3;
}
function answer4() {
    //let userinput = document.querySelector("#userinput");  // always had 
    //let message = document.querySelector("#message");
    let y = String(userinput3.value);
    
    // Check if the string is valid or not
    if (isNum(y)) {
        //let user_value = parseInt(y);
        let user_value = parseFloat(y);
        if(user_value == division_val) {
            alert("Correct, press next");
            division_val = 0;
        } else { 
            alert("Incorrect, try again");
            division_val = 0;
        }
    } 
    else {
    alert("Not valid please type a proper number");
    
    }
}

// RANDOM NUMBERS!


// Algebra Start:

let algebra_val1 = 0;
function start5() {
    // c == coefficient 
    const c = randomNumber(1, 5);
    const constantt = randomNumber(1, 500);
    const solution3 = divide(constantt, c); // round to nearest tenth place 
    document.getElementById("questions4").innerHTML = c + "x = " + constantt; 
    algebra_val1 += solution3;
}
function answer5() {
    //let userinput = document.querySelector("#userinput");  // always had 
    //let message = document.querySelector("#message");
    let y = String(userinput4.value);
    
    // Check if the string is valid or not
    if (isNum(y)) {
        //let user_value = parseInt(y);
        let user_value = parseFloat(y);
        if(user_value == algebra_val1) {
            alert("Correct, press next");
            algebra_val1 = 0;
        } else { 
            alert("Incorrect, try again");
            algebra_val1 = 0;
        }
    } 
    else {
    alert("Not valid please type a proper number");
    
    }
}










