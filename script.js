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



// Write password to the #password input
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

var characters = lowercaseChar;
var password = "";
if (uppercaseCheck && numberCheck && specialCheck){
  characters += uppercaseChar + numberChar + specialChar;

}else if (uppercaseCheck && numberCheck){
  characters += uppercaseChar + numberChar;

}else if (numberCheck && specialCheck){
  characters += numberChar + specialChar;

}else if (uppercaseCheck && specialCheck){
  characters += uppercaseChar + specialChar;

}else if (uppercaseCheck){
  characters += uppercaseChar;

}else if(numberCheck){
  characters += numberChar;

}else if (specialCheck){
  characters += specialChar;

}else{
  characters === lowercaseChar;
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

