//  Team mates: 1.Hazel Cimaro, 2.Gloria Tumwebaze , 3.Kiwumulo Nickson

const assert = require('chai').assert;

const getNthFibonacci = require('../fibonachi');

describe('Getting a Fibonacci number.', () => {
	it('should return zero as the 1st Fibonacci number', () => {
        assert.equal(getNthFibonacci(1),0);
	});
	it('should return 1 as the 2st Fibonacci number', () => {
        assert.equal(getNthFibonacci(2),1);
	});
	it('should return 1 as the 3rd Fibonacci number', () => {
        assert.equal(getNthFibonacci(3),1);
	});
});




//const { expect } = require("chai")


// it('should return zero as the 1st Fibonacci number',() =>{
//     expect(getNthFibonacci(1).tobe(o));
// })