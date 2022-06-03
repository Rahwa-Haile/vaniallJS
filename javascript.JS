var mass=51;
var height=1.66;
var bmi=mass/(height*height);

if(bmi>0 && bmi<=18.5 ){
    console.log('You are underweight')
}
else if(bmi>18.5 && bmi<=25){
    console.log('You have normal weight')
}
else if(bmi>25 && bmi<=29.5){
    console.log('You are overweight')
}
else if(bmi>29.5){
    console.log('you are obese')
}
else{
    console.log('you have entered invalid value')
}