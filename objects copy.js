//object demo 
let person = {
    name: 'Arsalon',
    age: 28
};

//accessing + updating fields in an object 
person.name = 'John'; //dot operator notation 
person['name'] = 'Teddy'; //bracket notation (dynamic type)

console.log(person.name);

//Object Creation - literal syntax, factory function, constructor function 

//creating obj - literal syntax 
const circleV1 = {
    radius: 1, 
    location: {
        x:1, 
        y:1
    },
    isVisible: true,
    draw: function(){
        console.log('draw'); //method 
    }
}; 

//object literal syntax
let blogPost = {
    title: 'a',
    body: 'b',
    author: 'c',
    views: 10,
    comments: [
        {author: 'a', body: 'b'}, //array of objects
        {author: 'c', body: 'd'}
    ],
    isLive: false
}

//factory function 
function createCircle(radius){
    return {
        radius, 
        draw(){
            console.log('draw'); 
        }
    }; 
}

const circleOne = createCircle(1); 
console.log(circleOne['radius']); //accessing obj property 
circleOne.draw(); 


//constructor function 
function Circle(radius){
    this.radius = radius; 
    this.draw = function(){
        console.log('draw'); 
    }
}

const cirlce = new Circle(1); //1. creates a new empty obj, 2. points variable/methods to it, 3. returns it 

 //constructor function    
 function Post(title, body, author){
    this.title = title;
    this.body = body; 
    this.author = author;
    this.views = 0;
    this.comments = [];
    this.isLive = false; 
}

let post = new Post('a', 'b', 'c'); 
console.log(post); 

//dynamic object - adding/deleting fields or methods 
const square = {
    perimeter: 1
};

square.color = 'yellow'; //add property 'color'
square.draw = function(){}; //add function 'function'

console.log(square); 

//creating function object - functions are objects (constructor function)
function Pentagon(radius){
    this.radius = radius; 
    this.draw = function(){
        console.log('draw'); 
    }
}

//enumerating objects
const circle = {
    radius: 1, 
    draw (){
        console.log('draw'); //method 
    }
}; 

//iterate over keys (for in)
for(let key in circle)
    console.log(key, circle[key]);

//iterate over keys (for of + Object.keys)
for (let key of Object.keys(circle))
console.log(key);

//iterate over values (for of + Object.entries())
for (let entry of Object.entries(circle))
console.log(entry);

//check if a key exists (if in)
if('radius' in circle) 
    console.log('yes'); //can see if key exists

//cloning objects (for in) 
const another = {};
for (let key in circle)
    another[key] = circle[key];

//cloning objects (spread operator)
const another =  {...circle}; //takes all properties / methods and puts them between curly braces (into another obj)

//cloning objects (Object.assign()) 
const another = Object.assign( {}, cirlce); //copies properties into a new obj (can use existing obj) to combine objects




