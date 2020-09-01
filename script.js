// Assignment Code
var generateBtn = document.querySelector('#generate')

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword)

// Write password to the #password input
function writePassword() {
  var password = generatePassword()
  var passwordText = document.querySelector('#password')

  passwordText.value = password
}

// This function executed when the Generate Password button is clicked
function generatePassword() {
  var pwlength = prompt(
    "Enter a numeric value for password length between 8 and 128 to determine the password length."
  );
  var numberCheck = isNaN(parseInt(pwlength)); // Check if the input is a number by 1. using parseInt to convert the input
  // to a number value 2. using isNaN to verify whether the result of 1. is a number

  // Verify the pw length entered is <=8 and >=128, and return the value. First check that the length is at least 8.
  // Second check if it is greater than 128. Third verify that the character entered is numeric.
  if (pwlength < 8) {
    alert(
      "The password length you selected is less than 8 characters in length."
    );
  } else if (pwlength > 128) {
    alert(
      "The password length you selected is greater than 128 characters in length."
    );
  } else if (numberCheck) {
    alert(
      "The the value entered for password length is not a numeric value. Please select a numeric value between 8 and 128."
    );
  } else if (pwlength >= 8 || pwlength <= 128) {
    pwlength = parseInt(pwlength);
  }

  // Confirm if the user wants to use lower case 
  var lowerconfirm = confirm("Would you like to include lower case characters?");
  if (lowerconfirm) {
    lowerconfirm = true;
  } else {
    lowerconfirm = false;
  }
  console.log("lowerconfirm: " + lowerconfirm);

  // Confirm if the user wants to use upper case
  var upperconfirm = confirm("Would you like to include upper case characters?");
  if (upperconfirm) {
    upperconfirm = true;
  } else {
    upperconfirm = false;
  }
  console.log("upperconfirm: " + upperconfirm);


  // Confirm if the user wants to use numeric characters
  var numconfirm = confirm("Would you like to include numeric characters?");
  if (numconfirm) {
    numconfirm = true;
  } else {
    numconfirm = false;
  }
  console.log("numconfirm: " + numconfirm);

  // Confirm if the user wants to use special characters
  var specialconfirm = confirm("Would you like to include special characters?");
  if (specialconfirm) {
    specialconfirm = true;
  } else {
    specialconfirm = false;
  }
  console.log("specialconfirm: " + specialconfirm);
}

// Generate lower case a-z, 97-122
// Use Math.random to generate a random decimal and multiply it by 26 to get 1-26 for
// the letters of the alphabet a-z. Add 97 to the random number to get the ascii value
// for the lower case letter.
function genLower() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 97)
}
// console.log(genLower());
// console.log("=======================")

// Generate upper case A-Z, 65-90
// Use Math.random to generate a random decimal and multiply it by 26 to get 1-26 for
// the letters of the alphabet A-Z. Add 65 to the random number to get the ascii value
// for the upper case letter.
function genUpper() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 65)
}
// console.log(genUpper());
// console.log("=======================")

// Generate number from 0-1, 48-57
// Use Math.random to generate a random decimal and multiply it by 10 to get 0-9 for
// the numbers 0-9. Add 48 to the random number to get the ascii value
// for the number.
function genNumber() {
  return String.fromCharCode(Math.floor(Math.random() * 10) + 48)
}
// console.log(genNumber());
// console.log("=======================")

// Generate special characters from the list between the double quotes " !"#$%&'()*+,-./:;<=>?@[\]^_`{|}~"
// Used an array because the special characters have nonsequential ascii values and it's easier to have them
// in an array
function genSpecialChar() {
  var specCharArray = [' ', '!', '#', '$', '%', '&', "'", '(', ')', '*', '+', ',', '-', '.', '/', ':', ';',
                        '<', '=', '>', '?', '@', '[', '\\', ']', '^', '_', '`', '{', '|', '}', '~']
  const randomSpecCharArray =
    specCharArray[Math.floor(Math.random() * specCharArray.length)]

  return randomSpecCharArray
}
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
