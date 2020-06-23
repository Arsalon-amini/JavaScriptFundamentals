let array = [NaN, 'blue', undefined, 5, 'catarpillar', NaN];

function countTruthy(array){
    let truthyCount = 0; 

    for(let value of array){
        if(value) //javascript engine will evaluate if true or truthy 
            truthyCount++;   
    }

    return truthyCount;
}

console.log(countTruthy(array)); 