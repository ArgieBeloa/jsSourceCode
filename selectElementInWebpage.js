
// let element = document.getElementById("mytitle")
// element.style.backgroundColor ="grey"

// let fruits = document.getElementsByName("fruits")

// fruits.forEach(fruit =>{

//     if(fruit.checked)
//     {
//        console.log(fruit.value)
//     }
// })

//querySelector(like css targeting)
// id = #
//class = .

// let element = document.querySelector("#mytitle")
// element.style.backgroundColor ="black"

let elements = document.querySelectorAll(".div")


elements.forEach(element =>{

element.style.width = "500px"
element.style.height = "500px"
element.style.backgroundColor ="black"
})

/*
<h1 id="mytitle">this is menu</h1>
<input type="radio" name ="fruits" value="Apple" checked="checked">
<label for="Apple">Apple</label> <br>

<input type="radio" name ="fruits" value="Orange" >
<label for="Orange">Orange</label> <br>

<input type="radio" name ="fruits" value="Manggo" >
<label for="Manggo">Manggo</label> <br>

<input type="radio" name ="fruits" value="Grapes" >
<label for="Grapes">Grapes</label> <br>

<div class="div"></div>
<br>
<div class="div"></div>
    <script src="selectElementInWebpage.js"></script>

*/
