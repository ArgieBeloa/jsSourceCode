

var div1 = document.getElementById('randomBox1');
var div2 = document.getElementById('randomBox2');
var div3 = document.getElementById('randomBox3');
var div4 = document.getElementById('randomBox4');
var div5 = document.getElementById('randomBox5');
var div6 = document.getElementById('randomBox6');

let  randomRoll =1;
   
//let  randomRoll=6
    
    
function roll() {
   
/*
let currentDiv;

     switch (randomRoll) {
         case 1:
            currentDiv = document.getElementById('randomBox');
             divPlacing.parentNode.replaceChild(div1,  currentDiv );
          break;
         case 2:
            currentDiv = document.getElementById('randomBox');
             divPlacing.parentNode.replaceChild(div2, currentDiv);
          break;
          case 3:
             divPlacing.parentNode.replaceChild(div3, divPlacing);
          break;
         case 4:
             divPlacing.parentNode.replaceChild(div4, divPlacing);
          break;
         case 5:
             divPlacing.parentNode.replaceChild(div5, divPlacing);
          break;
          case 6:
             divPlacing.parentNode.replaceChild(div6, divPlacing);
          break;
     
         default:
             break;
     }
     */
}

  document.getElementById("rollbutton").onclick =  function (){
   randomRoll = randomRoll = Math.floor((Math.random () *2 )+1)
   randomRoll =1
   switch ( randomRoll) {
      case 1:
         var divPlacing = document.getElementById('randomBox')
         var dot = document.getElementById('dot')
          
         divPlacing.removeChild(dot);
        var  div1 = document.getElementById('randomBox1');
         divPlacing.appendChild(div1)
         break;
   
      default:
         break;
   }
   
      
   
  }

  