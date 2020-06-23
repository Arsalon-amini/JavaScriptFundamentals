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

