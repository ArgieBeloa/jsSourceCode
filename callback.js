/*
   callback = a function passed as an argument to another 
              to another function
*/
 // example

 sum(2,7,displayLabel)
 
 function sum(x, y, callback) {
    
    let result = x + y
    callback( result) 
 }

 function displayConsole(output) {
     console.log(output)
 }
 function displayLabel(output) {
    //html needs
    // <label for="" id="label"></label>
    document.getElementById("label").innerHTML = output
 }