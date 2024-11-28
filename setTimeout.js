/*
 setTimeout() = invokes a function after a number of miliseconds
              asynchronous function( doesn't pause executions)

*/

//example
let timer1 = setTimeout(firstMessage,1000) 
let timer2 = setTimeout(secondMessage,3000) 
let timer3 = setTimeout( thirdMessage,5000) 

function firstMessage() {
    alert(`Buy this course $500!`)
}
function secondMessage() {
    alert(`this is not a scam!`)
}
function thirdMessage() {
    alert(`DO ITT!`)
}

// <button id="btn">BUY</button>
document.getElementById("btn").onclick = function () {

    clearTimeout(timer1)
    clearTimeout(timer2)
    clearTimeout(timer3)
}