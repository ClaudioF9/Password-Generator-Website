// Array of special characters to be included in password
var specialCharacters = [
  '@',
  '%',
  '+',
  '\\',
  '/',
  "'",
  '!',
  '#',
  '$',
  '^',
  '?',
  ':',
  ',',
  ')',
  '(',
  '}',
  '{',
  ']',
  '[',
  '~',
  '-',
  '_',
  '.'
];

// Array of numeric characters to be included in password
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z'
];

// Array of uppercase characters to be included in password
var upperCasedCharacters = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z'
];

// // Function to prompt user for password options - this is the selections of choices the users have made
function getPasswordOptions() {
    let passLength = prompt("How many characters would you like in your password? (between 10 and 64 characters):");
    
    // Validate password length
    while (passLength < 10 || passLength > 64) {
    alert("Password length must be between 10 and 64 characters. Please try again.");
    passLength = prompt("How many characters woukld you like in your password? (between 10 and 64 characters):");
    }
    
    // Prompt for character types to include in password
    let lowercase = confirm("Include lowercase characters in the password?");
    let uppercase = confirm("Include uppercase characters in the password?");
    let numeric = confirm("Include numeric characters in the password?");
    let special = confirm("Include special characters in the password?");
    
    // Validate at least one character type is selected
    while (!lowercase && !uppercase && !numeric && !special) {
    alert("You must select at least one character type for the password. Please try again.");
    lowercase = confirm("Include lowercase characters in the password?");
    uppercase = confirm("Include uppercase characters in the password?");
    numeric = confirm("Include numeric characters in the password?");
    special = confirm("Include special characters in the password?");
    }
    
    return { passLength, lowercase, uppercase, numeric, special };
}
// Called and tested function to see if it working
getPasswordOptions();
console.log(getPasswordOptions());


// // Function for getting a random element from an array - 
// function getRandom(arr) {

// }

// // Function to generate password with user input - bring together all logic above to generate passowrd
// function generatePassword() {

//     //this is the variable that will be used for the new password
// let password = ""

// return password

// }


  
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
  
  
  
  