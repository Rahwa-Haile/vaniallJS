// //First let's do a promise so that we can see how async await is just better way of writing that promise

// function makeRequest(location) {
    
//     console.log(`Making request to ${location}`)
//     return new Promise((resolve, reject)=>{
//         if(location == 'google'){
//             resolve(`google says hi`)
           
//         }
//         else{
//             reject('We can only talk to google')
//         }
//     })
// }


// function processRequest(response){

//     return new Promise((resolve, reject)=>{
//         console.log("processing request")
//         resolve(`Extra info : ${response}`)
//     })


// }


// // makeRequest('google').then((response)=>{
// //     console.log('Response received')
// //     return processRequest(response) //we need to use return this promise in order to use it in the then chain. This is why their sequence gets mixed up when you dont use return.
// // }).then((processedResponse)=>{
// //     console.log(processedResponse)
// // }).catch((err)=>{
// //     console.log(err)
// // })



// //The above code is not that bad but we could use async/await to make it easy to understand. For example it is a bit difficult to use parameters from our first then inside our second then statement, but with async await we don't actually have to worry about that. 


// //async/await






// async function doWork(){

//     try{
//         const response =  await makeRequest('google')// this is the resolve section. ezi keytewde nabza ketsalit mesmer aykedn. which means zaketsalit mesmer then statement eya
//         console.log('Response received')
//         const processedResponse = await processRequest(response)
        
//         console.log(processedResponse)
//     }
//     catch (err) {
//         console.log(err)
//     }
    
// }


// doWork()

















//Second video
//let's see how we can use then statement with async await



// async function order(){
//     try{
//         await abc
//     }
//     catch(error){
//         console.log("Function abc doesn't exist")
//     }
//     finally{
//         console.log("This block always runs")
//     }
// }


// order().then(()=>{
//     console.log("success")
// })


//Now let's do small test understand the await keyword. Let's say the chef is working according to the steps and he realizes the customer has not selected what kind of topping they would like. He would have to stop whatever he is doing leave the kitchen, ask the customer and get back to proceed and finish his work. keep in mind other employees are doing their work at the same time.




// function topping(){


//     return new Promise((resolve, reject)=>{
        
//         setTimeout(()=>{
//             resolve(console.log("What kind of toppings would you like madam?"))
//         }, 3000)

//     })
// }


// async function kitchen(){
//     console.log(" A ")//ABCDE are the steps of making an icecream. After completing ABC he has to await the answer of the customer before proceeding to D&E. But other employees don't stop with their work, such as cleaning th table.
//     console.log(" B ")
//     console.log(" C ")
//     await topping()

//     console.log(" D ")
//     console.log(" E ")
    
// }
// kitchen()

// console.log("Cleaning the table")
// console.log("Doing the dishes")
// console.log("Taking orders")










//let's reopen our shop and make our icecream



const stocks = {
    fruits: ["apple", "strawberry", "banana", "grapes"],
    liquids: ["water", "ice"],
    holder: ["cone" , "cup", "stick"],
    toppings: ["chocolate", "peanuts"]
}

const isShopOpen = true

function time(ms){
    
    return new Promise((resolve, reject)=>{

        if(isShopOpen){
            setTimeout(resolve,ms)
        }
        else{
            reject(console.log("Shop is closed"))
        }
    })
}


async function kitchen(){
   try{
        await time(2000)
        console.log(`${stocks.fruits[1]} has been selected`)

        await time(2000)
        console.log("Fruits have been chopped")

        await time(1000)
        console.log(`${stocks.liquids[0]} and ${stocks.liquids[1]} have been added`)

        await time(1000)
        console.log("machine has been started")

        await time(2000)
        console.log(`Icecream has been put on top of ${stocks.holder[0]}`)

        await time(3000)
        console.log(`${stocks.toppings[1]} has been selected as a topping`)

        await time(2000)
        console.log('Icecream has been served')
   }
   catch{
       console.log('Customer has left')
   }
   finally{
       console.log('Day has ended, shop is closed')
   }
}


kitchen()