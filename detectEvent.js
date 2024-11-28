// detect keypresses

window.addEventListener("keydown", move)
//indow.addEventListener("keydown", event =>console.log(event.key))
const div = document.getElementById("div")
div.style.width ="200px"
div.style.height ="200px"
div.style.backgroundColor="grey"
div.style.position ="relative"

//  <div id="div"></div>

let x = 0
let y = 0

function move(event) {
    
    switch (event.key) {

        case "ArrowDown":       
        y += 5
        div.style.top = y+"px"
            break;

       case "ArrowUp":       
        y -= 5
        div.style.top = y+"px"
            break;

            case "ArrowRight":       
            x += 5
            div.style.left= x+"px"
                break;
    
           case "ArrowLeft":       
            x -= 5
            div.style.left = x+"px"
                break;
        
    
        default:
            break;
    }
}