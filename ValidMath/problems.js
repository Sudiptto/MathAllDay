
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
    document.querySelector('#disabled').disabled = true;
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
            alert("Correct");
            sol = 0;
            start();
            
        } else { 
            alert("Incorrect, try again");
            
            
        }
    } 
    else {
    alert("Not valid please type a proper number");
    } 
}

// initialize multiplcation values, all below for multiplication
let multiplcation_val = 0;

function start2() {
    const first_num1 = Math.floor(Math.random() * 5000);
    const second_num1 = Math.floor(Math.random() * 5000);
    const solution1 = first_num1 * second_num1;
    document.getElementById("questions1").innerHTML = "Find: " + first_num1 + " * " + second_num1; 
    document.querySelector('#disabled2').disabled = true;
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
            alert("Correct");
            multiplcation_val = 0;
            start2();
        } else { 
            alert("Incorrect, try again");
        }
    } 
    else {
    alert("Not valid please type a proper number");
    
    
    } 
}
 // Subtraction

 let subtraction_value = 0;
 function start3() {
     const first_num2 = Math.floor(Math.random() * 1000) + 1;
     const second_num2 = Math.floor(Math.random() * 1000) + 1;
     const solution2 = first_num2 - second_num2;
     document.getElementById("questions2").innerHTML = "Find: " + first_num2 + " - " + second_num2; 
     document.querySelector('#disabled3').disabled = true; // disable all buttons
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
             alert("Correct");
             subtraction_value = 0;
             start3();
             
         } else { 
             alert("Incorrect, try again");
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
    
function start4() {
    const first_num3 = Math.floor(Math.random() * 1000) + 1;
    const second_num3 = Math.floor(Math.random() * 1000) + 1;
    const solution3 = divide(first_num3, second_num3); // round to nearest tenth place 
    document.getElementById("questions3").innerHTML = "Find: " + first_num3 + " / " + second_num3; 
    document.querySelector('#disabled4').disabled = true; 
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
            alert("Correct");
            division_val = 0;
            start4();
        } else { 
            alert("Incorrect, try again. Check if you rounded problem!");  
        }
    } 
    else {
    alert("Not valid please type a proper number");
    
    }
}


// Algebra Start:

let algebra_val1 = 0;
function start5() {
    // c == coefficient 
    const c = Math.floor(Math.random() * 10) + 1;
    const constantt = Math.floor(Math.random() * 1000) + 1;
    const solution3 = divide(constantt, c); // round to nearest tenth place 
    document.getElementById("questions4").innerHTML = c + "x = " + constantt; 
    document.querySelector('#disabled5').disabled = true;
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
            alert("Correct");
            
            algebra_val1 = 0;
            start5();
        } else { 
            alert("Incorrect, try again");
        
        }
    } 
    else {
    alert("Not valid please type a proper number");
    
    }
}

 // More algebra prep:
 let algebra_val2 = 0;
function start6() {
    // c == coefficient 
    const c = Math.floor(Math.random() * 100) + 50;
    const constantt = Math.floor(Math.random() * 100) + 1; 
    const c1 = (Math.floor(Math.random() * 10)) + 1;
    const constantt1 = Math.floor(Math.random() * 15000) + 1;
    // Write Out Solution! 
    const final_c = c - c1;
    const final_constant = constantt1 - constantt;
    // Splution
    const solution4 = divide(final_constant,final_c);
    document.getElementById("questions5").innerHTML = c + "x + " + constantt + " = " + c1 + "x + " + constantt1; 
    document.querySelector('#disabled6').disabled = true;

    algebra_val2 += solution4;
}
function answer6() {
    //let userinput = document.querySelector("#userinput");  // always had 
    //let message = document.querySelector("#message");
    let y = String(userinput5.value);
    
    // Check if the string is valid or not
    if (isNum(y)) {
        //let user_value = parseInt(y);
        let user_value = parseFloat(y);
        if(user_value == algebra_val2) {
            alert("Correct");
            
            algebra_val2 = 0;
            start6();
        } else { 
            alert("Incorrect, try again");
        
        }
    } 
    else {
    alert("Not valid please type a proper number");
    
    }
}

// Exponents! 
let algebra_val3 = 0;
function square_exponent(x) {
    // Round to first decimal place
    value = x ** 0.5;
    return value.toFixed(1);
}

 // The solution! 
function start7() {
    // c == coefficient 
    const c = Math.floor(Math.random() * 10) + 1;
    const constantt = Math.floor(Math.random() * 10000) + 1;
    
    const solution5_part1 = divide(constantt, c);
    const solution5 = square_exponent(solution5_part1); // round to nearest tenth place 
    document.getElementById("questions6").innerHTML = c + "x^2 = " + constantt; 
    document.querySelector('#disabled7').disabled = true;
    algebra_val3 += solution5;
}
function answer7() {
    //let userinput = document.querySelector("#userinput");  // always had 
    //let message = document.querySelector("#message");
    let y = String(userinput6.value);
    
    // Check if the string is valid or not
    if (isNum(y)) {
        //let user_value = parseInt(y);
        let user_value = parseFloat(y);
        if(user_value == algebra_val3) {
            alert("Correct");
            
            algebra_val3 = 0;
            start7();
        } else { 
            alert("Incorrect, try again");
            
        
        }
    } 
    else {
    alert("Not valid please type a proper number");
    
    }
}

// Advanced exponent Problems! 
let algebra_val4 = 0;
function start8() {
    // c == coefficient 
    const c = Math.floor(Math.random() * 20) + 5;
    const constantt = Math.floor(Math.random() * 100) + 1;
    const c1 = Math.floor(Math.random() * 5) + 1;
    const constantt1 = Math.floor(Math.random() * 10000) + 100;

    const c2 = c - c1; // subtract the two squared values 
    const final_constant = constantt1 - constantt;
    const solution6_part1 = divide(final_constant, c2);
    const solution6 = square_exponent(solution6_part1); // round to nearest tenth place 
    document.getElementById("questions7").innerHTML = c + "x^2 +" + constantt + " = " + c1 + "x^2 +" + constantt1 ; 
    document.querySelector('#disabled7').disabled = true;
    algebra_val4 += solution6;
}
function answer8() {
    //let userinput = document.querySelector("#userinput");  // always had 
    //let message = document.querySelector("#message");
    let y = String(userinput7.value);
    
    // Check if the string is valid or not
    if (isNum(y)) {
        //let user_value = parseInt(y);
        let user_value = parseFloat(y);
        if(user_value == algebra_val4) {
            alert("Correct");
            
            algebra_val4 = 0;
            start8();
        } else { 
            alert("Incorrect, try again");
            
        
        }
    } 
    else {
    alert("Not valid please type a proper number");
    
    }
}







