var assert = require('assert');

describe('Array.indexOf',() => {

	it('should return -1 when value is not present',() => {
		assert.equal([1].indexOf(2), -1);
	});
	
});
