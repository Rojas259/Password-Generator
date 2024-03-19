// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

function generatePassword(){
  var passwordLength = prompt("How many characters would you like your password to be?");
  if(passwordLength < 8 || passwordLength > 128){
    alert("Password must be between 8 and 128 characters");
    return;
  }
  var lowerCase = confirm("Would you like to include lowercase letters?");
  var upperCase = confirm("Would you like to include uppercase letters?");
  var numbers = confirm("Would you like to include numbers?");
  var specialCharacters = confirm("Would you like to include special characters?");
  if(lowerCase === false && upperCase === false && numbers === false && specialCharacters === false){
    alert("You must select at least one character type");
    return;
  }
  var password = "";
  var lowerCaseLetters = "abcdefghijklmnopqrstuvwxyz";
  var upperCaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var numbers = "0123456789";
  var specialCharacters = "!@#$%^&*()_+";
  var characterSet = "";
  if(lowerCase){
    characterSet += lowerCaseLetters;
  }
  if(upperCase){
    characterSet += upperCaseLetters;
  }
  if(numbers){
    characterSet += numbers;
  }
  if(specialCharacters){
    characterSet += specialCharacters;
  }
  for(var i = 0; i < passwordLength; i++){
    password += characterSet.charAt(Math.floor(Math.random() * characterSet.length));
  }
  return password;
}

  

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
