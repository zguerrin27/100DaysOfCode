function findThreeLargestNumbers(array) {
  // Write your code here.
	// init empty 3 place arr.
	const threeLargest = [null, null, null];
	// loop over each num and pass into function to manipulate array
	for(const num of array){
		//call helper that updates array
		updateLargest(threeLargest, num)	
	}
	return threeLargest;
}


function updateLargest(threeLargest, num){
	if(threeLargest[2] === null || num > threeLargest[2]){
		shiftAndUpdate(threeLargest, num, 2) // fix up result arr
	} else if (threeLargest[1] === null || num > threeLargest[1]){
		shiftAndUpdate(threeLargest, num, 1)
	} else if(threeLargest[0] === null || num > threeLargest[0]){
		shiftAndUpdate(threeLargest, num, 0)
	}
}

function shiftAndUpdate(array, num, idx){
	for(let i = 0; i <= idx; i++){
		if(i === idx){
			array[i] = num
		} else {
			array[i] = array[i + 1]
		}
	}
}
