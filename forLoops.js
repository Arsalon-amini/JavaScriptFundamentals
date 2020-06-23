//for loop (basic)
for(let i = 0; i <= 10; i++){
    console.log('Hello world');  
}

//nested for loop (O(n) * O(n) - algorithms)
for(let i = 0; i < 10; i++){
    for(let j = 1; j < 10; j++)
        console.log("hello world" + '' + i);
}

const programmer = {
    name: "arsalon",
    age: 28
};

//for in loop - object enumeration
for (let property in programmer)
    console.log(property, programmer[property]);

const colors = ['red', 'blue', 'green'];

//for of loop - ES6 array iteratation 
for(let color of colors)
    console.log(color); 

//for in loop - array iteration 
for(let index in colors)
    console.log(index, colors[index]); 


