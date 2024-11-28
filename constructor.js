//constructor in javaScript

class Student{

    constructor(name, age, gpa)
    {
        this.name =name
        this.age =age
        this.gpa = gpa
    }

    study()
    {
        console.log(`${this.name} Are studying`)
    }
    getAge()
    {
        console.log(`${this.age} years old`)
    }

}

const student1 = new Student("Argie",20, 1.75)
student1.study()
student1.getAge()