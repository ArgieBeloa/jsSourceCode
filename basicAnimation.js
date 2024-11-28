//basic animation

const div = document.getElementById("div")
div.style.width ="200px"
div.style.height ="200px"
div.style.backgroundColor="grey"
div.style.position ="relative"

const btn = document.getElementById("btn")
btn.addEventListener("click", begin)


function begin()
{
    let timerID =null
    // let x =0
    // let degrees =0
    let scaleX = 1
    let scaleY = 1

    timerID = setInterval(frame,50)

    function frame() {
        
        // if(x >= 400 &&  degrees >=760-180)
        // {
          
        //   clearInterval(timerID)
        // }
        // else{
        //     x +=3
        //     degrees +=5
        //     div.style.left = x+"px"
        //     div.style.transform ="rotateZ("+degrees+"deg)"
        // }
        if(scaleX>=2 || scaleY>=2)
        {
          
          clearInterval(timerID)
        }
        else{
            scaleX  +=0.1  
             scaleY +=0.1  
            div.style.transform ="scale("+scaleX+","+scaleY+")"
        }
    }

}
/*
<button id="btn">start Animation</button> <br><br>
  <div id="div"></div>

*/