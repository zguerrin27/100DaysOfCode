// Given an array and a number k where k is smaller than the size of the array, we need to find the k’th smallest element in the given array. It is given that all array elements are distinct.

// Input: arr[] = {7, 10, 4, 3, 20, 15}
//        k = 3
// Output: 7

// Input: arr[] = {7, 10, 4, 3, 20, 15}
//        k = 4
// Output: 10

let array1 = [7, 10, 4, 3, 20, 15]

function smallestInArray(arr, k){
  arr.sort((a,b) => a - b)
  return arr[k-1]
}

console.log(smallestInArray(array1, 4))