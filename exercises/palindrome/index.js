// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

// Solution One
// function palindrome(str) {
// 	const reversed = str.split('').reverse().join('');

// 	if(str === reversed){
// 		return true;
// 	}
// 	else if(str !== reversed){
// 		return false;
// 	}
// }

// Solution Two
palindrome = (str) => {
	const toLowerCase = str.toLowerCase();
	const trim = toLowerCase.replace(/\s+/g, '');
	const splitStr = trim.split('');
	const arr = [];

	for(let i = splitStr.length - 1; i !== -1; i--){
		arr.push(splitStr[i]);
	}

	if(arr.length === splitStr.length) {
		arr.join('');
		splitStr.join('');

		if(arr !== splitStr) {
			return false;
		}
		else if(arr == splitStr) {
			return true;
		}

		console.log("split", splitStr);
		console.log("arr", arr);
	}
	console.log('end');
}

palindrome("pennep");

module.exports = palindrome;
