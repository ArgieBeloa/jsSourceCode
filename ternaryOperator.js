// shorcut in if else statement
//condition ? expreIftrue : expreIfalse

let age =18
//let adult = isAdult(age)

let player = false


isWin(player)


function isAdult(age) {
    /*
    if (age >=18) {
        return true
    } else {
        return false
    }
    */
   return age >=18 ? true : false
}
function isWin(player) {
    /*
    if (age >=18) {
        return true
    } else {
        return false
    }
    */
   return player ? console.log("win") : console.log("lose")
}