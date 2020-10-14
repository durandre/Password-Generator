// Assignment Code
var generateBtn = document.querySelector("#generate");
var number = "0123456789";
var specialChar = "`~!@#$%^&*()_+/*-[]\:'?";
var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lowercase = "abcdefghijklmnopqrstuvwxyz";
var confirmLength = "";
var confirmNumber;
var confirmspecialChar;
var confirmUppercase;
var confirmLowercase;
var passwordLength;

function determineLength() {
  confirmLength = prompt("Choose how many characters you'd like your password to be between 8-128 characters : ");
    if (confirmLength < 8){
      alert("Password length must be a number between 8-128 characters");
      determineLength();
    }else if (confirmLength>128){
      alert("Password length must be a number between 8-128 characters");
      determineLength();
    }
    var confirmNumber = confirm("Click ok to confirm if you would like to include numbers");
    var confirmspecialChar = confirm("Click ok to confirm if you would like to include special characters");
    var confirmUppercase = confirm("Click ok to confirm if you would like to include uppercase characters");
    var confirmLowercase = confirm("Click ok to confirm if you would like to include lowercase characters");


}
  function generatePassword() {

    determineLength();
    console.log(confirmLength);
    determineNumber();
    console.log(numberCheck);
    determineSpec();
    console.log(specialCharCheck);
    determineUppercase();
    console.log(uppercaseCheck);
    determineLowercase();
    console.log(lowercaseCheck);
}

var characters = lowercase;
var password = "";
if (uppercaseCheck && numberCheck && specialCharCheck){
  characters += uppercase + number + specialChar;

}else if (uppercaseCheck && numberCheck){
  characters += uppercase + number;

}else if (numberCheck && specialCheck){
  characters += number + specialChar;

}else if (uppercaseCheck && specialCheck){
  characters += uppercase + specialChar;

}else if (uppercaseCheck){
  characters += uppercase;

}else if(numberCheck){
  characters += number;

}else if (specialCheck){
  characters += specialChar;

}else{
  characters === lowercase;
}

  for(var i = 0; i < passwordLength; i++){
    password += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return password;

function writePassword() {
  var password1 = "";
  password1 = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password1;
}

function resetText(){
  document.getElementById("password").value = "Your Secure Password";
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

