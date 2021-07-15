// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}
// characters to include in options

var upper = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
var lower = 'abcdefghijklmnopqrstuvwxyz';
var num = '0123456789';
var sym = '!@#$%&*()+=?/';

// ensures user selects min & max number of characters

function generatePassword() {
  var passwordLength = 0;

  while (passwordLength < 8 || passwordLength > 128) {
    passwordLength = parseInt(prompt('Please select a password length with a minimum of 8 characters and a maximum of 128 characters: '));

    if (passwordLength < 8 || passwordLength > 128) {
      alert("Password must contain a minimum of 8 characters and a maximum of 128 characters")
    }
  }

// asks user if they'd like specific groups of characters

  var confirmUpper = confirm("would you like uppercase letters?")
  var confirmLower = confirm("would you like lowercase letters?")
  var confirmNum = confirm("would you like numbers?")
  var confirmSym = confirm("would you like symbols?")

  var passwordOption = "";

  if (confirmUpper) {
    passwordOption += upper
  }

  if (confirmLower) {
    passwordOption += lower
  }

  if (confirmNum) {
    passwordOption += num
  }

  if (confirmSym) {
    passwordOption += sym
  }

  // returns random password based off user's selcted criteria in window
  
  var password = ""
  for(var i = 0; i < passwordLength; i ++){
  password += passwordOption.charAt(Math.floor(Math.random()*passwordOption.length))
  }
  return password
}

function getUserChoice(characterSet) {

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);