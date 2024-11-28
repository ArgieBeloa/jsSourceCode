//inheritance in javaScript (extends nameOfParentClass)

class Animal 
{
    

    constructor(name, age)
    {
        this.name = name
        this.age = age
    }
    eat()
    {
      console.log(`This animal is eating name: ${this.name}`)
    }

    sleeping()
    {
        console.log(`This animal is sleeping name: ${this.name}`)
    }

}

class Cat extends Animal
{

}

const cat = new Cat("MigMig",10)
cat.eat()