# password-generator

This password generator prompts the user to enter a password length between 8 and 128 characters in length. It will alert the user if the password length input is less than 8 characters, greater than 128 characters, or non-numeric. It then asks the user what character types to include: lower case, upper case, numerical, and special characters. The full list of available characters for each type are listed below. 

lower case = "abcdefghijklmnopqrstuvwxyz";         
upper case = lower.toUpperCase();                  
numerical = "0123456789";                          
special characters = " !"#$%&'()*+,-./:;<=>?@[\]^_`{|}~"

The generator concats all the selections into one string, and then randomly selects characters from that string to create the password. Due to the randomization, some types will not appear in the password. 

I tried to make sure all selected types appeared in the password, but was not able to finish the logic. The code for that is in a separte .js file, CharacterCheck.js. I will work on that at a later time.

The 'Copy Password' button copies the generated password to the clipboard to make it ready for paste into another application.