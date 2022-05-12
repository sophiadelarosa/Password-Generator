// Assignment Code
var generateBtn = document.querySelector("#generate");

var passLength = prompt("How many characters should your password be?", "Please choose between 8 and 128 characters.");

if (passLength < 8 || passLength > 128 || isNaN(passLength)) {
  alert("Please choose a length between 8 and 128 characters");
} 



// Write password to the #password input
function writePassword() {
  
  
  
  
  
  
  
  
  
//var password = generatePassword();
//var passwordText = document.querySelector("#password");

//passwordText.value = password;



// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

//if (promptLength < 8 || promptLength > 128 || isNaN(promptLength)) {
