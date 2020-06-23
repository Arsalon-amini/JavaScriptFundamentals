 //String Object
const another = new String('Hi');
console.log(typeof(another)); 


//String Primitive
const message = 'This is my first message'; //JavaScript will wrap primitive string into String obj.  
console.log(message.length); //get char length 
console.log(message[0]); //access char at given index 
console.log(message.includes('my')); //check if string includes chars
console.log(message.startsWith('this')); //checks starting chars, is case sensitive
console.log(message.indexOf('my')); //gives index of Char
console.log(message.replace('first', 'second')); //returns a new string with chars replaced 
console.log(message.toUpperCase()); //returns new string in uppercase
console.log(newMessage.split(' ')); //returns an array, each item are chars delimited by a white space 
const whiteMessage = '     This is a message with whitespaces    '; //trims whitespaces 
console.log(whiteMessage.trim()); 

const newMessage = ' This is my\n new message'; // creates a new line '\n' 

const message = 
'This is my\n' +
'\'first\' message'; // uses normal '' or "" to define string (requires escape chars)


//template literals 
const another = 
`This is my 
'first' message`; // uses `` (template literal) to define string (doesn't require escape chars)

//dynamic fields 
const name = 'John'; 

const email = 
`Hi ${name},

Thank you for joining my mailing list

Regards, 

Arsalon`; 

console.log(email); 

//splitting and joining strings (useful for converting queries into URLs)
const message = 'This is my first message'; 
const parts = message.split(' '); //returns an array (each element a word in original sentence)

const combineWords = parts.join('-'); 
console.log(combineWords); 