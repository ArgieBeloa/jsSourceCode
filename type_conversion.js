/*
 Type conversion = change the datatype of a value to another (String, , booleans)

*/

let age = window.prompt("How old are you?");

/*
// string to int   intname = Number(intname) 
// so we can see what data type we want to know using console.log("The data type is ",typeof ___)
//console.log("The data type is ",typeof age)
age = Number(age)
console.log("The data type is ",typeof age)
age += 1;
console.log("Your age is", age)
*/
let x = "3.1416"
let y;
let z;

 
x = Number(x)
y = String(x)
z = Boolean("asdf")


console.log(z,typeof z)
console.log(y,typeof y)