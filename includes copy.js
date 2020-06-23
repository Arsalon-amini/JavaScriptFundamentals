//excercise 2 -  implement the .includes() method - .some ()

const numbers = [1, 2, 3, 4]; 

function includes(array, searchElement){
    return isPresent = numbers.some(entry => entry === searchElement); 
}

const result = includes(numbers, 2); 

console.log(result); 


//excercise 2 - implement the .includes() method - for of loop 

function includesV2(array, searchElement)
    for(let element of array){
        if(element === searchElement)
            return true; 
        return false; 
    }