const stocks = {
    fruits: ["apple", "strawberries", "banana", "grapes"],
    liquids: ["water", "ice"],
    holder: ["cone" , "cup", "stick"],
    toppings: ["chocolate", "peanuts"]
}



function order(fruit, callProduction) {
    
    setTimeout(()=>{
        console.log(`${stocks.fruits[fruit]} has been selected`)
        callProduction()

    }, 2000)


}

function production(){

    setTimeout(()=>{
        console.log("production has started")
    },0000)

    setTimeout(()=>{
        console.log("Fruits have been chopped")


        setTimeout(()=>{
            console.log(`${stocks.liquids[0]} and ${stocks.liquids[1]} has been added`)

            setTimeout(()=>{
                console.log("Machine has been started")

                setTimeout(()=>{
                    console.log(`The icecream has been placed on ${stocks.holder[0]}`)

                    setTimeout(()=>{
                        console.log(`${stocks.toppings[0]} has been added as a topping`)
                        setTimeout(()=>{
                            console.log("icecream has been served")
                        },2000)
                    },2000)
                },2000)
            }, 1000)
        },1000)
    },2000)
}

order(0, production)





//Callback functions are basically run when we are done with some functionality
