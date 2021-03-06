// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
	const obj = {};
	let maxNum = 0;
	let maxChar = "";

	for(let char of str) {
		if(obj[char]) {
			obj[char]++;
		}
		else {
			obj[char] = 1;
		}
	}

	for(let char in obj) {
		if(obj[char] > maxNum) {
			maxNum = obj[char];
			maxChar = char;
		}
	}
	return maxChar;
}

module.exports = maxChar;
