const items=[
    {name:'bike', price:100},
    {name:'TV', price:200},
    {name:'Album', price:10},
    {name:'book', price:5},
    {name:'phone', price:500},
    {name:'computer', price:1000},
    {name:'keyboard', price:25}    
]
//filter method
const filteredItems= items.filter((items)=>{return items.price<=100})
console.log(filteredItems)
//map method
const itemNames= items.map((items)=>{return items.name})
console.log(itemNames)
//find method
const foundItems= items.find((items)=>{return items.name==='computer'})
console.log(foundItems)
//foreach method
items.forEach((item)=>{console.log(item.price)})
//some method
const inexpensiveItems= items.some((items)=>{return items.price<=100})
console.log(inexpensiveItems)
//every method
const allinexpensiveItems= items.every((items)=>{return items.price<=100})
console.log(allinexpensiveItems)
//reduce method
const total = items.reduce((currenttotal,items)=>{return items.price+currenttotal},0)
console.log(total)
//includes method
const numbers = [1,2,3,4,6]
const checker=numbers.includes(6)
console.log(checker)


//Second Video

const companies=[
    {name:'Company One', price:100},
    {name:'Company Two', price:200},
    {name:'Company Three', price:10},
    {name:'Company Four', price:5},
    {name:'Company Five', price:500},
    {name:'Company Six', price:1000},
    {name:'Company Seven', price:25},  
    {name:'Company Eight', price:49}, 
    {name:'Company Nine', price:79}
]

//find
var person = companies.find(function(student){
    return student.price === 10;
})
console.log(person)
//forEach loop

companies.forEach(function(company){console.log(company)})

//filter loop

const ages=[18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30]
// const canDrink=[]

// for(k=0; k<ages.length; k++){
//     if(ages[k]>=21)
//         canDrink.push(ages[k])
// }
// console.log(canDrink)

const canDrink=ages.filter(function(age){
    if(age>=21){
        return true
    }
})
console.log(canDrink)
//alternative way of doing the above
// const canDrink=ages.filter(age=> age>=21)
    
// console.log(canDrink)


//sort method




var fruits=['Orange', 'apple', 'banana', 'lemon', 'mango'];
var grocery=['kales', 'tomatoes', 'cabbage', 'onions'];
var old=[20, 10, 50, 40, 5]
fruits.pop()
console.log(fruits)

fruits.push('Avocado')
console.log(fruits)

fruits.shift()
console.log(fruits)

fruits.unshift('Avocado')
console.log(fruits)

fruits[0]='Pawpaw'
console.log(fruits)

var newFruits=fruits.slice(1,4)
console.log(newFruits)

var newFruit=fruits.concat(grocery)
console.log(newFruit)

var fruitorder=fruits.sort()
console.log(fruits)

var fruitsreverse=fruits.reverse()
console.log(fruits)

var oldorder=old.sort()
console.log(old)



var arrayName=[23, 4, 78, 56]
//reduce
var sum=arrayName.reduce(function(total,value){
    return total + value
})

console.log(sum)
//find
var smallerNumbers = arrayName.find(function(value, ){
    return value < 40
})
console.log(smallerNumbers)



//ES6/ fat arrow function

//ES5

// function addTwonumbers(a,b){
//     return a+b;
// }
// var summation = addTwonumbers(10,10)
// console.log(summation)


// const addtwoNumbers = (x,y) =>{
//     return x+y
// }
// let totalsum= addTwoNumbers(30,30)
// console.log(totalsum)

//this keyword

// const tutor={ //this refers to the owner of the object
//     name:'John',
//     gender:'male',
//     occupation: 'teacher',
//     age:"34"
//     about: function(){
//         return this.name
//     }
// }
// console.log(tutor.about)




//date object

console.log(new Date())

console.log(new Date().getDate())
console.log(new Date().getDay())
console.log(new Date().getMonth())
console.log(new Date().getFullYear())
console.log(new Date().getHours())
console.log(new Date().getMinutes())
console.log(new Date().getSeconds())
console.log(new Date().getMilliseconds())


var d= document.getElementById('date')

d.innerHTML = (new Date().getDay())

let day = new Date()

let newDate = day.setHours(4)

console.log(newDate)

switch(newDate){
    case 0:
        d.innerHTML ="sunday"
        break
    case 3:
        d.innerHTML = 'Wednesday'
        break
    case 4:
        d.innerHTML = 'Thursday'
        break
    default:
        'invalid date'
}

//Math Object

console.log(Math.round(7.4))
console.log(Math.ceil(7.9))
console.log(Math.floor(7.4))
console.log(Math.trunc(7.8))
console.log(Math.sign(-9))
console.log(Math.pow(2,3))

// //ES6
// console.log(2**3)
console.log(Math.sqrt(64))
console.log(Math.trunc(Math.random()*10000))



