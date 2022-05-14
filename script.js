// Variables
var generateBtn = document.querySelector("#generate");


function generatePassword() {
  //variable for password length
  let passLength = prompt("How many characters should your password be?", "Please choose between 8 and 128 characters.");
    if (passLength < 8 || passLength > 128 || isNaN(passLength)) {
      alert("Please choose a length between 8 and 128 characters.");
      generatePassword();
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
    password = password += lowercase;
  }

  if (passUpper) {
    password = password += uppercase;
  }

  if (passNumbers) {
    password = password += numbers;
  }

  if (passSpecial) {
    password = password += special;
  }


  //double checking it works lol
  console.log(password);  

}


//function for random character generator
// use this function for each result (number)
function makeid(passLength) {
  var result           = '';
  var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  var charactersLength = characters.length;
  for ( var i = 0; i < length; i++ ) {
    result += characters.charAt(Math.floor(Math.random() * 
charactersLength));
 }
 return result;
}

console.log(makeid(5));




//concat them all



//return the password 








generateBtn.addEventListener("click", generatePassword);




//Write password to the #password input
//function writePassword() {
   
  
//var password = generatePassword();
//var passwordText = document.querySelector("#password");

//passwordText.value = password;


// Add event listener to generate button
//generateBtn.addEventListener("click", writePassword);

//if (promptLength < 8 || promptLength > 128 || isNaN(promptLength)) 
