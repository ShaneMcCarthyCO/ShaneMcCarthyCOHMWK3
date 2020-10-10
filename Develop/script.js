
// update
var lowercase = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
var Uppercase = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]
var Numbers = ["1","2","3","4","5","6","7","8","9"]
var SpecialChar = ["!","#","$","%","&","*","+",",","-",".","/",":",";","<","=",">","?","@","[","\","]","^","_","`","{","|","}"]

function passwordChoice() {
var length = parseInt(prompt("How many characters would you like your password to be?"))

if(isNaN(length)===true){
alert("Please provide password using numbers")
return
}
if(length < 8){
alert("Your password is too short")
return
}

if(length > 128){
  alert("Your password is too long")
return 
}
// confirm variables for the user to answer
var hasLowerCase = confirm("Click OK to use lower case letters") 
var hasUpperCase = confirm("Click OK to use upper case letters") 
var hasNumbers = confirm("Click OK to use numbers") 
var hasSpecialChar = confirm("Click OK to use special characters") 

if(hasLowerCase === false && hasUpperCase === false && hasNumbers === false && hasSpecialChar === false){
alert("Please select at least one character type")
return
}

var passwordOptions = {
  length:length,
  hasLowerCase:hasLowerCase,
  hasUpperCase: hasUpperCase,
  hasNumbers: hasNumbers,
  hasSpecialChar: hasSpecialChar, 

}
return passwordOptions
}
function randomchoice(Array) {
var randomIndex = Math.floor(Math.random() *Array.length)
var randomElement = Array[randomIndex]
return randomElement

}

// update
function generatePassword() {
 var options = passwordChoice()
 var result = []
 var possibleChar = []
 var guaranteedChar = []
 if(options.hasLowerCase){
   possibleChar = possibleChar.concat(lowercase)
   guaranteedChar.push(randomchoice(lowercase))
 }
 if(options.hasUpperCase){
  possibleChar = possibleChar.concat(Uppercase)
  guaranteedChar.push(randomchoice(Uppercase))
}
if(options.hasNumbers){
  possibleChar = possibleChar.concat(Numbers)
  guaranteedChar.push(randomchoice(Numbers))
}
if(options.hasSpecialChar){
  possibleChar = possibleChar.concat(SpecialChar)
  guaranteedChar.push(randomchoice(SpecialChar))
}
for (var i =0; i < options.length; i++){
var possibleCharacter = randomchoice(possibleChar)
result.push(possibleCharacter)
}
for (var i = 0; i < guaranteedChar.length; i++){
result[i] = guaranteedChar[i]

}
return result.join("")
}

// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
