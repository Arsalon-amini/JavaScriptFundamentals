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

function showNumbersV2(limit){
    for(let i = 0; i <= limit; i++){
        if(i % 2 === 0) 
            console.log(i, 'EVEN'); 
        else    
            console.log(i, 'ODD'); 
    }
}

showNumbersV2(5);

function showNumbersV3(limit){
    for(let i = 0; i <= limit; i++){
        const message = (i %2 === 0) ? 'EVEN' : 'ODD'; 
        console.log(i, message); 
    }
}

