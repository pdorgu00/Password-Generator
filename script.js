//generate password
function generate(){

//set password complexity
let complexity= document.getElementById("slider").value;

//possible password values
let values ="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz!@#$%^&*()_+";

let password="";

//create for loop to choose password characters
for(var i=0; i <= complexity; i++) {
    password=password+values.charAt(Math.floor(Math.random()* Math.floor(values.length-1)));
}

//add password to textbox/display area
document.getElementById("display").value=password;


//add password to previous generated passwords section
document.getElementById("lastNums").innerHTML+=password+"<br/>";
}