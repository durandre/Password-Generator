// Assignment Code
var generateBtn = document.querySelector("#generate");


var enter;
var confirmNumber = confirm("Click ok to confirm if you would like to include numbers");
var confirmspecialChar = confirm("Click ok to confirm if you would like to include special characters");
var confirmUppercase = confirm("Click ok to confirm if you would like to include uppercase characters");
var confirmLowercase = confirm("Click ok to confirm if you would like to include lowercase characters");

function generatePassword() {

  enter = parseInt(prompt("How many characters would you like your password? Choose between 8 and 128"));

  if (!enter) {
    alert("This needs a value");
  } else if (enter < 8 || enter > 128) {

    enter = parseInt(prompt("You must choose between 8 and 128"));

    var characters = lowercase;
    var password = "";
    if (uppercaseCheck && numberCheck && specialCharCheck) {
      characters += uppercase + number + specialChar;

    } else if (uppercaseCheck && numberCheck) {
      characters += uppercase + number;

    } else if (numberCheck && specialCheck) {
      characters += number + specialChar;

    } else if (uppercaseCheck && specialCheck) {
      characters += uppercase + specialChar;

    } else if (uppercaseCheck) {
      characters += uppercase;

    } else if (numberCheck) {
      characters += number;

    } else if (specialCheck) {
      characters += specialChar;

    } else {
      characters === lowercase;
    }

    for (var i = 0; i < passwordLength; i++) {
      password += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return password;

    function writePassword() {
      var passLength = prompt("How many characters out of 8-128 do you want your password to be?");
      var length = passLength
      characters = "`~!@#$%^&*()_+\*-=[];'/.,<>?:ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890",
        passwordText = "";


      for (var i = 0, n = characters.length; i < length; ++i) {
        passwordText += characters.charAt(Math.floor(Math.random() * n));
      }
    }

    console.log(passwordText);

    var generatedPassword = document.querySelector("#password");



    function resetText() {
      document.getElementById("password").value = "Your Secure Password";
    }

    // Add event listener to generate button
    generateBtn.addEventListener("click", writePassword)}}
