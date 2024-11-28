/*
canvas API = a means for drawing graphics 
            used for animations, games, data visualization 
*/
let canvas = document.getElementById("myCanvas")
let context = canvas.getContext("2d")

//line color
// context.strokeStyle = "grey" //border of context

// // line width
// context.lineWidth =5
// context.beginPath()
// context.moveTo(0,0)
// context.lineTo(250,250)
// context.lineTo(250,500)
// context.moveTo(500,0)
// context.lineTo(250,250)
// context.stroke()

//triangle
//context.lineTo(x,y)
// context.beginPath()
// context.moveTo(250,0)
// context.lineTo(0,250)
// context.lineTo(500,250)
// context.lineTo(250,0)

// //fill color
// context.fillStyle ="yellow"
// context.fill() 
// context.stroke()

//reactangle
//context.strokeRect(x, y, w, h)
//context.strokeStyle = "color"

// context.fillStyle = "grey"
// context.fillRect(0,0,250,250)
// context.strokeStyle = "grey"
// context.strokeRect(0,0,250,250)

//circle
//context.arc(x,y,radius,start angle ,end angle, counterClockwise(true or false))
// context.beginPath() 
// context.arc(250,250,100,0,2*Math.PI)
// context.stroke()

//text   
//context.fillText("message", x, y)
//
//context.font ="numberpx fontName"
//font
context.font ="50px MV BOLI"
//changes color of text
//context.fillStyle = "color"
context.fillStyle = "grey"
context.fillText("You win",100,100)



/*
  <style>
     #myCanvas{
       border: 2px solid  black;
   
     }

     //<canvas id="myCanvas" width="500px" height="500px"></canvas>

*/