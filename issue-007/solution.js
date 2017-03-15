// implement your solution here
function superSum(a) {
	var sum = 0;
 	a.forEach(function(val) {

 		var val2 = String(val);

 		for (i = 0; i < val2.length; i ++) {

 			sum += +val2[i];
 		}
 	}
 	);
 	return sum;
 
}