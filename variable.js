// variable is a container for storing data
// A variable behaves as if it was value that it contains

//two steps :
// 1. declaration ( var, let, const)
// 2. Assignment ( = assigment operator)

let age = 20; // numbe
let firstName = "Argie"; //string
let student = true; // boolean

let message = "Hello World";

console.log("hellow ",firstName);
console.log("Your age is ",age);
console.log("Student ",student);

// how to display value in html + javascript
// we need tags example <p id= "sample"> </p>
// then we connect them by line 20

//document.getElementById("p1").innerHTML = "hello "+ firstName;
//document.getElementById("p2").innerHTML = "Your age is  "+ age + " Years old";
//document.getElementById("p3").innerHTML = "Are you a student "+ student;
document.getElementById("message").innerHTML = message;