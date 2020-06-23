
const numbers = [3 , 4]; //cannot reassign to new obj, can add/delete from current object

//addLast
numbers.push(5, 6); //adds elements to end of array

//addFirst
numbers.unshift(1, 2); //adds new elements at beginning, pushes elements to right

//addAtIndex
numbers.splice(2, 0, 'a', 'b'); // (index start, num elements to delete, args to add) - can go to given position to add/remove elements
console.log(numbers); 

//remove items

//remove last
const last = numbers.pop(); //remove - item at the end, remove stack 
console.log(last); 

//remove first
const first = numbers.shift();
console.log(first); 

//remove middle
numbers.splice(2,1); //(index, num elements to delete)

console.log(numbers); 


//empty an array (four methods)

let numbers = [1, 2, 3, 4];

//1. re-assign by pointing to a new obj (only if no alt references)
numbers = []; //old array still in memory, garbage collector eventually will delete

//2. set length to zero (Mosh preference) trunkate array to zero elemements
numbers.length = 0; 

//3. splice
numbers.splice(0, numbers.length); //(start at 0, remove all elements in length)

//4. pop method (not recommended - performance cost)
while(numbers.length > 0)
    numbers.pop();

//find a reference type (search)

const courses = [
    {id: 1, name: 'a'},
    {id: 2, name: 'b'},
];

//check if primitive exists 
numbers.indexOf('a') !== -1 ; //if true, exists
numbers.includes('a'); //returns true if exists (better)
numbers.lastIndexOf(1); //last index

//annonymous function - finding reference to array (takes a predicate)
courses.find(function(course){
    course.name === 'a'; //criteria
});


//arrow function - finding reference type in array 
const course = courses.find((course) => course.name === 'a'); 
    
console.log(course); 


//array demo 
let selectedColors = ['red', 'blue', 'green'];

selectedColors[3] = 3; //dynamic type 

console.log(selectedColors);

//enumerating arrays 
const colors = ['red', 'blue', 'green'];

//for of loop - ES6 array iteratation 
for(let color of colors)
    console.log(color); 

//for in loop - array iteration 
for(let index in colors)
    console.log(index, colors[index]); 

//using a for of loop 
for(let number of numbers)
    console.log(number); 


//passing predicate (annonymous function syntax)
numbers.forEach(function(number){
    console.log(number); 
})

//passing predicate (arrow function syntax)
numbers.forEach((number, index) => console.log(index, number));

const first = [1, 2, 3]; 
const second = [4, 5, 6]; 

//concatinate 
const combined = first.concat(second); 
console.log(combined); 

//slice array (obj not copied, only copied by reference, primitive copied by value) 
let slice = combined.slice(2, 4); //(start, finish) index

let slice2 = combined.slice(2); //(start) + all elements after

let slice3 = combined.slice(); //copy of original array 


console.log(slice);
console.log(slice2); 
console.log(slice3); 

//combine using spread operator
const combinedV2 = [...first, 'a', ...second]; //can clearly see what a combined array looks like 
console.log(combinedV2); 


//join array 
const joined = numbers.join(','); //returns a string (combine elements using a separator )
console.log(joined);

const message = 'This is my first message'; 
const parts = message.split(' '); //returns an array (each element a word in original sentence)

const combineWords = parts.join('-'); 
console.log(combineWords); 


//sorting arrays (primitives - String, Num, etc)
const numbers = [2, 3, 1]; 
numbers.sort(); //sorts numbers using <?> algorithm <?>
numbers.reverse(); //reverses the order of the elements 


//sorting arrays (reference type - objects)

const courses = [
    {id: 1, name:'Node.js'},
    {id: 2, name: 'javascript'}
];

courses.sort(function(a,b) {
    const nameA = a.name.toUpperCase();
    const nameB = b.name.toUpperCase(); 

    if(nameA < nameB) return -1; //using ASCii numeric values
    if(nameA > nameB) return 1; 
    return 0; 
}); 

console.log(courses); 


//test elements in an array 
const numbers = [2, 3, -1, 1]; 

//.every(predicate)
const allPositive = numbers.every(function(value){
    return value >= 0; //test every element 
});

console.log(allPositive); 


//.some(predicate) 
const atLeastOnePositive = numbers.some(function(value){ 
    return value >=0;  //check if atLeastOne element matches a search criteria
}); 

//eliminate function keyword, { } and return keyword 
const atLeastOnePositiveV2 = numbers.some(value => value >= 0);

//filtering arrays 


const numbers = [2, 3, -1, 1, -5]; 

//filter data based on condition (n >= 0); 
const filtered = numbers.filter(n => n >= 0); //executes on each element, if true, adds to new array 

console.log(filtered); 

//filter array[object] by value comparision 
const restaurants = [
    {name: 'a', hours: 'open'},
    {name: 'b', hours: 'closed'},
    {name: 'c', hours: 'open'}
];

const openRestaurants = restaurants.filter(r => {
    return (r.hours === 'open')
});

const openRestaurants = restaurants.filter(r => r.hours === 'open');

console.log(openRestaurants); 

//map data - from one type to another

//map data to new datatypes (number -> string)
items = filtered.map(n => '<li>' + n + '<li>'); //returns array of strings

const html = '<ul>' + items.join('') + '</ul>'; //combines elements in an array to a single string, returns a string

console.log(html); 

//map data to new datatypes (number -> object)
items = filtered.map(n => { 
    const obj = { value: n} 
    return obj; 
});

//cleaner implementation (n -> obj)
items = filtered.map(n => ({ value: n }) ); //can exclude return keyword, and { }  if only one line of code 

console.log(items); 

//chaining (filter().andThen.map())
const items = numbers
    .filter(n => n >= 0) //returns an array 
    .map(n => ({ value: n })) //mapping to an object
    .filter(obj => obj.value > 2); //filtering obj

console.log(items); 


//reducing an array 

const numbers = [2, 3, -1, 1]; 

//how we'd solve this problem without modern JavaScript (adds all nums in array, returns result)
let sum = 0;
for(let n of numbers)
    sum += n; //sum + n

console.log(sum); 

//reduce arrays - reduce all elements in an array into a single value (number, string, object, anything)

const sumV2 = numbers.reduce((accumulator, currentValue) => {
    return accumulator + currentValue; 
},
    0); //init value of accumulator = 0

console.log(sumV2); 

//excercise 1 (arrays) - arrayFromRange();
const numbers = arrayFromRange(-10, 4);

function arrayFromRange(min, max){
    const array = [];
    for(i = min; i <= max; i++){
        array.push(i); 
    }
    return array; 
}


console.log(numbers); 

//excercise 2 -  implement the .includes() method - .some ()

const numbers = [1, 2, 3, 4]; 

function includes(array, searchElement){
    return isPresent = numbers.some(entry => entry === searchElement); 
}

const result = includes(numbers, 2); 

console.log(result); 


//excercise 4 - shift an element's position in an array 

const numbers = [1, 2, 3, 4]; 

const output = move(numbers, 0, 2); //(array, index, offset)

function move(array, index, offset){
    
    const position = index + offset; 
    if(position >= array.length || position < 0) {
        console.error('Invalid offset.');
        return; 
    }

    const output = [...array]; //clone of original array 
    const element = output.splice(index, 1)[0]; //return the element we deleted array[0], deleting one element at a time from array, while storing it 
    output.splice(index + offset, 0, element); //adding one element in the newArray at a time

    return output; 
}

    
console.log(output);


//Excercise 5 - basic implementation (countOccurrences)
function countOccurrences(array, searchElement){
    let count = 0;
    for(let element of array){
        if(element === searchElement)
            count++; 
    }
    return count; 
}

const x = countOccurrences(numbers, 1); 
console.log(x); 