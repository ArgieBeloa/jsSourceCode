/*
  templete literals = delimited with (`)
                     instead of double or single quote
                     allows embedded variables expressions

*/

let userName = "Argie"
let items = 3
let total = 200

// console.log("hello ", userName)
// console.log("Your items ", items)
// console.log("Total ", total)

// console.log(`hello ${userName}`)
// console.log(`You have ${items} in your cart`)
// console.log(`Your total is ${total}`)


let text = `hello ${userName} <br> You have ${items} in your cart <br> Your total is ${total}`

// now lets combine in html label
//<label for="" id ="label"></label> 

document.getElementById("label").innerHTML = text

