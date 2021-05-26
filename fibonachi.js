
//  Team mates: 1.Hazel Cimaro, 2.Gloria Tumwebaze , 3.Kiwumulo Nickson
function getNthFibonacci(n){ 
	if (0 === n) {
		return 0;
	}
    	if (1 === n) {
		return n-1;
	}
    if (n>2) {
        return getNthFibonacci (n-1) + getNthFibonacci (n-2);
	}
return n-1
}

module.exports=getNthFibonacci;