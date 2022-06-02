let sol = 0;
function start() {
    const first_num = Math.floor(Math.random() * 10);
    const second_num = Math.floor(Math.random() * 10);
    const solution = first_num + second_num;
    document.getElementById("questions").innerHTML = "Find: " + first_num + " + " + second_num; 

    sol += solution;

    
} 

function answer() {
    
    //let userinput = document.querySelector("#userinput");  // always had 
    //let message = document.querySelector("#message");
    let y = String(userinput.value);
    
    
    if (y.length == parseInt(y).toString().length) {
        let user_value = parseInt(y);
        if(user_value == sol) {
            alert("Correct, press next");
            sol = 0;
        } else { 
            alert("Incorrect, try again");
            
        }
        
    } 
    else {
    alert("Not valid please type a proper number");
    } 
}