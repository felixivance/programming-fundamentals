// implement your solution here
function mostFrequent(s) {
	var paragraph = s.toLowerCase().split(/[ (),!.";:-]+/).filter(Boolean).sort();
	var words = [];
	var count = [];
	var index;
	paragraph.forEach(function(item) {
		index = words.indexOf(item);
		
        if (index === -1) { //non existent word
        	words.push(item);
        	count.push(1);
        } else {
        	count[index] += 1;	
        }
    });
    var most = count[0];
    
    for (i = 1; i < count.length; i++){ //max count
    	if (count[i] > most) {
    		most = count[i];
    	}
    }
    //index of largest count
    index = count.indexOf(most);
    var frequent = words[index];
	return frequent;
}