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
function palindrome(str) {
	let reverse = "";

	for(let char of str) {
		reverse = char + reverse;
	}

	if(reverse === str) {
		return true;
	}
	else {
		return false;
	}
}

module.exports = palindrome;
