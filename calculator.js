let ac = document.querySelector('.AC')
// let del = document.querySelector('.delete')
let arthimetic = document.querySelectorAll('.operation')
let numbers = document.querySelectorAll('.number')
let equalsto = document.querySelector('.equalsto')
// let previousValue = document.querySelector('previousValue')
// let currentValue = document.querySelector('currentValue')



arthimetic.forEach(arthimetic =>{
    arthimetic.addEventListener('click', ()=>{
    document.getElementById("calc").value+=button.innerText
})
})

numbers.forEach(numbers =>{
    numbers.addEventListener('click', ()=>{
    document.getElementById("calc").value+=button.innerText
})
})

ac.addEventListener('click', ()=>{
    document.getElementById("calc").value = ""
})
equalsto.addEventListener('click', ()=>{
    let x = document.getElementById("calc").value
    let y = eval(x)
    document.getElementById("calc").value = y
})
//functions

//displaying numbers on  the screen 
//clearing the screen
//erasing one character
//arthimetic operations


// class Calculator{
//     constructor(previousValue, currentValue)
//     this.previousValue = previousValue;
//     this.currentValue = currentValue;
//     }

//     new Calculator()
//     function clear(){
//         this.currentValue = '';
//         this.previousValue = '';
//         this. arthimetic = '';
//     }

//     function display(){
        
//     }

//     function updateDisplay()
//     {

//     }
//     function erase(){
        
//     }
// function dis(val)
// {
// document.getElementById("calc").value+=val
//  }
// //function for evaluation
// function solve()
// {
// let x = document.getElementById("calc").value
// let y = eval(x)
// document.getElementById("calc").value = y
// }
// //function for clearing the display
// function clr()
// {
// document.getElementById("calc").value = ""
// }


