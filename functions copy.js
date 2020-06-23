//basic arithmetic function 
function square (number){
    return number * number;
}

let number = square(4); 
console.log(number); 

//function performing a task demo 
function greet(name){
    console.log('Hello World ' + name);
}

greet('Arsalon'); 
greet('Mary');

//function as an objects
function Pentagon(radius){
    this.radius = radius; 
    this.draw = function(){
        console.log('draw'); 
    }
}