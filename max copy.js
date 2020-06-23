//console.log
function maxV1(first, second){
    if(first > second)
        console.log("Max is" + first);
    else if (second > first)
        console.log("Max is " + second); 
    else
        console.log("Numbers are equal");
}

maxV1(10 , 10); 

//if/else  
function maxV2(a, b){
    if(a > b)
        return a;
    else if (b > a)
        return b; 
    else 
        console.log("numbers are equal"); 
}

let num = maxV2 (5, 50); 
console.log(num); 

//return keyword (return keyword)
function maxV3(a, b){
    if (a > b)
        return a; //if this is true, will jump out of loop 
    return b; 
}

//return (ternary operator)
function maxV4(a, b){
    return (a > b) ? a : b; //ternary operator 
}
