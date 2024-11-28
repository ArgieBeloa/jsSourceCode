//event

//div style 
const div = document.getElementById("mydiv")
const innerDiV = document.getElementById("innerDiV")



innerDiV.style.backgroundColor = "green"
innerDiV.style.width ="200px"
innerDiV.style.height ="200px"
innerDiV.style.border ="2px solid"

div.style.backgroundColor = "gold"
div.style.width ="500px"
div.style.height ="500px"
div.style.border ="2px solid"
div.style.display = "flex"

div.addEventListener("mouseover",changesRed)
div.addEventListener("mouseout",changesOriginal)
innerDiV.addEventListener("mouseover",changesRed, true)
innerDiV.addEventListener("mouseout",changesOriginal, true)

function changesRed() {
    this.style.backgroundColor = "black"
}
function changesOriginal()
{
    this.style.backgroundColor = "gold"
}
/*
 <divi id="mydiv">
  <div id="innerDiV"></div>
    </div>
   
*/