// Given an array  of  integers and a number, , perform  left rotations on the array. 
// Return the updated array to be printed as a single line of space-separated integers.


function rotLeft(a, d) {
  while(d){                     // while d has a value (is not falsy)
      a.push(a.shift());        // push the shifted element to the end 
      d--                       // decrement d's value 
  }
  return a;                     // return a
}