const Addbook = require('../Addbook/address')


function display(){
    console.log(Addbook);
}

// display();

Addbook.unshift({
    "firstname" : "Joshua3",
    "lastname" : "Murari3",
    "number" : 123456
})

display();
console.log(Addbook.length);




module.exports