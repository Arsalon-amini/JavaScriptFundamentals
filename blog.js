 //constructor function    
 function Post(title, body, author){
    this.title = title;
    this.body = body; 
    this.author = author;
    this.views = 0;
    this.comments = [];
    this.isLive = false; 
}

let post = new Post('a', 'b', 'c'); 
console.log(post); 

//object literal syntax
let blogPost = {
    title: 'a',
    body: 'b',
    author: 'c',
    views: 10,
    comments: [
        {author: 'a', body: 'b'}, //array of objects
        {author: 'c', body: 'd'}
    ],
    isLive: false
}


