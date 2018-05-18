// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0

// Solution One
function vowels(str) {
	var counter = 0;
	var toLower = str.toLowerCase();
	var arr = toLower.split("");

	for(var i = 0; i < arr.length; i++) {
		if(arr[i].includes("a") || arr[i].includes("e") || arr[i].includes("i") || arr[i].includes("o") || arr[i].includes("u")) {
			counter++;
		}
	}
	return counter;
}

module.exports = vowels;
