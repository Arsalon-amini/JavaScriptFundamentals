const movie = {
    title: 'best movie ever', 
    releaseYear: 2018, 
    rottenTomatoes: 99, 
    director: 'best director ever'
}

function showProperties(obj){
    for (let key in obj)
        if(typeof obj[key] === 'string') 
            console.log(key + ':', obj[key]); 

}

showProperties(movie); 

