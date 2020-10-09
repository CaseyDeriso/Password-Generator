// Initialize app

// create validation function to only recieve password length 8-128. 
// default to 10 characters
let passwordLength = 10;
const askLength = function() {
  passwordLength = window.prompt(
  "Please choose a password length between 8 and 128 characters"
  );
  // validate input
  if (passwordLength <= 7 || passwordLength >= 129 || passwordLength === null || isNaN(parseFloat(passwordLength)) ) {
    window.alert(
    "Invalid input, please choose a number between 8-128 characters"
    );
    // send back to window prompt for valid input
    askLength();
  }
  return passwordLength;
};
// ask user for password length 8-128 characters
askLength();

// ask user for lower case characters
let passwordLowerCase = window.confirm(
  "Would you like to include lower case characters?"
);
// ask user for upper case characters
let passwordUpperCase = window.confirm(
  "Would you like to include upper case characters?"
);
// ask user for special characters
let passwordSpecialCharacters = window.confirm(
  "Would you like to include special characters?"
);
// ask user for numeric characters
let passwordNumbers = window.confirm(
  "Would you like to include numeric characters?"
);

// create array for character codes
const arrayFromLowToHigh = function (low, high) {
  let array = [];
  for (let i = low; i <= high; i++) {
    array.push(i);
  }
  return array;
};

// upper case character codes
const UpperCaseCharCodes = arrayFromLowToHigh(65, 90);
// lower case character codes
const LowerCaseCharCodes = arrayFromLowToHigh(97, 122);
// number character codes
const NumberCharCodes = arrayFromLowToHigh(48, 57);
// special character codes
const SpecialCharCodes = arrayFromLowToHigh(33, 47)
  .concat(arrayFromLowToHigh(58, 64))
  .concat(arrayFromLowToHigh(91, 96))
  .concat(arrayFromLowToHigh(123, 126));

// generate the password
const generatePassword = function (
  passwordLength,
  passwordLowerCase,
  passwordUpperCase,
  passwordSpecialCharacters,
  passwordNumbers,
) {
  // create an array which will contain all possible character codes
  let charCodes = [];
  // default charCodes to be lower case if user chooses all false parameters
  if (!passwordLowerCase && !passwordUpperCase && !passwordSpecialCharacters && !passwordNumbers)
    charCodes = LowerCaseCharCodes;
  // add lower case char codes if user selects them
  if (passwordLowerCase) charCodes = charCodes.concat(LowerCaseCharCodes);
  // add upper case char codes if user selects them
  if (passwordUpperCase) charCodes = charCodes.concat(UpperCaseCharCodes);
  // add special char codes if user selctes them
  if (passwordSpecialCharacters) charCodes = charCodes.concat(SpecialCharCodes);
  // add numeric char codes if user selects them
  if (passwordNumbers) charCodes = charCodes.concat(NumberCharCodes);

  // create an array which will contain our password characters
  let passwordCharacters = [];
  // loop, for length password length, and randomly select characters from char codes array
  for (let i = 0; i < passwordLength; i++) {
    // choose a random code from char codes array
    let characterCode = charCodes[Math.floor(Math.random() * charCodes.length)];
    // push random code to password characters array
    passwordCharacters.push(String.fromCharCode(characterCode));
  }
  // return our password array as a string
  return passwordCharacters.join("");
};

// Get references to the #generate element
const generateBtn = document.querySelector("#generate");

// Write password to the #password input
(function writePassword() {
  let password = generatePassword(passwordLength, passwordLowerCase, passwordUpperCase, passwordSpecialCharacters, passwordNumbers);
  const passwordText = document.querySelector("#password");

  passwordText.value = password;

  // Add event listener to generate button
  generateBtn.addEventListener("click", writePassword);
})();

