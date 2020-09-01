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
// the letters of the alphabet a-z. Add 97 to the random number to get the ascii value
// for the lower case letter.
function genLower() {
  return String.fromCharCode(Math.floor(Math.random() * 26) +97);
}
console.log(genLower());
console.log("=======================")

// Generate upper case A-Z, 65-90 
// Use Math.random to generate a random decimal and multiply it by 26 to get 1-26 for 
// the letters of the alphabet A-Z. Add 65 to the random number to get the ascii value
// for the upper case letter.
function genUpper() {
  return String.fromCharCode(Math.floor(Math.random() * 26) +65);
}
console.log(genUpper());
console.log("=======================")

// Generate number from 0-1, 48-57 
// Use Math.random to generate a random decimal and multiply it by 10 to get 0-9 for 
// the numbers 0-9. Add 48 to the random number to get the ascii value
// for the number.
function genNumber() {
  return String.fromCharCode(Math.floor(Math.random() * 10) +48);
}
console.log(genNumber());
console.log("=======================")

// Generate special characters from the list between the double quotes " !"#$%&'()*+,-./:;<=>?@[\]^_`{|}~"
// Used an array because the special characters have nonsequential ascii values and it's easier to have them
// in an array
function genSpecialChar() {  
  var specCharArray = [" ", "!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", 
                       ":", ";", "<", "=", ">", "?", "@", "[", "\\", "]", "^", "_", "`", "{", "|", "}", "~" ];
  const randomSpecCharArray = specCharArray[Math.floor(Math.random() * specCharArray.length)]
  
  return randomSpecCharArray;
}
console.log("'"+genSpecialChar()+"'");
console.log("=======================");



// Print out all characters using ascii characters
console.log("=======================");
// for (var i=32; i< 48; i++){
//   console.log(String.fromCharCode(i));
// }
// for (var i=58; i< 65; i++){
//   console.log(String.fromCharCode(i));
// }
// for (var i=91; i< 97; i++){
//   console.log(String.fromCharCode(i));
// }
// for (var i=123; i< 127; i++){
//   console.log(String.fromCharCode(i));
// }
var specCharArray = [" ", "!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", 
":", ";", "<", "=", ">", "?", "@", "[", "\\", "]", "^", "_", "`", "{", "|", "}", "~" ]
console.log(specCharArray);
console.log("=======================")


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


