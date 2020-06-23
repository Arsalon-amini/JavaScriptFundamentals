
//Object literal syntax 
let addressV1 = { 
    street: 'a',
    city: 'b',
    zipCode: 'c'
} ;


//factory function (returns an obj)
function createAddress (street, city, zipCode) {
    return{
        street,
        city,
        zipCode
    }
}; 

let addressV2 = 
    createAddress('46th', 'Milwaukee', '532223'); 

function showAddress(address){
    for(let key in address)
        console.log(key, address[key]);
}

showAddress(address); 


//constructor function 
function Address(street, city, zipCode){
    this.street = street;
    this.city = city;
    this.zipCode = zipCode;
};

const addressV3 = new Address('46th', 'Milwaukee', 53223); 
showAddress(addressV3); 

function showAddress(address){
    for(let key in address)
        console.log(key, address[key]);
}








