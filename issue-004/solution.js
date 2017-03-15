function grade(a) {
    // implement your aolution here
    if (a <= 100 && a >= 80) {
    	console.log("A");
       return 'A';
     } else if (a < 80 && a >= 60) {
     	console.log("B");
         return 'B';
     } else if (a < 60 && a >= 50) {
         console.log("C");
         return 'C';
     } else if (a < 50 && a >= 40) {
     	console.log("D");
         return 'D';
     } else if (a < 40 && a >= 30) {
     	console.log("E");
         return 'E';
     } else if (a >= 0 && a < 30) {
     	console.log("F");
         return 'F';
     }
    // implement your aolution here		 
    


}
