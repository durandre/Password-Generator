// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  var number = [0,1,2,3,4,5,6,7,8,9
  ]

  passwordText.value = password;
}
  function generatePassword() {
    
  var number=prompt("How many characters would you like your password to be? choose a number between 8-128");
  console.log(number);
  var lower=confirm("Do you want to include lowercase characters");
  console.log(lower);
  var uppercase=confirm("Do you want to include uppercase characters");
  console.log(uppercase);
  var numeric=confirm("Do you want your password to be numeric?");
  console.log(numeric);
  var SpecChar=confirm("Do you want your password to include special characters?");
}
createPassword(number,string){
  var password="" 
  var i; 
  for(i=0;i<number)
  //run for loop where every iteration adds a random character to password//
} 
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
