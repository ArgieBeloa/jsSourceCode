const divForGrade = document.getElementById("Div3")
let newDiv = document.createElement("div")
newDiv.innerHTML ="this is new div"
newDiv.style.width ="200px"
newDiv.style.height ="200px"
newDiv.style.backgroundColor ="grey"
newDiv.style.border ="2px solid"

divForGrade.appendChild(newDiv)