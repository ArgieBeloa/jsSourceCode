
let fruits =     ["Apple", "Orange", "Manggo","Kiwi"]
let vegetables = ["Carrot", "Eggplant", "Tomotoes","Potatoes"]
let meats =      ["Eggs", "Chicken", "Pork", "Red meat"]

//example of 2d array
let grocerys = [fruits, vegetables, meats]

// how to changes element of 2darray 
// nameOf2D[a][b] = value  : where a = row and b = column
grocerys[2][0] = "Cow meat"

// how to display all element of array? using nested loop
for (const list of grocerys) {
    for (const food of list) {
        console.log(food)
    }
}