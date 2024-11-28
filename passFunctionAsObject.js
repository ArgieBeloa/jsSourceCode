//pass function  as object

class Car 
{
      constructor( model,
                   year,
                   color
      )
      {
          this.model = model
          this.year = year
          this.color = color
      }
}

const car1 = new Car("Mustang", 2024, "Green")


changeColor(car1, "Black")  
disPlayInfo(car1)

//example
function disPlayInfo(car) {
    console.log(car.model)
    console.log(car.year)
    console.log(car.color)
}
//example
function changeColor(car, color) {
     car.color = color
}