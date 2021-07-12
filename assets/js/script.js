// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// when you click on the button it prompts you to..

// <button type="button" onclick='document.getElementById("demo").innerHTML = "Hello JavaScript!"'>generatePassword</button>



// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
