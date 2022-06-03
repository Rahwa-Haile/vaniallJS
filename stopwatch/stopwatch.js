//count up timer
i = 0;
document.getElementById('seconds').innerHTML = i
startButton = document.getElementById('start')
startButton.addEventListener('click', ()=>{
     
     time = setInterval(function(){
         i++;
       document.getElementById('seconds').innerHTML = i
   }, 1000)
})

   
//stopping the timer

stopButton = document.getElementById('stop')

stopButton.addEventListener('click',()=>{
     clearTimeout(time)
    //  i=+i
    //  document.getElementById('seconds').innerHTML = i
})


//reset
resetButton = document.getElementById('reset')

resetButton.addEventListener('click', ()=>{
    i=0;
    document.getElementById('seconds').innerHTML = i
})  
