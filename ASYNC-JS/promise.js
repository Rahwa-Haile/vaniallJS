//before making icecream first let's do simple promise from another video



const p = new Promise((myRes, myRej)=>{
    const a = 1+1
    if(a==2){
        myRes('success')
    }
    else{
        myRej('fail')
    }
})


p.then((message)=>{
    console.log(message)
}).catch((error)=>{
    console.log(error)
})


//explanation: we use constructor to create promise object by passing a function with with two parameters, resolve and reject. then we specify a certain condition. if the condition is met promise will be resolved else it will be rejected. if it gets resolved hence successful promise then() will be called, if rejected catch() will be called.
//here we still use callbacks but the callback is attached rather than passes. hence it will be organized structure unlike the callback structure known as callback hell.



//Now let's proceed into making our icecream



const stocks = {
    fruits: ["apple", "strawberry", "banana", "grapes"],
    liquids: ["water", "ice"],
    holder: ["cone" , "cup", "stick"],
    toppings: ["chocolate", "peanuts"]
}

const isShopOpen = true

let order = (time, work)=>{

    return new Promise ((resolve, reject)=>{
        if (isShopOpen){

            setTimeout(()=>{
                resolve(work())

            }, time)
        }
        else{
            reject(console.log('Sorry customer, the shop is closed'))
        }
    })


}


order(2000, ()=>console.log(`${stocks.fruits[1]} has been selected`))


.then(()=>{
   return order(0000, ()=>console.log("Production has started"))
})
.then(()=>{
   return order(2000, ()=>console.log('fruit has been chopped'))
})
.then(()=>{
   return order(1000, ()=>console.log(`${stocks.liquids[0]} and ${stocks.liquids[1]} have been added`))
})
.then(()=>{
   return order(1000, ()=>console.log('Machine has been started'))
})
.then(()=>{
   return order(2000, ()=>console.log(`The icecream has been put on ${stocks.holder[2]}`))
})
.then(()=>{
   return order(3000, ()=>console.log(`${stocks.toppings[1]} has been used as a topping`))
})
.then(()=>{
   return order(2000, ()=>console.log('Icecream has been served'))
})
.catch(()=>{
    return console.log("Customer has left")
})
.finally(()=>{
    return console.log("The shop is closed at the end of the day")
})





























