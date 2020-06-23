//while loop
let i = 0;

while (i <= 5){
    console.log("hello world" + i)
    i++;
}
    
//do while loop
let j = 0;
do{
    console.log("doing work")
    j++
} while (j <= 5); 

//infinite loop
x = 1; 
while(true){
        console.log("running forever")
}

//break out of loop (break)
let k = 0;
while (k <= 10){
    if(k === 5) 
        break;
    console.log(k);
    k++;
}

//restart loop (continue)  
let l = 0;
while (l <= 10){
    if(l %2 === 0){
        l++;
        continue;
    }

    console.log(l);
    l++;
}

//excercise
function showNumbers(limit){
    let i = limit; 

    while(i >= 0){
        if(i % 2 === 0)
            console.log( "even " + i); 
        else
            console.log("odd " + i); 
        i--; 
    } 
}

showNumbers(10);