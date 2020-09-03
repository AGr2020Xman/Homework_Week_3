// Obj containing password limits - easily changed in future
var limits = { passwordLengthLowerLimit: 7, passwordLengthUpperLimit: 128 };

// Array of special characters
var specialCharacters = [
  "@",
  "%",
  "+",
  "\\",
  "/",
  "'",
  "!",
  "#",
  "$",
  "^",
  "?",
  ":",
  ",",
  ")",
  "(",
  "}",
  "{",
  "]",
  "[",
  "~",
  "-",
  "_",
  ".",
];

// Array of numeric characters
var numericCharacters = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

// Array of lowercase characters
var lowerCasedCharacters = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];

// Array of uppercase characters
var upperCasedCharacters = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];

//button event functions
var generateBtn = document.querySelector("#generate");
var copyToClipBoardButton = document.querySelector("#copy-clipboard");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.textContent = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Add event listener to copy to clipboard button
copyToClipBoardButton.addEventListener("click", copytoClipboard);

// generate password function
function generatePassword() {
  var confirmLength = "";
  var confirmSpecialChar = false;
  var confirmNumericChar = false;
  var confirmUpperCase = false;
  var confirmLowerCase = false;

  confirmLength = prompt(
    "How many characters would you like the password to contain?"
  );

  // to define length input conditions | and incase a string and not a number is detected

  while (
    confirmLength <= limits.passwordLengthLowerLimit ||
    confirmLength >= limits.passwordLengthUpperLimit ||
    isNaN(parseInt(confirmLength))
  ) {
    alert(
      "Password length must be between 8-128 characters. Please enter a valid length."
    );
    confirmLength = prompt(
      "How many characters would you like the password to contain?"
    );
  }
  alert(`Your password will contain ${confirmLength} characters`);

  confirmLength = parseInt(confirmLength);

  // query user for password parameters
  // loop if user fails to include at least 1 special conditionl
  var isFirstTime = true;
  while (
    confirmUpperCase === false &&
    confirmLowerCase === false &&
    confirmSpecialChar === false &&
    confirmNumericChar === false
  ) {
    if (isFirstTime === false) {
      alert("You must choose at least one (1) parameter for your password");
    }

    confirmSpecialChar = confirm(
      "Click OK to confirm if you wish to include special characters"
    );
    confirmNumericChar = confirm(
      "Click OK to confirm if you wish to include numeric characters"
    );
    confirmUpperCase = confirm(
      "Click OK to confirm if you wish to include upper characters"
    );
    confirmLowerCase = confirm(
      "Click OK to confirm if you wish to include lower characters"
    );

    isFirstTime = false;
  }

  // password character array
  var passwordCharacters = [];

  if (confirmSpecialChar) {
    passwordCharacters = passwordCharacters.concat(specialCharacters);
  }
  if (confirmNumericChar) {
    passwordCharacters = passwordCharacters.concat(numericCharacters);
  }
  if (confirmLowerCase) {
    passwordCharacters = passwordCharacters.concat(lowerCasedCharacters);
  }
  if (confirmUpperCase) {
    passwordCharacters = passwordCharacters.concat(upperCasedCharacters);
  }

  // console.log(passwordCharacters);

  //string to be output with password - intially empty

  var randomPassword = "";

  for (var i = 0; i < parseInt(confirmLength); i++) {
    randomPassword =
      randomPassword +
      passwordCharacters[Math.floor(Math.random() * passwordCharacters.length)];
  }
  return randomPassword;
}

function copytoClipboard() {
  document.querySelector("#password").select();

  document.execCommand("Copy");

  alert("Your password has now been copied to the clipboard");
}
