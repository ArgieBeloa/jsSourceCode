/*
   array.filter() = creates a new array with all elements
                   that pass the test provided by a function

*/

let ages = [18, 29, 22, 24, 28, 11, 9, 10]
let adults = ages.filter(checkAges)
let lowerThan18 = ages.filter(checkAgesLess18)
lowerThan18.forEach(printLower18)
adults.forEach(printHigher18)

function checkAges(elements) {
     return elements >= 18
}
function checkAgesLess18(elements) {
    return elements < 18
}
function printLower18(element) {
    console.log("lower than 18: ",element)
}
function printHigher18(element) {
    console.log("adults: ",element)
}