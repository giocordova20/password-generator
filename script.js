// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Generate lower case a-z, 97-122 
// Use Math.random to generate a random decimal and multiply it by 26 to get 1-26 for 
// the letters of the alphabet a-z. Add 97 to the randome number to get the ascii value
// for the lower case letter.
function genRandomLower() {
  // console.log(String.fromCharCode(Math.floor(Math.random() * 26) +97));
  return String.fromCharCode(Math.floor(Math.random() * 26) +97);
}

console.log(genRandomLower());
// console.log(Math.random());

// // Print out all the lower case letters from a-z using ascii characters 97-122
// console.log("=======================")
// for (var i=97; i< 122; i++){
//   console.log(String.fromCharCode(i));
// }
// console.log("=======================")

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
