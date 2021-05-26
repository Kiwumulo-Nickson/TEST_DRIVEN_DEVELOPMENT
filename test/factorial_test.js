//  Team mates: 1.Hazel Cimaro, 2.Gloria Tumwebaze , 3.Kiwumulo Nickson
//right code
const assert = require('chai').assert;

const factorial = require('../factorial');

describe('Calculating a factorial number.', () => {
	it('0! should be 1', () => {
        assert.equal(factorial(0),1);
	});

	it('1! should be 1', () => {
        assert.equal(factorial(1),1);
	});

	it('5! should be 120', () => {
        assert.equal(factorial(5),120);
	});
});

//last edit



// const assert = require('chai').assert;
// // const app= require('../index');
// const factorial = require('../index');

// describe('evaluate 0!.', () => {
// 	it('0! should be 1', () => {
//         assert.equal(factorial(0),1);
// 	});
// });

// const assert = require('chai').assert;
// const app= require('../index');

// describe('App', function(){
//     it('app should return hello',function(){
//       assert.equal(app());
//     })
// })
