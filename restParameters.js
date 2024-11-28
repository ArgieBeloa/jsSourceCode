/*
 Rest parameters = represents an idefinite number 
  ...              of paramaters (packs arguments into an array)

*/

let a = 1
let b = 1
let c = 1
let d = 1
let e = 1

console.log(sum(a,b,c))
console.log(sum(a,b,c,d,e))
//Rest parameters 
function sum(...userNumber) {
    
    let total = 0
    for (let number of userNumber) {
        total +=number
    }
     return total
}
//other example 
function sum(x,y,...userNumber) {
    
    let total = 0
    for (let number of userNumber) {
        total +=number
        
    }
     return total +x+y
}