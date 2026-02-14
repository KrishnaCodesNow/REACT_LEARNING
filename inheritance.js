/*
let car = {
    make: "Toyota",
    model: "Camry",
    year: 2020,

start: function () {
    return `${this.make} car got started in ${this.year}`;
},
};
console.log(car.start());

function Person(name, age){
    this.name = name;
    this.age = age;
}

let john = new Person("John Doe",20);
console.log(john.name);

*/

class Vehicle {
    constructor(make, model){
        this.make = make
        this.model = model
    }
    start(){
        return `${this.model} is a car from ${this.make}`;
    
    }
}
class Car extends Vehicle {
    drive() {
        return`${this.make} : This is inheritance
        example`;
    }
}

let myCar = new Car ("Toyota", "Corolla");
console.log(myCar.start());
console.log(myCar.drive());


