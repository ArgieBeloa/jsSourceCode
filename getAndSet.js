//get and set

class Animal 
{
    

    constructor(name, age)
    {
        this._name = name
        this._age = age
    }

    get name()
    {
          return `Name: ${this._name}`
    }

    get age()
    {
          return `Age: ${this._age}`
    }
    
    set name(value)
    {
      this._name = value
    }
}

const cat = new Animal("Ming ming", 10)
//set
cat.name = "Tiger"

//get
console.log(cat.name)