const items=[
    {name:'bike', price:100},
    {name:'TV', price:200},
    {name:'Album', price:10},
    {name:'book', price:5},
    {name:'phone', price:500},
    {name:'computer', price:1000},
    {name:'keyboard', price:25}    
]

document.getElementById('div')
items.forEach(function(student){
    console.log(student.name)
    div.innerHTML += `<li>${student.name}</li>`
    div.innerHTML += `<li>${student.price}</li>`

})

items.map(function(student){
    console.log(student.name)
    div.innerHTML += `<li>${student.name}</li>`
    div.innerHTML += `<li>${student.price}</li>`

})

var filteredStudents=items.filter(function(value){
    return value.price<300
})
console.log(filteredStudents)

