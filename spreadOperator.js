/*
spread operator = allows an iterable such as an  array or string 
...                to be expanded in places where zero or more arguments
                 are expected ( unpacks the element)

*/
// example with math 
let numbers =[1, 2, 3, 4, 5, 6, 7, 8, 9]
//console.log(...numbers)
let greaterValue = Math.max(...numbers)
//console.log(greaterValue)

// More example 
 let class1Name = ["Argie","Vinz","Ralph"]
 let class2Name = ["Earl","Sunny"]

 //add class 1 and 2
 class1Name.push(...class2Name)

 console.log(...class1Name)
