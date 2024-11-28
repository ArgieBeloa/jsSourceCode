// arrow function = compact alternative to a traditional function
// =>
  
//example

// const greeting = function(username) {
//      console.log(`Welcome ${username}`)
// }
// convert to arrow function

// const greeting = (username) => console.log(`Welcome ${username}`)
// greeting("Argie")
 let randomNumber =Math.floor((Math.random () * 10 )+1)
const percent = (x, y) => x /y *100

   //  <label for="" id="label"></label>
console.log(`${percent( randomNumber ,100)}%`)
//document.getElementById("label").innerHTML = `${percent( randomNumber ,100)}%`
//another example
   
let grades = [99,100,77,80,90]
grades.sort((x,y) => y-x )

grades.forEach( (element) => console.log(element))

//structure
 // (a, b) => you want to do 