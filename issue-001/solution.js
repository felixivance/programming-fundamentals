function dataTypeCheck(a) {
    // implement your solution here
     if (a === +a && a % 1 === 0 ) {
	 	console.log("its an integer"); //log the result true
        return (a / 2);
    } else if (a === +a && a % 1 !== 0 ) {
    	console.log("its a float");
        return a * 2;
    } else if (typeof a === "string" && isNaN(Number(a)) === false) {
    	console.log("its a string");
        return Number(a);
        
    } else if (typeof a === "string") {
    	console.log("Any other string");
    	var ans= "hello "+a;
    	console.log(ans) ;
        return "hello " + a;
    } else if (typeof a !== "string" && isNaN(a) === true) {
    	console.log("Nan");
        return 0;
    } else if (a === null) {
    	console.log("Null");
        return 0;
    } else if (a === undefined) {
    	console.log("undefined");
        return false;
    }

}