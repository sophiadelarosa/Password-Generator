// Variables
var generateBtn = document.querySelector("#generate");


function generatePassword() {
  var passLength = prompt("How many characters should your password be?", "Please choose between 8 and 128 characters.");
  while (passLength < 8 || passLength > 128 || isNaN(passLength)) {
    passLength = prompt("Please choose a length between 8 and 128 characters.");
  }
  //variable for lowercase
  var passLower = confirm("Would you like to include lowercase letters?"); 
  //variable for uppercase
  var passUpper = confirm("Would you like to include uppercase letters?");
  //variable for numbers
  var passNumbers = confirm("Would you like to include numbers?");
  //variable for special characters
  var passSpecial = confirm("Would you like to include special characters?");
}















generateBtn.addEventListener("click", generatePassword);




//Write password to the #password input
//function writePassword() {
   
  
//var password = generatePassword();
//var passwordText = document.querySelector("#password");

//passwordText.value = password;


// Add event listener to generate button
//generateBtn.addEventListener("click", writePassword);

//if (promptLength < 8 || promptLength > 128 || isNaN(promptLength)) {
