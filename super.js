

//super

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
     constructor(name, age, alyas)
     {
          super(name,age)
          this.alyas = alyas
     }

     displayAlyas()
     {
        console.log(`animal alyas is: ${this.alyas}`)
     }
}

const cat = new Cat("MigMig",10,"toto")
cat.eat()
cat.displayAlyas()