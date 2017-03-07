function strictCheck(a, b) {
    // implement your solution here
    if(a === b){
    	console.log("Strictly Equal");
    	return 1;
    }else if( a == b){
    	console.log("Equal");
    	return true;
    }else {
    	console.log("Not true");
    	return false;
    }
}
