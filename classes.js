//classes in javascript
//class is a blueprint/template of creating objects
 //pascal naming convention
// class Company{
//     constructor(name){
//         this.name = name;
//     }
// } 

// newComp = new Company('my company')
// document.querySelector('.main').innerHTML = newComp.name



class Car{
    constructor(name,year,fuel){
        this.name = name;
        this.year = year;
        this.fuel=fuel;
    }
}

const myCar = new Car('Toyota' , '2011', 'petrol')
document.querySelector('.main').innerHTML = myCar.year + " " + myCar.name + " "+ myCar.fuel