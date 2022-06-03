//JSON
const car={ // car object
    wheels: 4,
    fuel: "petrol",
    color: "blue",
    passenger: 7,
    model: "Toyota"
}

// to convert it into JSON
console.log(car)
let carJson = (JSON.stringify(car))
console.log(carJson) // changes an object into a JSON format
console.log(JSON.parse(carJson))
//syntax


//API = Application Program Interface
//fetch API 

// fetch('https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/JSON')
// // .then(response=> console.log(response.json()))

// .then(response=> response.json())
// .then(data=>{
//     data.forEach((user)=>{
//         console.log(user)
//     })
// })

//error handling

//try catch block

let input= document.getElementById('input')
input.addEventListener('change', ()=>{
    let value = input.value;
    try{
        if(value<100) throw ('This number is too small')
        if(value=='') throw('This field id empty')
        if(value>1000) throw('This number is too big')
     }
    catch(err){
         console.log(err)
     }
    finally{
        input.value = '';
    }
})


// try{
//    let div= document.getElementById('hello')
//    div.innerHTML = 'hello world'
// }
// catch(err){
//     console.log(err)
// }


//promises

let p = new Promise((resolve, reject) =>{
    let product = 4*3;

    if(product == 6){
        resolve('The answer is correct!')
    }
    else{
        reject('The answer is incorrect')
    }
})

p.then(message=>{
    console.log(message)
})
.catch(error=>{
    console.log(error)
})

//fetch
//API

fetch('https://jsonplaceholder.typicode.com/users')
.then(response=>response.json())
.then(data=>{console.log(data)})
.catch(error=>{
    console.log(error)
})

//async await
// const fetchData = async()=>{
//     let response = await fetch('https://jsonplaceholder.typicode.com/posts')
//     let data =  response.json()

//     return console.log(data)

// }

// fetchData()


// const fetchData = async()=>{
//     let response = await fetch('https://jsonplaceholder.typicode.com/posts')
//     let data =  await response.json()

//     data.forEach((post)=>{
//         console.log(post)
//         //also display everything on the webpage. Finally, target specific span or div and style it here

        
//     })

// }

// fetchData()


const fetchData = async()=>{
    let response = await fetch('https://jsonplaceholder.typicode.com/posts')
    let data =  await response.json()

    data.forEach((post)=>{
        let div=document.getElementById ('blogsite')
        let id = 
        
    })

}

fetchData()

































































































