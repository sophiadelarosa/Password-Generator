// Variables
var generateBtn = document.querySelector("#generate");


function generatePassword() {
  //variable for password length
  var passLength = prompt("How many characters should your password be?", "Please choose between 8 and 128 characters.");
    if (passLength < 8 || passLength > 128 || isNaN(passLength)) {
      alert("Please choose a length between 8 and 128 characters.");
      generatePassword();
    }

    
  //function for lowercase
  function lowercase() {
    //variable for lowercase
    var passLower = confirm("Would you like to include lowercase letters?");
    // if passlower is true, include lowercase letters. If false, do not include
    if (passLower) {
      var passLowerResult = prompt("How many lowercase letters would you like?");
      if (passLowerResult < 8 || passLowerResult > 128 || isNaN(passLowerResult)) {
        alert("Please choose a value between 8 and 128.");
        lowercase();
      }
    }
  }

  lowercase();

  //make functions for each prompt thing

  function uppercase() {
    var passUpper = confirm("Would you like to include uppercase letters?");
    if (passUpper) {
      var passUpperResult = prompt("How many uppercase letters would you like?");
      if (passUpperResult < 8 || passUpperResult > 128 || isNaN(passUpperResult)) {
        alert("Please choose a value between 8 and 128.");
        uppercase();
      }
    }
  }

  uppercase();

  function numbers() {
    var passNumbers = confirm("Would you like to include numbers in your password?");
    if (passNumbers) {
      var passNumbersResult = prompt("How many numbers would you like to include?");
      if (passNumbersResult < 8 || passNumbersResult > 128 || isNaN(passNumbersResult)) {
        alert("Please choose a value between 8 and 128.");
        numbers();
      }
    }
  }

  numbers();

  function special() {
    var passSpecial = confirm("Would you like to include special characters in your password?");
    if (passSpecial) {
      var passSpecialResult = prompt("How many special characters would you like?");
      if (passSpecialResult < 8 || passSpecialResult > 128 || isNaN(passSpecialResult)) {
        alert("Please choose a value between 8 and 128.");
        special();
      }
    }
  }

  special();
  
  //variable for uppercase
  var passUpper = confirm("Would you like to include uppercase letters?");
  //variable for numbers
  var passNumbers = confirm("Would you like to include numbers?");
  //variable for special characters
  var passSpecial = confirm("Would you like to include special characters?");
  
}



//pulling results 




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
