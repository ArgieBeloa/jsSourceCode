
// arrayReduce() = reduces an array to a single value 

let prices = [99, 55, 66, 77, 88]

let total = prices.reduce(checkOut)

 console.log(`The total prices of array $${total}`)

function checkOut(total, element) {
    return total + element
}
