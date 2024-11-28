// useful string properties and method

let username = "Argie P Beloa"
let phoneNumber = "0951-2190-538"
/*
    stringName.lenght = know the number of character pass as number.
    stringName.charAt(0) = by its index we can see the letter of it.
    stringName.indexOf("_") = we can know if the blank we put is exits or present then it provides the given index (position).
    stringName.lastIndexOf("_") = we can know the last _ use or match and return its index.
    stringName = stringName.trim() = remove white spaces.
    stringName.toUpperCase()  = to upper case
    stringName.toLowerCase() = to lower case
    stringName = stringName.replaceAll("-","/") first argument the exits we want to changes and second the replacement.
*/
phoneNumber = phoneNumber.replaceAll("-","/")

console.log(phoneNumber);