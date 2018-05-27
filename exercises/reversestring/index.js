// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

// Solution One
// function reverse(str) {
// 	var splitStr = str.split('');

// 	return splitStr.reverse().join('');
// }

// Solution Two
// function reverse(str) {
// 	var splitStr = str.split('');
// 	var arrHolder = [];

// 	for(var i = splitStr.length - 1; i >= 0; i--){
// 		arrHolder.push(splitStr[i]);
// 	}

// 	var reversed = arrHolder.join('');
// 	return reversed;
// }

// Solution Three
function reverse(str) {
	var arr = str.split("");
	var reversed = [];

	for(var i = 0; i < arr.length; i++){
		reversed.unshift(arr[i]);
	}
	return reversed.join("");
}

module.exports = reverse;
