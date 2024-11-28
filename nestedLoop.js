// nested loop 

let row = window.prompt("Enter Row")
let column = window.prompt("Enter column")

//html   <label id="label"> my rectangle</label><br>
document.getElementById("label").innerHTML +="<br>"

for (let index = 0; index <=row  ; index++) {
    
    for (let j = 0; j <=column; j++) {
      //  console.log("*") 
      document.getElementById("label").innerHTML +="+"+" "
      
    }
    document.getElementById("label").innerHTML +="<br>"
}