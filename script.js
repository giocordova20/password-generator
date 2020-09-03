// Assignment Code
var generateBtn = document.querySelector('#generate')

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword)

// Write password to the #password input
function writePassword() {
  var password = generatePassword()
  var passwordText = document.querySelector('#password')

  console.log("password: " + password);
  console.log("password length: " + password.length);

  passwordText.value = password
}

// This function executed when the Generate Password button is clicked
function generatePassword() {
  var pwLength = prompt("Enter a numeric value for password length between 8 and 128 to determine the password length.");
  // Check if the input is a number by using parseInt to convert the input 
  // to a number value then using isNaN to verify whether the result of 1. is a number
  var numberCheck = isNaN(parseInt(pwLength)); 
  console.log("pwLength: "+ pwLength)


  var lengthTooShort = "The password length you selected is less than 8 characters in length.";
  var lengthTooLong = "The password length you selected is greater than 128 characters in length.";
  var lengthNotNum = "The the value entered for password length is not a numeric value. Please select a numeric value between 8 and 128.";
  
  var pwCharacterOptions = "";
  var password = "";
  // Verify the pw length entered is <=8 and >=128, and return the value. First check that the length is at least 8.
  // Second check if it is greater than 128. Third verify that the character entered is numeric.
  if (pwLength == null) {
    return;
  } else if (pwLength < 8) {
    alert(lengthTooShort)
      return;
  } else if (pwLength > 128) {
    alert(lengthTooLong)
      return;
  } else if (numberCheck) {
    alert(lengthNotNum);
      return
  } else if (pwLength >= 8 || pwLength <= 128) {
    pwLength = parseInt(pwLength);
  }
  console.log("pwlenth: " + pwLength + ";;; type: " + typeof (pwLength));

  var askLower = "Would you like to include lower case characters?";
  var askUpper = "Would you like to include upper case characters?";
  var askNum = "Would you like to include numeric characters?";
  var askSpec = "Would you like to include special characters?";
  var makeSelection = "Please select at at least one: lowercase, uppercase, number, special character.";

  // Confirm if the user wants to use lower case and append the lower case string to the 
  var lowerconfirm = confirm(askLower);
  if (lowerconfirm) {
    pwCharacterOptions = pwCharacterOptions.concat(lower);
    console.log(pwCharacterOptions);
    lowerconfirm = true;
  } else {
    lowerconfirm = false;
  }
  console.log("lowerconfirm: " + lowerconfirm);

  // Confirm if the user wants to use upper case
  var upperconfirm = confirm(askUpper);
  if (upperconfirm) {
    pwCharacterOptions = pwCharacterOptions.concat(upper);
    console.log(pwCharacterOptions);
    upperconfirm = true;
  } else {
    upperconfirm = false;
  }
  console.log("upperconfirm: " + upperconfirm);

  // Confirm if the user wants to use numeric characters
  var numconfirm = confirm(askNum);
  if (numconfirm) {
    pwCharacterOptions = pwCharacterOptions.concat(num);
    console.log(pwCharacterOptions);
    numconfirm = true;
  } else {
    numconfirm = false;
  }
  console.log("numconfirm: " + numconfirm);

  // Confirm if the user wants to use special characters
  var specialconfirm = confirm(askSpec);
  if (specialconfirm) {
    pwCharacterOptions = pwCharacterOptions.concat(spec);
    console.log(pwCharacterOptions);
    specialconfirm = true;
  } else {
    specialconfirm = false;
  }
  console.log("specialconfirm: " + specialconfirm);

  // Make sure the user selects at least one option
  if (lowerconfirm == false && upperconfirm == false && numconfirm == false && specialconfirm == false){
    console.log("inside of the check")
    alert(makeSelection)
  }

  pwCharacterOptionsArray = pwCharacterOptions.split('')
  console.log("pwCharacterOptionsArray::  "+ pwCharacterOptions)
  // password = pwCharacterOptionsArray[Math.floor(Math.random()*pwCharacterOptionsArray.length)];
  // console.log("password: " + password);

  // Generate the pw based on the length and options input
  for (var i = 0; i < pwLength; i++){
    password = password.concat(pwCharacterOptionsArray[Math.floor(Math.random()*pwCharacterOptionsArray.length)]);
  }
  return password;

  var noPWset = "No pw set!!!"
  return noPWset

}


// var lower = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm','n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var lower = "abcdefghijklmnopqrstuvwxyz";
// console.log("split of lower2 " + lower2.split(''));
// var upper = lower.map(function(x){return x.toUpperCase();}); // Convert lower array to upper case
var upper = lower.toUpperCase();
// console.log("upper: " + upper);
// console.log("upper2 " + upper2);

var num = "0123456789";
// console.log(num);
// console.log(num.split(''));

var spec = " !\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~";
// console.log(spec);
// console.log(spec.split(''));

// Generate lower case a-z, 97-122
// Use Math.random to generate a random decimal and multiply it by 26 to get 1-26 for
// the letters of the alphabet a-z. Add 97 to the random number to get the ascii value
// for the lower case letter.
// function genLower() {
//   return String.fromCharCode(Math.floor(Math.random() * 26) + 97)
// }
// console.log(genLower());
// console.log("=======================")

// Generate upper case A-Z, 65-90
// Use Math.random to generate a random decimal and multiply it by 26 to get 1-26 for
// the letters of the alphabet A-Z. Add 65 to the random number to get the ascii value
// for the upper case letter.
// function genUpper() {
//   return String.fromCharCode(Math.floor(Math.random() * 26) + 65)
// }
// console.log(genUpper());
// console.log("=======================")

// Generate number from 0-1, 48-57
// Use Math.random to generate a random decimal and multiply it by 10 to get 0-9 for
// the numbers 0-9. Add 48 to the random number to get the ascii value
// for the number.
// function genNumber() {
//   return String.fromCharCode(Math.floor(Math.random() * 10) + 48)
// }
// console.log(genNumber());
// console.log("=======================")

// Generate special characters from the list between the double quotes " !"#$%&'()*+,-./:;<=>?@[\]^_`{|}~"
// Used an array because the special characters have nonsequential ascii values and it's easier to have them
// in an array
// function genSpecialChar() {
//   var specCharArray = [' ', '!', '#', '$', '%', '&', "'", '(', ')', '*', '+', ',', '-', '.', '/', ':', ';',
//                         '<', '=', '>', '?', '@', '[', '\\', ']', '^', '_', '`', '{', '|', '}', '~']
//   const randomSpecCharArray =
//     specCharArray[Math.floor(Math.random() * specCharArray.length)]

//   return randomSpecCharArray
// }
// console.log("'" + genSpecialChar() + "'")
// console.log('=======================')

// Print out all characters using ascii characters
// console.log("=======================");
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
// var specCharArray = [" ", "!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/",
// ":", ";", "<", "=", ">", "?", "@", "[", "\\", "]", "^", "_", "`", "{", "|", "}", "~" ]
// console.log(specCharArray);
// console.log("=======================")
