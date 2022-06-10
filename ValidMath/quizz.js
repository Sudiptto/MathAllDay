// Below SHows how to add image! 
/*function testt(){
   // WORKS!, add this in when ever someone gets something right or wrong  !
    document.getElementById("test").src ="Images/Day1.png" ; // PUT IN AN IMAGE
} */

function isNum(val){
    return !isNaN(val)
  }
correct_questions = 0; 
incorrect_questions = 0;
let sol = 0;
function load() {
    const first_num = Math.floor(Math.random() * 12000);
    const second_num = Math.floor(Math.random() * 12000);
    const solution = first_num + second_num;
    document.getElementById("q_1").innerHTML = "Find: " + first_num + " + " + second_num; 
    document.querySelector('#disable').disabled = true;
    sol += solution;
} 
function submission() {
    document.querySelector('#disable_submission').disabled = true;
    //let userinput = document.querySelector("#userinput");  // always had 
    //let message = document.querySelector("#message");
    let y = String(ans.value);
    
    // Check if the string is valid or not
    if (isNum(y)) {
        let user_value = parseInt(y);
        if(user_value == sol) {
            alert("Correct");
            document.getElementById("correct_or_false").src ="Images/Correct.png";
            correct_questions += 1;
            document.getElementById("correct_questions").innerHTML = "Correct: " + correct_questions + " / 4 ";      
            document.getElementById("incorrect_questionz").innerHTML = "Incorrect: " + incorrect_questions + " / 4";      
            sol = 0;
            
        } else { 
            incorrect_questions += 1;
            alert("Incorrect, next question");
            document.getElementById("correct_or_false").src ="Images/incorrect.png";
            document.getElementById("correct_questions").innerHTML = "Correct: " + correct_questions + " / 4 ";
            document.getElementById("incorrect_questionz").innerHTML = "Incorrect Questions: " + incorrect_questions + " / 4";
        }
    } 
    else {
    alert("Not valid please type a proper number");
    } 
}

// Second Question!
let sol2 = 0;
function load1() {
    const first_num = Math.floor(Math.random() * 10124);
    const second_num = Math.floor(Math.random() * 102423);
    const solution = first_num - second_num;
    document.getElementById("q_2").innerHTML = "Find: " + first_num + " - " + second_num; 
    document.querySelector('#disable1').disabled = true;
    sol2 += solution;
} 
function submission1() {
    document.querySelector('#disable_submission1').disabled = true;
    //let userinput = document.querySelector("#userinput");  // always had 
    //let message = document.querySelector("#message");
    let y = String(ans1.value);
    
    // Check if the string is valid or not
    if (isNum(y)) {
        let user_value = parseInt(y);
        if(user_value == sol2) {
            alert("Correct");
            document.getElementById("correct_or_false1").src ="Images/Correct.png";
            correct_questions += 1;
            document.getElementById("correct_questions").innerHTML = "Correct: " + correct_questions + " / 4 ";      
            document.getElementById("incorrect_questionz").innerHTML = "Incorrect: " + incorrect_questions + " / 4";      
            
        } else { 
            alert("Incorrect, next question");
            incorrect_questions += 1;
            document.getElementById("correct_or_false1").src ="Images/incorrect.png";
            document.getElementById("correct_questions").innerHTML = "Correct: " + correct_questions + " / 4 ";      
            document.getElementById("incorrect_questionz").innerHTML = "Incorrect Questions: " + incorrect_questions + " / 4";
            
        }
    } 
    else {
    alert("Not valid please type a proper number");
    alert(ans1.value);
    } 
}
// Question #3
let sol3 = 0;
function load2() {
    const first_num = Math.floor(Math.random() * 1002);
    const second_num = Math.floor(Math.random() * 1220);
    const solution = first_num * second_num;
    document.getElementById("q_3").innerHTML = "Find: " + first_num + " * " + second_num; 
    document.querySelector('#disable2').disabled = true;
    sol3 += solution;
} 
function submission2() {
    document.querySelector('#disable_submission2').disabled = true;
    //let userinput = document.querySelector("#userinput");  // always had 
    //let message = document.querySelector("#message");
    let y = String(ans2.value);
    
    // Check if the string is valid or not
    if (isNum(y)) {
        let user_value = parseInt(y);
        if(user_value == sol3) {
            alert("Correct");
            document.getElementById("correct_or_false2").src ="Images/Correct.png";
            correct_questions += 1;
            document.getElementById("correct_questions").innerHTML = "Correct: " + correct_questions + " / 4 ";      
            document.getElementById("incorrect_questionz").innerHTML = "Incorrect: " + incorrect_questions + " / 4";      
            
        } else { 
            alert("Incorrect, next question");
            incorrect_questions += 1;
            document.getElementById("correct_or_false2").src ="Images/incorrect.png";
            document.getElementById("correct_questions").innerHTML = "Correct: " + correct_questions + " / 4 ";      
            document.getElementById("incorrect_questionz").innerHTML = "Incorrect Questions: " + incorrect_questions + " / 4";
            
        }
    } 
    else {
    alert("Not valid please type a proper number");
    } 
}

// Question #4
let division_val = 0;
    
    function divide(x,y) {
        let z = x / y;
        return z.toFixed(1);
    }
sol4 = 0;
function load3() {
    const first_num3 = Math.floor(Math.random() * 1000) + 1;
    const second_num3 = Math.floor(Math.random() * 100) + 1;
    const solution3 = divide(first_num3, second_num3); // round to nearest tenth place 
    document.getElementById("q_4").innerHTML = "Find: " + first_num3 + " / " + second_num3; 
    document.querySelector('#disable3').disabled = true;
    sol4 += solution3;
}
function submission3() {
    document.querySelector('#disable_submission3').disabled = true;
    //let userinput = document.querySelector("#userinput");  // always had 
    //let message = document.querySelector("#message");
    let y = String(ans3.value);
    
    // Check if the string is valid or not
    if (isNum(y)) {
        let user_value = parseFloat(y);
        if(user_value == sol4) {
            alert("Correct");
            document.getElementById("correct_or_false3").src ="Images/Correct.png";
            correct_questions += 1;
            document.getElementById("correct_questions").innerHTML = "Correct: " + correct_questions + " / 4 ";      
            document.getElementById("incorrect_questionz").innerHTML = "Incorrect: " + incorrect_questions + " / 4";      
            
        } else { 
            alert("Incorrect, next question");
            incorrect_questions += 1;
            document.getElementById("correct_or_false3").src ="Images/incorrect.png";
            document.getElementById("correct_questions").innerHTML = "Correct: " + correct_questions + " / 4 ";      
            document.getElementById("incorrect_questionz").innerHTML = "Incorrect Questions: " + incorrect_questions + " / 4";
            alert(ans3.value);
            alert(sol4);
        }
    } 
    else {
    alert("Not valid please type a proper number");
    } 
}