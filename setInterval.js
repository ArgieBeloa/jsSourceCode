/*

 setInterval() = invokes a function after a number of miliseconds
              asynchronous function( doesn't pause executions)

*/
let topPosition =50
   


    div() 

function div() {
    const timer1 = setInterval(display,100)
    function display() {

        const idDIV = document.getElementById("box")
        
        idDIV.style.top = topPosition+'px'
        topPosition +=2
        if(topPosition == 400)
        {
         clearInterval(timer1)
        
         const timer2 = setInterval(backDiv,100)
         function backDiv() 
         {
            const idDIV = document.getElementById("box")
          idDIV.style.top = topPosition+'px'
              topPosition -=2
             
              if(topPosition == 50)
              {
                  clearInterval(timer2)
                  div()
              }
          }
         
        }
}

//    if( topPosition <= 500)
//    {
//    //clear 
   

  

//    }

//    else if(topPosition >= 900)
//    {
   

//     const timer2 = setInterval(backDiv,100)

   

//    }



   // <div id="box"></div>
}



