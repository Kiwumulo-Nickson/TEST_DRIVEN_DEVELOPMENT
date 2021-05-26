//  Team mates: 1.Hazel Cimaro, 2.Gloria Tumwebaze , 3.Kiwumulo Nickson

function factorial(n) {
	if (0 === n) {
		return 1;
	}

	if (1 === n) {
		return 1;
	}

	if (n > 1) {
		return n * factorial(n - 1);
	}
}

module.exports = factorial;
