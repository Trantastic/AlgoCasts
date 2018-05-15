// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

function reverseInt(n) {
	console.log("running");

	var sign = Math.sign(n);
	var string = n.toString().split("");
	var arr = [];

	switch(sign) {
		case 1:
			for(var i = string.length - 1; i !== -1; i--) {
				arr.push(string[i]);
			}
			break;
		case -1:
			for(var i = string.length - 1; i < 0; i--) {
				arr.push(string[i]);
				arr.unshift("-");
				console.log("arr", arr);
			}
			break;
		case 0:
			break;
	}

	return parseInt(arr.join(""));
}

reverseInt(-5);

module.exports = reverseInt;
