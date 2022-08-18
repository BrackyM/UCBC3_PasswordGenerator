// Assignment Code
var generateBtn = document.querySelector("#generate"); // getting the button
const upperCaseCharacters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCaseCharacters = "abcdefghijklmnopqrstuvwxyz"; //static variables , easier to manage in string
const specialCharactersCase = "!@#$%^&*()_<>=/,.'";
const numbersCase = "1234567890";
var possibleCharacters = ""; //empty string

function generatePassword() { //function definition (creating not running)
  var startPass = confirm("Create a password?"); //user first question
  if (startPass == true) { 
    var passwordLength = prompt("Enter the length of your password");

    if (passwordLength < 8 || passwordLength > 128) {
      alert(
        "Your Password needs to be longer than 8 characters or shorter than 128 characters"  // if password outside parameters, start from beginning
      );
      return generatePassword();
    } else {
      alert("Let's Begin your password");
    }
    var upperCase = confirm("Do you want uppercase letters?");
    var lowerCase = confirm("Do you want lowercase letters?");  //asking user question and confirming true or false
    var numbers = confirm("Do you want numbers?");
    var specialCharacters = confirm("Do you want special characters?");

    console.log(
      passwordLength,   //self check in console
      upperCase,
      lowerCase,
      numbers,
      specialCharacters
    );

    if (
      upperCase === false &&
      lowerCase === false &&
      numbers === false &&                //if user inputs nothing
      specialCharacters === false
    ) {
      alert("Your Password must be one of these character types");
    }

    if (upperCase == true) {
      possibleCharacters = possibleCharacters + upperCaseCharacters;
    }

    if (lowerCase == true) {
      possibleCharacters = possibleCharacters + lowerCaseCharacters;
    }

    if (numbers == true) {
      possibleCharacters = possibleCharacters + numbersCase;
    }

    if (specialCharacters == true) {
      possibleCharacters = possibleCharacters + specialCharactersCase;
    }

    var password = "";  // function return value
    for (var i = 0; i < passwordLength; i++) {
      var randomIndex = Math.floor(Math.random() * possibleCharacters.length); //randomization of password
      password += possibleCharacters[randomIndex]; 
    }

    return password;
  }
}

// Write password to the #password input
function writePassword() {
  possibleCharacters = ""; //clearing previous entries
  var password = generatePassword(); // function running
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword); //on click function is called
