const Addbook = require('../Addbook/address')


function display(){
    console.log(Addbook);
}

// display();

// Addbook.unshift({
//     "firstname" : "Joshua3",
//     "lastname" : "Murari3",
//     "number" : 123456
// })
function AddContact(){
    Addbook.unshift({
        "firstname" : "Joshua4",
        "lastname" : "Murari4",
        "number" : 123456
    })
;}
function DeleteContact(){
    Addbook.splice(0,0)
;}


// AddContact();
// AddContact();
// DeleteContact();
let finder = Addbook.find(finder => Addbook.firstname === "Joshua2");
console.log(finder)
// display();
// console.log(Addbook.length);




module.exports