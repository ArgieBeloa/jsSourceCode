// Random number in js 
//let x = (Math.random () *10 )+1 to get non zero value
let x = (Math.random () * 10 )+1
x = Math.floor(x) 

console.log(x)
// now let`s display it to webpage

// html needs
/*
    
        <label id = "firstRandom">0</label> <br>
        <label id = "secondRandom">0</label>  <br>
        <label id = "thirdRandom">0</label>  <br>
        
        <button id ="rollButton">
            Roll
        </button>

*/
let first;
let second;
let third;

document.getElementById("rollButton").onclick = function ()
{
    first = Math.floor(Math.random()*6 +1)
    second = Math.floor(Math.random()*6 +1)
    third = Math.floor(Math.random()*6 +1)

    document.getElementById("firstRandom").innerHTML = first 
    document.getElementById("secondRandom").innerHTML = second
    document.getElementById("thirdRandom").innerHTML = third 
}
