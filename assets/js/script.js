// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// when you click on the button it prompts you to..

<button type="button" onclick='document.getElementById("generate").innerHTML = "Hello JavaScript!"'>generatePassword</button>



// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);



// use a prompt to determine the lenfth of the password
//between 8 and 128 characters

var passwordLength = 0;
passwordLength = prompt('Please select a password length with a minimum of 8 characters and a maximum of 128 characters: ');
passwordLength = parseInt(passwordLength)

//Continue to ask the question if user fails to meet password length criteria

while (passwordLength <8 || passwordLength > 128) {
  passwordLength = prompt('Please select a password length with a minimum of 8 characters and a maximum of 128 characters: ');
}

// PasswordArray created by running a random selector over the password character selelction array
// in a loop of the password length

var passwordArray = [];
var i = 0;
while (i<passwordLength) {
  var randomChar = passCharSelectionArray[Math.floor(Math.random()*passCharSelectionArray.length)];
  passwordArray.push(randomChar);
  i++;
}

// Password being returned to the function call in the form of a string
// This requires a conversion from an array to a string

var passwordString = passwordArray.join("");

// output password

return passwordString