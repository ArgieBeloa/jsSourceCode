const car =
{
    model : "Mustang",
    color : "Red",
    year : 2024,

    drive : function ()
    {
        console.log(`You drive the ${this.model}`)
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