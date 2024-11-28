//Map = object that hold key-value pairs of any data type  

const store = new Map([
 ["T-Shirt", 20],
 ["Jeans", 30],

])

let shoppingCart= 0

//get value
shoppingCart += store.get("T-Shirt")


//add another value
store.set("Hat",100)

//delete
//store.delete("Hat")

//check if pair exist
//console.log(store.has("Hat"))

// size
//console.log(store.size)

store.forEach((value, key) => console.log(`${key}  $${value}`))