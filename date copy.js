//formatting Date object with overloaded constructor 
const now = new Date();
const date1 = Date('May 11 2019 9:00'); //can pass a string to access specific format (see all in javascript date)
const date2 = new Date(2018, 4, 11, 9);  //can pass numbers to access specific format (year, month (jan = 0), day, time)

console.log(now); 
console.log(date1); 
console.log(date2); 

// getters/setters for the Date object 
console.log(now); 
now.setFullYear(2017); //sets the year in the date object
console.log(now); 
console.log(now.toDateString()); //gets the date component of the Date obj
console.log(now.toTimeString()); //gets the time component of the Date obj
console.log(now.toISOString()); //gets the ISO format of the Date obj