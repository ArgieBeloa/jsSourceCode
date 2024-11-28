// object = A group of properties and methods 
//          properties = what an object has
//          methods  = what an object can do
//          use . to access properties and methods

// example

const car =
{
    model : "Mustang",
    color : "Red",
    year : 2024,

    drive : function ()
    {
        console.log("You drive the car")
    },

    stop : function () 
    {
        console.log("You step on the brake")
    }
}

// access attributes 
console.log(car.model)

// access methods
car.drive()