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

// // Function to prompt user for password options - this is the selections of choices the user has made
function getPasswordOptions() {
    let passLength = prompt("How many characters would you like in your password? (between 10 and 64 characters):");
    
    //a while statement is used to make sure the character amount falls within the specified limit and repeats if the incorrect value is typed
    while (passLength < 10 || passLength > 64) {
    alert("Password length must be between 10 and 64 characters. Please try again.");
    passLength = prompt("How many characters would you like in your password? (between 10 and 64 characters):");
    }
    
    // Prompt for character types to include in password - these are boolean 
    let lowercase = confirm("Include lowercase characters in the password?");
    let uppercase = confirm("Include uppercase characters in the password?");
    let numeric = confirm("Include numeric characters in the password?");
    let special = confirm("Include special characters in the password?");
    
    //a while statement is used to make sure at least one character type is selected
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
// getPasswordOptions();
// console.log(getPasswordOptions());


// // Function for getting a random element from an array - 
function getRandom(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

//calling the function to test if working
// console.log(getRandom(["snorker", "bird", "giraffe", "cat", "dog"]));

// // Function to generate password with user input - bring together all logic above to generate passowrd
function generatePassword() {
//pull prompt information from first function to create object
  let options = getPasswordOptions();

//create empty array to received prompt selected characters
  let newPasswordArray = [];

//If statements, if confirms prompts are true then global array will be concatenated into the new array
  if (options.lowercase) {
    newPasswordArray = newPasswordArray.concat(lowerCasedCharacters);
  }
  if (options.uppercase) {
    newPasswordArray = newPasswordArray.concat(upperCasedCharacters);
  }
  if (options.numeric) {
    newPasswordArray = newPasswordArray.concat(numericCharacters);
  }
  if (options.special) {
    newPasswordArray = newPasswordArray.concat(specialCharacters);
  }
  
  let password = "";

  //a for loop is run with the amount of loops based on the length originally selected, it then uses the newly created array and uses the 2nd function to randomise each character which is then added to the password variable
  for (let i = 0; i < options.passLength; i++) {
    password += getRandom(newPasswordArray);
  }
  
  return password;
}

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
  
  
  
  