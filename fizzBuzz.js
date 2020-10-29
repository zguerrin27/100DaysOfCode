// fizz buzz problem on leetcode 


var fizzBuzz = function(n) {
  let final = [];
    for(let i = 1; i <= n; i++){
      if(i % 15 === 0) {final.push('FizzBuzz')}
      else if(i % 3 === 0) {final.push('Fizz') }
      else if(i % 5 === 0) {final.push('Buzz')}
      else {final.push(i.toString())}
    }
  return final;
 };