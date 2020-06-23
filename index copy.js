//excercise 5 - count occurences of an element
const numbers = [1, 2, 3, 4, 1]; 

let count = 0; 

function countOccurrencesV2(array, searchElement){
    return array.reduce((accumulator, current) => {
        const occurrence = (current === searchElement) ? 1 : 0; 
        console.log(accumulator, current, searchElement);
        return accumulator + occurrence; 
    }, 0); 

}

const occur = countOccurrencesV2(numbers, 1); 

console.log(occur); 





