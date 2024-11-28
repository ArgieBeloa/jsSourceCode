//arrayOfObjects

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

      drive()
      {
        console.log(`You are driving car model: ${this.model}`)
      }
}

const car1 = new Car("Mustang", 2024, "Green")
const car2 = new Car("Honda Civic", 2021, "Grey")
const car3 = new Car("HighLux", 2020, "Blue")
const car4 = new Car("Sport Car", 2019, "Black")

const arrayOfCars = [car1,car2,car3,car4]

startRace(arrayOfCars)

// let i =arrayOfCars.length
// while(i != 0)
// {
//     //console.log(arrayOfCars[i-1].model)
//     arrayOfCars[i-1].drive()
//     i--;
// }

function startRace(ArrayOfCars) {
    
    for(const arrayCars of ArrayOfCars)
    {
        arrayCars.drive()
    }
}

