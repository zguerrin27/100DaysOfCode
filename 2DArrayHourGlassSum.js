
// hackerrank 2d array sum challenge 

// 1 1 1 0 0 0
// 0 1 0 0 0 0
// 1 1 1 0 0 0
// 0 0 0 0 0 0
// 0 0 0 0 0 0
// 0 0 0 0 0 0


// a b c
//   d
// e f g


function hourglassSum(arr) {
  let largest = arr[0][0] + arr[0][1] + arr[0][2] + arr[1][1] + arr[2][0] + arr[2][1] + arr[2][2];
  
  for(let i = 0; i < arr.length - 2; i++){
      for(let j = 0; j < arr.length - 2; j++){
          
          let sum = arr[i][j] + arr[i][j+1] + arr[i][j+2] + arr[i+1][j+1] + arr[i+2][j] + arr[i+2][j+1] + arr[i+2][j+2];
          if(sum > largest){
              largest = sum;
          }
          
      }
      
  }
  return largest;
}