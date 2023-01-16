// // Array of special characters to be included in password
// var specialCharacters = [
//   '@',
//   '%',
//   '+',
//   '\\',
//   '/',
//   "'",
//   '!',
//   '#',
//   '$',
//   '^',
//   '?',
//   ':',
//   ',',
//   ')',
//   '(',
//   '}',
//   '{',
//   ']',
//   '[',
//   '~',
//   '-',
//   '_',
//   '.'
// ];

// // Array of numeric characters to be included in password
// var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// // Array of lowercase characters to be included in password
// var lowerCasedCharacters = [
//   'a',
//   'b',
//   'c',
//   'd',
//   'e',
//   'f',
//   'g',
//   'h',
//   'i',
//   'j',
//   'k',
//   'l',
//   'm',
//   'n',
//   'o',
//   'p',
//   'q',
//   'r',
//   's',
//   't',
//   'u',
//   'v',
//   'w',
//   'x',
//   'y',
//   'z'
// ];

// // Array of uppercase characters to be included in password
// var upperCasedCharacters = [
//   'A',
//   'B',
//   'C',
//   'D',
//   'E',
//   'F',
//   'G',
//   'H',
//   'I',
//   'J',
//   'K',
//   'L',
//   'M',
//   'N',
//   'O',
//   'P',
//   'Q',
//   'R',
//   'S',
//   'T',
//   'U',
//   'V',
//   'W',
//   'X',
//   'Y',
//   'Z'
// ];

// // Function to prompt user for password options - this is the selections of choices the users have made
// function getPasswordOptions() {

// }

// // Function for getting a random element from an array - 
// function getRandom(arr) {

// }

// // Function to generate password with user input - bring together all logic above to geneerate passowrd
// function generatePassword() {

//   let password = "something"

//   return password

// }

//---
function generatePassword() {
    let password = "";
    let lowercaseLetters = "abcdefghijklmnopqrstuvwxyz";
    let uppercaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let numbers = "0123456789";
    let specialCharacters = "!@#$%^&*()_+-=[]{};':\"\\|,.<>/?`~";
    let possibleCharacters = lowercaseLetters + uppercaseLetters + numbers + specialCharacters;
    for (let i = 0; i < 64; i++) {
      let randomIndex = Math.floor(Math.random() * possibleCharacters.length);
      password += possibleCharacters.charAt(randomIndex);
    }
    return password;
  }
  //----
  
  
  
  //note you can add more functions!
  
  // Get references to the #generate element
  var generateBtn = document.querySelector('#generate');
  
  // Write password to the #password input
  function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector('#password');
  
    passwordText.value = password;
  }
  
  // Add event listener to generate button
  generateBtn.addEventListener('click', writePassword);
  
  
  
  
  //basic generation tool
  // function generatePassword(length) {
  //   let password = "";
  //   let possibleCharacters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+-=[]{};':\"\\|,.<>/?`~";
  //   for (let i = 0; i < length; i++) {
  //     password += possibleCharacters.charAt(Math.floor(Math.random() * possibleCharacters.length));
  //   }
  //   return password;
  // }
  
  // console.log(generatePassword(12));
  
  // //multiple array password generatore
  // function generatePassword(length) {
  //   let password = "";
  //   let lowercaseLetters = "abcdefghijklmnopqrstuvwxyz";
  //   let uppercaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  //   let numbers = "0123456789";
  //   let specialCharacters = "!@#$%^&*()_+-=[]{};':\"\\|,.<>/?`~";
  //   let possibleCharacters = lowercaseLetters + uppercaseLetters + numbers + specialCharacters;
  //   for (let i = 0; i < length; i++) {
  //     let randomIndex = Math.floor(Math.random() * possibleCharacters.length);
  //     password += possibleCharacters.charAt(randomIndex);
  //   }
  //   return password;
  // }
  