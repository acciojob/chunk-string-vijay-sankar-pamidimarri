function stringChop(str, size) {
  // your code here
	if(size==0 || str.length==0){
		return [];
	}
	
	let arr=[];
	let st=0;
	while(st<str.length){
		let mi=Math.min(size+st,str.length);
		arr.push(str.substring(st,mi));
		st=mi;
	}
	return arr;
}

// Do not change the code below
// const str = prompt("Enter String.");
// const size = prompt("Enter Chunk Size.");
alert(stringChop(str, size));
