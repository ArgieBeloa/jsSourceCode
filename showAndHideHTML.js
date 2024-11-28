const image = document.getElementById("myImage")
const button = document.getElementById("btn")

image.style.width = "400px"
image.style.height = "400px"

button.addEventListener("click",()=>{

    if (image.style.display == "none") {
        image.style.display ="block"
    }
    else{
        image.style.display ="none "
    
    }
})

/*
 <image id="myImage" src ="myths-and-mountains-intro-slide3-1.png" style ="display: none">

    <button id="btn">toggle</button>

*/