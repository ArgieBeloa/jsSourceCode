// how to accept user input

// easy way with a window prompt

//let username = window.prompt("What`s your name?");
//console.log(username);

//difficult way HTML textbox

// html body

/*
<body>
     <label id = "myLabel">Enter your name:</label><br>
     <input type="text" id ="myTextBox">
     <button type = "button" id="myButton">Submit</button><br>
     
      <script src = "userInput.js"> </script>
</body>
*/
 let username;
document.getElementById("myButton").onclick = function()
{
    username = document.getElementById("myTextBox").value;
    console.log(username);

    document.getElementById("myLabel").innerHTML = "Hello "+ username;
}
