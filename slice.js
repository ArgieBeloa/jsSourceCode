/* 
  slice () extracts a section and return it as a new string,
   without modifying the original string.
   stringName.slice(0,0) first and last index
*/
let fullmame = "Arlyn Beloa"
let firstName 
let lastName


firstName = fullmame.slice(fullmame.charAt(0), fullmame.indexOf(" "))
lastName = fullmame.slice(fullmame.lastIndexOf(" "))


console.log("Your first name is ", firstName)
console.log("Your last name is ", lastName)