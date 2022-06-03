console.log('hello world')
var y = 10; // variable is an adress of memory location
console.log(y)
var interestRate=0.1
var number=0.1
var boolean=true
var name=undefined
var age=null
var string="hello world"
var arrayname=['mark', 'mary', 'Anne', 'Andrew']
var height=[45, 50, 55, 20]
var height=[45,90.5, 78]
var person={
    name: 'Rahwa',
    age: 24,
    salary:'none',
    occupation: 'engineer'
}

//loops

console.log('hello world')
console.log('hello world')
console.log('hello world')
console.log('hello world')
console.log('hello world')


for(var i=0; i<5; i++){
    console.log('hello world')
}

console.log(5%2)


var gender="male";
var age=21;
if(gender=='male' && age>=21){
    console.log('allowed')
}
else{
    console.log('not allowed')
}


//conditionals
var x=100;

if(x<100){
    console.log('x is less than 100.')
}
else if(x==100){
    console.log("x is equal to 100.")
}
else{
    console.log("x is grater than 100.")
}


switch(2){
    case 1:
        console.log('This is Rahwa')
        break;
    case 2:
        console.log('This is Haile.')
        break;
    case 3:
        console.log('This is Yohannes.')
        break;
    default:
        console.log('This is Alasebu')
}

//loops

//for loop

for(i=0; i<5; i++){
    console.log('Tigray' + i);
}

for(i=0; i<5; i++){
    console.log('Tigray' + i);
    if(i==4)
    break
}

const home=['Haile', 'Alasebu', 'Luwam', 'Haben']

for(r in home)
{
    console.log('Mekelle')
}

const family=['Haile', 'Alasebu', 'Luwam', 'Haben']

for(r of family)
{
    console.log(family)
}

const cities = {First_Name:'Rahwa', Middle_Name:'Haile', Last_Name:'Yohannes'}
for(key in cities){
    console.log(cities[key])
}       i          

var y=0;
while(y<5)
{
    console.log('Sudan'+y)
    y++
}

var n=0;
do{
    console.log('Kenya'+n)
    n++
}
while(n<5)

const animals=['Donkey', 'Sheep', 'Goat']

animals.forEach(animal => {
    console.log(animal);
})

//DOM manipulation

var div=document.getElementById('div')
div.style.height="200px"
div.style.width='200px'
div.style.backgroundColor='red'

var fruits=['banana', 'orange', 'apple', 'pawpaw']

for(o in fruits){
    div.innerHTML += fruits[o] + '<br>'
    div.innerHTML +=`<li>${fruits[i]}</li>` + '<br>'
}

//events
//window events
//keyword events
//mouse events

var root = document.getElementById("root")
root.style.height='400px'
root.style.width='400px'
root.style.backgroundColor='blue'



// root.addEventListener('click', 
// function changeColor(){
//     root.style.backgroundColor='red';
//     root.style.height="100px"
// } )

// root.addEventListener('mouseover', 
// function changeColor(){
//     root.style.backgroundColor='red';
//     root.style.height="100px"
// } )

root.addEventListener('mouseenter', 
function changeColor(){
    root.style.backgroundColor='red';
    root.style.height="100px"
} )

root.addEventListener('mouseleave', 
function changeColor(){
    root.style.backgroundColor='blue';
    root.style.height="100px"
} )
