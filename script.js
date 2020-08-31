// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Generate lower case a-z, 97-122 
function genRandomLower() {
  console.log(Math.random());

}


// Print out all the lower case letters from a-z using ascii characters 97-122
console.log("=======================")
for (var i=97; i< 122; i++){
  console.log(String.fromCharCode(i));
}
console.log("=======================")

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
