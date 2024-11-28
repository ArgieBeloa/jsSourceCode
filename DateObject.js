// The Data object is used to work with dates & times


//let date = new Date()
//let date = new Date(1000000000000)
//let date = new Date(2023,0,1,2,3,4,5)

//let date = new Date("January 09, 2004 00:00:00")
let date = new Date()

//year
let year = date.getFullYear()

//month
let month = date.getMonth()+1 //start from 0

//Day sunday=0
let day = date.getDay()

//hours
let hours = date.getHours()


//minutes
let minutes = date.getMinutes()

let oras =  `Hours: ${hours} minutes: ${minutes}`

//set and so on
date.setFullYear(2200)
date = date.toLocaleDateString()
document.getElementById("label").innerHTML = date
console.log(date)

//4:30:00

//