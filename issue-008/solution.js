// implement your solution here
function sum() {
	//get arguments into an array
	var array = Array.from(arguments);
	//initialise total
 	var total = 0;
 	array.forEach(function(element) {
 		total += element;
 	});
 	return total;
}