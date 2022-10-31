// Assignment code here
var alphalowerCharacters = "abcdefghijklmnopqrstuvwxyz";
var alphaupperCharacters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numericCharacters = "0123456789";
var specialCharacters = "!#$%&'()*+,-./:;<=>?@[\]^_`{|}~";
let permitedCharacters = "";
var passwordLength;
var low;
var up;
var num;
var spcl;

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var password = '';

  for (let i = 0; i < passwordLength; i++) {

    password += permitedCharacters[Math.floor(Math.random() * permitedCharacters.length)]

  }
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


function generatePassword() {

  permitedCharacters = "";//fixed when repeat generate not showing old selections
  passwordLength = Number(window.prompt("Enter the length of your password between 8 and 128 characters:"));
  if ((passwordLength >= 8) && (passwordLength <= 128)) {
    var up = window.confirm("Would you like your password to include upper case characters?");
    if (up) {

      permitedCharacters = permitedCharacters + alphaupperCharacters;

    } var low = window.confirm("Would you like your password to include lower case characters?");
    if (low) {
      permitedCharacters = permitedCharacters + alphalowerCharacters;

    } var num = window.confirm("Would you like your password to include numeric characters?");
    if (num) {
      permitedCharacters = permitedCharacters + numericCharacters;

    } var spcl = window.confirm("Would you like your password to include special characters?");
    if (spcl) {
      permitedCharacters = permitedCharacters + specialCharacters;

    }

    if (permitedCharacters == "null" || permitedCharacters == null || permitedCharacters == "") {
      window.alert("You should choose at least one group of characters for your password.");
      generatePassword();
    }

  } else if (passwordLength == "null" || passwordLength == null || passwordLength == "") {
    window.alert("Thank you, feel free to come back with a choice between 8 and 128 characters.");
    return;

  } else {
    window.alert("Sorry, please choose a number between 8 and 128 characters for your password.");
    generatePassword();
  }
  console.log("permitedCharacters =", permitedCharacters);
  console.log("passwordLength =", passwordLength);
}

