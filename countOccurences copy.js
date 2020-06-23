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