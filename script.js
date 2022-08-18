// Assignment Code
var generateBtn = document.querySelector("#generate");
const upperCaseCharacters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCaseCharacters = "abcdefghijklmnopqrstuvwxyz";
const specialCharactersCase = "!@#$%^&*()_<>=/,.'";
const numbersCase = "1234567890";
var possibleCharacters = "";


function generatePassword() {

    var startPass =confirm("Create a password?");
    if (startPass == true) {
        var passwordLength = prompt("Enter the length of your password");
    
        if (passwordLength < 8 || passwordLength > 128) {
            alert ("Your Password needs to be longer than 8 characters or shorter than 128 characters");
            return generatePassword();
        }else {
            alert("Let's Begin your password");
        }
    }


  
  var upperCase = confirm("Do you want uppercase letters?");
  var lowerCase = confirm("Do you want lowercase letters?");
  var numbers = confirm("Do you want numbers?");
  var specialCharacters = confirm("Do you want special characters?");

  console.log(passwordLength, upperCase, lowerCase, numbers, specialCharacters);

  if (upperCase ==true) {
    possibleCharacters = possibleCharacters + upperCaseCharacters;
  }

  if (lowerCase ==true) {
    possibleCharacters = possibleCharacters + lowerCaseCharacters;
  }

  if (numbers==true) {
    possibleCharacters = possibleCharacters +  numbersCase;
  }

  if (specialCharacters==true) {
    possibleCharacters = possibleCharacters + specialCharactersCase;
  }

  var password = "";
  for (var i = 0; i < passwordLength; i++) {
    var randomIndex = Math.floor(Math.random() * possibleCharacters.length);
    password += possibleCharacters[randomIndex];
  }

  return password;
}

if (
  upperCaseCharacters === false && lowerCaseCharacters === false && numbersCase === false && specialCharactersCase === false
) {
  alert("Your Password must be one of these character types")
}

var passwordOptions = {
  length:length,
  hasUpperCaseCharacters:hasUpperCaseCharacters,
  hasLowerCaseCharacters:hasLowerCaseCharacters,
  hasNumbersCase:hasNumbersCase,
  hasSpecialCharactersCase:hasSpecialCharactersCase,
};

return passwordOptions

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
