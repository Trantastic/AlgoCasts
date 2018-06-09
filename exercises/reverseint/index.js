// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

// Solution One
// function reverseInt(n) {
// 	var string = n.toString().split('').reverse().join('');

// 	return parseInt(string) * Math.sign(n);
// }

// Solution Two
function reverseInt(n) {
	var reverseInt = n.toString().split("");

	if(reverseInt.length === 0) {
		return n;
	}
	else {
		return parseInt(reverseInt.reverse().join("")) * Math.sign(n);
	}
}

module.exports = reverseInt;
