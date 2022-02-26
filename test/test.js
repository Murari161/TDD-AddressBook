const assert    = require('chai').assert;
const expect    = require('chai').expect;
const Addbook = require('../address')

describe('Return the nth term n a fibonaci series', function(){   
    

    //First Test
    // it('1st term in the fib serie is 1', function(){
    //     assert.equal(fibonacci(1), 1);
    // });
    it('Test of array', function(){
        expect(Addbook).to.eql({ firstname: 'Joshua', lastname: 'Murari', number: 123456 },
        { firstname: 'Joshua2', lastname: 'Murari2', number: 123456 },
        { firstname: 'Joshua3', lastname: 'Murari3', number: 123456 });
    });
    
});