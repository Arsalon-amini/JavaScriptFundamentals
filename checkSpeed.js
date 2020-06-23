//uses if/else without return keyword 
function checkSpeed(speed){
    const speedLimit = 70; //set variable vs. magic numbers
    const kmPerPoint = 5; 
    let points = 0; 

    if(speed < speedLimit + kmPerPoint) //checks speed
        console.log('ok speed'); 
    else {
        points = Math.floor((speed - speedLimit) / kmPerPoint); //rounds to whole num
    }

    if(points >=12) //checks points 
        console.log("license suspended"); 
    else    
        console.log('Points', points); 
}


checkSpeed(140);


//uses the return keyword (optimization)
function checkSpeedV2(speed){
    const speedLimit = 70; //set variable vs. magic numbers
    const kmPerPoint = 5; 
    let points = 0; 

    if(speed < speedLimit + kmPerPoint){ //checks speed
        console.log('ok speed'); 
        return; 
    }
   
    points = Math.floor((speed - speedLimit) / kmPerPoint); //rounds to whole num
    
    if(points >=12) //checks points 
        console.log("license suspended"); 
    else    
        console.log('Points', points); 
}


checkSpeedV2(140);