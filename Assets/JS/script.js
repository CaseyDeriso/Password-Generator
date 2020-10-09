// Assignment code here

// get input from user
// ask user for password length 8-128 characters
var passwordLength = window.prompt(
  "Please choose a password length between 8 and 128 characters"
);
// validate input
if (passwordLength <= 7 || passwordLength >= 129 || passwordLength === null) {
  window.alert(
    "Invalid input, please choose a number between 8-128 characters"
  );
  // send back to window prompt for valid input
  /// some validation code
}

// ask user for lower case characters
var passwordLowerCase = window.confirm(
  "Would you like to include lower case characters?"
);
// ask user for upper case characters
var passwordUpperCase = window.confirm(
  "Would you like to include upper case characters?"
);
// ask user for special characters
var passwordSpecialCharacters = window.confirm(
  "Would you like to include special characters?"
);

var generatePassword = function (passwordLength, passwordLowerCase, passwordUpperCase, passwordSpecialCharacters) {
  console.log(passwordLength, passwordLowerCase, passwordUpperCase, passwordSpecialCharacters)
};

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword(passwordLength, passwordLowerCase, passwordUpperCase, passwordSpecialCharacters);
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
