let bodyElement = document.body

let parentContainer = document.querySelector("#parentContainer")
  parentContainer.style.backgroundColor = "black"
  parentContainer.style.width ="800px"
  parentContainer.style.height ="800px"

  parentContainer.style.display = "flex"
  parentContainer.style.alignItems ="center"
  parentContainer.style.justifyContent ="center"
  
let boxPrevious = document.getElementById("previousBox")
let boxCurrent = document.getElementById("currentBox")
let boxNext = document.getElementById("nextBox")

bodyElement.style.display = "flex"
bodyElement.style.alignItems ="center"
bodyElement.style.justifyContent ="center"

boxPrevious.style.width ="200px"
boxCurrent.style.width ="300px"
boxNext.style.width ="200px"

boxPrevious.style.height ="200px"
boxCurrent.style.height ="300px"
boxNext.style.height ="200px"

boxPrevious.style.backgroundColor ="Grey"
boxCurrent.style.backgroundColor ="Green"
boxNext.style.backgroundColor ="yellow"

document.getElementById("btn").onclick = function () {
  
  boxPrevious.style.backgroundColor ="Green"
  boxCurrent.style.backgroundColor = "yellow"

}
/*
  .firstElement
  .lastElement
  .parentElement
  .nextElementSibling
  .previousElementSibling
  .children[]
  array.From(.children)

   <div id="parentContainer">

      <div id="previousBox"></div> <br>
      <div id="currentBox"></div> <br>
      <div id="nextBox"></div> <br>
      <button id="btn">next</button>
   </div>
*/