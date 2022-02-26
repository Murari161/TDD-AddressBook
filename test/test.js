const assert    = require('chai').assert;
const expect    = require('chai').expect;
const Addbook = require('../address')

describe('Tests on address book', function(){   
    

    //First Test
    // it('1st term in the fib serie is 1', function(){
    //     assert.equal(fibonacci(1), 1);
    // });
    it('Test of array', function(){
        expect(Addbook).to.be.an('array')
    });
    it('Test of reference to keys', function(){
        expect(Addbook).to.have.any.keys("0", "1", "2");
    });
    // it('Test for properties', function(){
    //     expect(Addbook).to.include({
    //         "firstname" : "Joshua",
    //         "lastname" : "Murari",
    //         "number" : 123456
    // });
    it('Test for properties2', function(){
        expect(Addbook).to.deep.include({
            "firstname" : "Joshua",
            "lastname" : "Murari",
            "number" : 123456
    });
    
    });
});