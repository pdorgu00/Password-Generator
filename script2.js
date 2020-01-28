//random variables
var password = "";
var letter = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
var charac = "!@#$%^&*()_+";
var numbers = "1234567890";

var copyBtnEL=document.getElementById("copy");

var generateEL=document.querySelector("#generate").addEventListener("click", generate);



//making the questions to ask the user
var userInput = prompt("Please provide number between 8-128?");

if (userInput >= 8 && userInput <= 128) {
    var letters = confirm("Would you like letter characters?");
    if (letters === true) {
        password += letter;
    }
    console.log(password)


    var keys = confirm("Would you like special characters?");
    if (keys === true) {
        password += charac;
    }
    console.log(password)


    var nums = confirm("Would you like numbers?");
    if (nums === true) {
        password += numbers;
    }
    console.log(password)

}
//refresh if field is left blank
else {
    confirm("Must be between 8-128");
    document.location.reload()
}



//loop
function generate(generate) {
    
    var result = "";
    for ( i = 1; i <= userInput; i++) {
        result += password.charAt(Math.floor(Math.random() * Math.floor(password.length)))
    }
    //password to display area
    console.log(result)

    document.getElementById("display").value = result;
}

//copy password alert
function copyPassword() {

    document.getElementById("display").select();

    document.execCommand("Copy");

    alert("Password is copied to clipboard!");

}



  
  copyBtnEL.addEventListener("click", copyPassword);
