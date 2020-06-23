//thinking
//input as a string 
//chain .filter, ..map operations




//excercise 3 
const numbers = [1, 2, 3, 4]; 

const output = except(numbers, [2,3]); 

function except(array, excluded){
    const output = []; 
    for(let element of array){
        if(!excluded.includes(element))
            output.push(element); 
    }
    return output; 
}

console.log(output);