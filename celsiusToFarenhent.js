/*
Formula:

c = (f -32) * 5 / 9
f = (c * 5)/ 5 + 32

*/
var userInput

var celsiusToFarenhent
var farenhentToCelsius 

//html code
/*
body>
    <label >Enter number to convert celsius and farenhent:</label> <br>
    <input type="text" id ="userInput"> <br>
    <button id = "converToFarenhentButtonID"> convert to farenhent </button> 
    <button id = "converToCelsiusButtonID"> convert to celsius </button><br> <br>
    <label id = "celsiusID"></label> <br>
    <label id ="farenhentID"></label> <br>
      <script src = "celsiusToFarenhent.js"> </script>
</body>
*/

document.getElementById("converToFarenhentButtonID").onclick = function()
{
    userInput = document.getElementById("userInput").value;
    userInput = Number(userInput)

    celsiusToFarenhent = (userInput * 9)/5 + 32
   // console.log("Celsius to Farenhent ",celsiusToFarenhent)
    document.getElementById("farenhentID").innerHTML = "Celsius to Farenhent "+celsiusToFarenhent;
}
document.getElementById("converToCelsiusButtonID").onclick = function()
{
    userInput = document.getElementById("userInput").value;
    userInput = Number(userInput)
 
    farenhentToCelsius =  (userInput -32) * 5 / 9
   // console.log("Farenhent to Celsius ",farenhentToCelsius)
   document.getElementById("celsiusID").innerHTML = "Farenhent to Celsius "+farenhentToCelsius;
}

