// Variables
var generateBtn = document.querySelector("#generate");


function generatePassword() {
  //variable for password length
  let passLength = prompt("How many characters should your password be?", "Please choose between 8 and 128 characters.");
    if (passLength < 8 || passLength > 128 || isNaN(passLength)) {
      alert("Please choose a length between 8 and 128 characters.");
      //restart the function if the input value is outside the accepted parameters
      generatePassword();
      //so you get kicked out of the loop
      return;
    }

  //variables for each case
  let passLower = confirm("Would you like to include lowercase letters?");

  let passUpper = confirm("Would you like to include uppercase letters?");

  let passNumbers = confirm("Would you like to include numbers in your password?");

  let passSpecial = confirm("Would you like to include special characters in your password?");


  //create strings
  let lowercase = "abcdefghijklmnopqrstuvwxyz";

  let uppercase = "ABCDEFGHIJKLMNOPQRSTUVWYXYZ";

  let numbers = "0123456789";

  let special = "`~!@#$%^&*()-_=+{[}]\\;:',<.>/";


  //declared password
  let password = "";


  //booleans to add true confirms to the password
  if (passLower) {
    password += lowercase;
  }

  if (passUpper) {
    password += uppercase;
  }

  if (passNumbers) {
    password += numbers;
  }

  if (passSpecial) {
    password += special;
  }

  let randomizedPass = randomizedPassword(passLength, password);
  console.log(randomizedPass);
  
  //puts the randomized password in the password textbox on the screen
  let passwordBox = document.getElementById("password");
  passwordBox.value = randomizedPass;
}

//function for random character generator
//generates a random number, rounds it down to nearest integer, selects the character at that position in the string
function randomizedPassword(passwordLength, password) {
  let result = '';
  for ( var i = 0; i < passwordLength; i++ ) {
    result += password.charAt(Math.floor(Math.random() * 
    password.length));
  }
  return result;
}

generateBtn.addEventListener("click", generatePassword);