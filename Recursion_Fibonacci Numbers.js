
function fibonacci(n) {
  if (n <= 1) {
      return n;
  } else {
      return fibonacci(n - 1) + fibonacci(n - 2);
  }
}

function getNthFib(n){
  if(n === 2) return 1
  if(n === 1) return 0
  return getNthFib(n - 1) + getNthFib(n - 2);
}

function getNthFib(n, memo = {}){   // init empty memo object on top level call
  if(n in memo) return memo[n]; // this is the shortcut...if the result of n is in memo...return answer
  if(n === 2) return 1 // base case
  if(n === 1) return 0 // base case
  memo[n] = getNthFib(n - 1, memo) + getNthFib(n - 2, memo); //store result of recrusive call in memo[n] where n is the key and the answer is the value 
  return memo[n]; //return value of asked for key
}