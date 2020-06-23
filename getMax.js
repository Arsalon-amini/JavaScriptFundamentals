//excercise 6 - getMax occuring value in an array 
const numbers = [1, 2, 3, 4, 1]; 


//Version #1 - using for of loop 
function getMax(array){
    if(array.length === 0) return undefined; //validate array

    let max = 0; 
    for(let element of array){
        if(element > max)
            max = element
    }
    return max; 
}

console.log(getMax([1, 2, 4, 6, -1])); 

//version #2 - using indexed for loop (like insertion sort)
function getMaxV2(array){
    if(array.length === 0) return undefined; //validate array

    let max = array[0]; 
    for(let i = 1; i < array.length; i++){
        if(array[i] > max)
            max = array[i]; 
    }
    return max; 
}

console.log(getMaxV2([1, 2, 3, 4])); 
 
//version #3 - .reduce method w/ ternary operator 
function getMaxV3(array){
    if(array.length === 0) return undefined; //validate array

    return array.reduce((a, b) => (a > b) ? a : b); 
}

console.log(getMaxV3(numbers)); 