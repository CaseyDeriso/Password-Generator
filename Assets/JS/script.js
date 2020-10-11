// Initialize app
// default output object to 10 characters, all false
let output = {
  length: 10,
  lowerCase: false,
  upperCase: false,
  numbers: false,
  specialCharacters: false
};

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

// create validation function to only recieve password length 8-128. 
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
  output.length = passwordLength;
};

// ask user which types of characters they would like to add to password. 
const askChars = function() {
  // ask user for lower case characters
  output.lowerCase = window.confirm(
    "Would you like to include lower case characters?"
  );
  // ask user for upper case characters
  output.upperCase = window.confirm(
    "Would you like to include upper case characters?"
  );
  // ask user for special characters
  output.specialCharacters = window.confirm(
    "Would you like to include special characters?"
  );
  // ask user for numeric characters
  output.numbers = window.confirm(
    "Would you like to include numeric characters?"
  );
};

// generate the password, pass output onject into function. 
const generatePassword = function (obj) {
  // create an array which will contain all possible character codes
  let charCodes = [];
  // default charCodes to be lower case if user chooses all false parameters
  if (!output.lowerCase && !output.upperCase && !output.specialCharacters && !output.numbers)
    charCodes = LowerCaseCharCodes;
  // add lower case char codes if user selects them
  if (output.lowerCase) charCodes = charCodes.concat(LowerCaseCharCodes);
  // add upper case char codes if user selects them
  if (output.upperCase) charCodes = charCodes.concat(UpperCaseCharCodes);
  // add special char codes if user selctes them
  if (output.specialCharacters) charCodes = charCodes.concat(SpecialCharCodes);
  // add numeric char codes if user selects them
  if (output.numbers) charCodes = charCodes.concat(NumberCharCodes);

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
function writePassword() {
  // ask for password length
  askLength();
  // ask for character types. 
  askChars();
  // generate the password
  let password = generatePassword(output);
  // find the text input box for the generated password
  const passwordText = document.querySelector("#password");
  // change value of text box to generated password. 
  passwordText.value = password;
};


  // Add event listener to generate button
  generateBtn.addEventListener("click", writePassword);