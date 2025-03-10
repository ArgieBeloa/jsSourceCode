/*
  array.map() = executes a provided callback function 
               once for each array element and creates
               a new array.
*/

let numbers = [1, 2, 3, 4]

//let squares = numbers.map(square)
let squares = numbers.map(cube)

 squares.forEach(print)

function square(element)
{
  return Math.pow(element, 2)
}
function cube(element)
{
  return Math.pow(element, 3)
}
function print(element) {
    console.log(element)
}