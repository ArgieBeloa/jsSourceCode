 //2:54:00

 let grades = [100, 99, 90, 95, 89, 75]

 grades = grades.sort(ascendingGrades)


 grades.forEach(print)

 function decendingGrades(x, y) {
    return y - x
 }
 function ascendingGrades(x, y) {
    return x - y
 }
 function print(element) {
    console.log(element)
 }
 