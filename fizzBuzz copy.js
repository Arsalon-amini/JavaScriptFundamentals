
//if/else + specificity (order of statements)
function fizzBuzz (num) {
    if((num % 3 === 0) && (num % 5 === 0))
        return "fizz-buzz";
    else if (num % 5 === 0)
        return "buzz"; 
    else if (num % 3 === 0)
        return"fizz";
    else if (num != 'number')
        return 'Not a number';
    else
        return "not divisible by 3 or 5"; 
}; 

console.log(fizzBuzz(15)); 
