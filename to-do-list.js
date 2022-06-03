//adding task
var input=document.getElementById('input')
input.addEventListener('change', function storeValue(){
  value=input.value;
})
var add = document.getElementById("add")
var ul = document.getElementById("list");
var li = document.createElement("li");
add.addEventListener('click', ()=>{
  
    li.appendChild(document.createTextNode(value));
    ul.appendChild(li);
})


//deleting task

var object={
   id:Math.floor(Math.random()*1000)
}


li.setAttribute('id', object.id)
   li.addEventListener("dblclick", ()=>{
    
   let id = li.getAttribute('id')
   console.log(id)
   document.getElementById(id).remove()
})




var e =6;
console.log(typeof(e))

function myName(name){
   console.log(name)
}

myName('Rahwa')







// var remove = document.getElementById("remove")
// remove.addEventListener('click', ()=>{
//     var ul = document.getElementById("list");
//      ul.removeChild(ul.lastElementChild)
//})

//checking task

//clearing task