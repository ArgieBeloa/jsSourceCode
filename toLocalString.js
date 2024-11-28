/*
  toLocaleString() = returns a string with a language sensitive
                     representation of this number 

   number.toLocalString(locale, {options}) 
   
   locale = specify that language(undefied = default set in our browser)

   options = object with formatting options 
*/

let myNumber = 45

//myNumber = myNumber.toLocaleString("en-US") // us english
// myNumber = myNumber.toLocaleString("hi-IN") // hindi
//myNumber = myNumber.toLocaleString("de-DE") // standard german
 
//myNumber = myNumber.toLocaleString("en-US",{style: "currency", currency:"USD"}) 
//myNumber = myNumber.toLocaleString("hi-IN",{style: "currency", currency:"INR"}) 

//myNumber = myNumber.toLocaleString(undefined, {style:"percent"})

myNumber = myNumber.toLocaleString(undefined, {style:"unit", unit:"celsius"})
console.log(`${myNumber}`)