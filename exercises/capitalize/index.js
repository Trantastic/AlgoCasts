// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'

function capitalize(str) {
	var arr = str.split("");

	if(!arr.includes(" ")) {
		var captFirst = arr[i].toUpperCase;
		arr.shift();
		arr.push(captFirst);
		return arr;
	}
	else if(arr.includes(" ")) {
		for(var i = 0; i < arr.length; i++) {
			if(!arr.includes(" ")) {
				var captFirst = arr[i].toUpperCase;
				arr.shift();
				arr.push(captFirst);
				return arr.join("");
			}
			else if(arr[i] == " ") {
				arr.splice(arr[i + 1], 1, arr[i].toUpperCase());
				return arr.join("");
			}
		}
	}
}

module.exports = capitalize;
