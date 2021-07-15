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

  var password = ""
  for(var i = 0; i < passwordLength; i ++){
  password += passwordOption.charAt(Math.floor(Math.random()*passwordOption.length))
  }
  return password
}



// when you click on the button it prompts you to..

// {<button type="button" onclick='document.getElementById("generate").innerHTML = "Hello JavaScript!"'>generatePassword</button> */}



// use a prompt to determine the lenfth of the password
//between 8 and 128 characters


// passwordLength = prompt('Please select a password length with a minimum of 8 characters and a maximum of 128 characters: ');
// passwordLength = parseInt(passwordLength)

//Continue to ask the question if user fails to meet password length criteria



// PasswordArray created by running a random selector over the password character selelction array
// in a loop of the password length

// var passwordArray = [];
// var i = 0;
// while (i<passwordLength) {
//   var randomChar = passCharSelectionArray[Math.floor(Math.random()*passCharSelectionArray.length)];
//   passwordArray.push(randomChar);
//   i++;
// }

// Password being returned to the function call in the form of a string
// This requires a conversion from an array to a string

// var passwordString = passwordArray.join("");

// output password

// return passwordString;{

// }


function getUserChoice(characterSet) {
  // promt user to determine if using character set
  var userChoice = prompt('Do you wish for your password to contain ' + characterSet + '? Please enter "Y" OR "N"');

}

// function checkUserChoice(checkChoice, characterSet) {
//   while (userChoice = prompt('You must enter "Y"'))
// }

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);