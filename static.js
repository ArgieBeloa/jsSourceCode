
// static keyword
// belong to the class not the objects
class Car{
     static numberOfCar=0

    constructor(model)
    {
   this.model= model
      Car.numberOfCar +=1
    }
   static getNumberofCar()
    {
        console.log(`Number of Car: ${Car.numberOfCar}`)
    }
}

const car1= new Car("Honda Civic")
const car2 = new Car("Honda Civic")
const car3 = new Car("Honda Civic")
Car.getNumberofCar()