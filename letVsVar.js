/*
variable scope = where a variable is accessible

let = variables are limited to block scope{}
var = variable are limeted to a function (){}

global variable = is declared outside any function 
(if global, var will changes browser`s window properties)

*/

//var name ="argie"

doSomething()

function doSomething() {
    for (var index = 1; index < 4; index++) {
        console.log( index )
   
    }   
}


