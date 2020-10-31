// 560. Longest Subarray sum equals k

// Given an array of integers nums and an integer k, return the total number of continuous subarrays whose sum equals to k.
// [1,1,1], 2

// O (n^) 

var subarraySum = function(nums, k) {
  let count = 0;
    for(let i = 0; i < nums.length; i++){
        let sum = 0;
        for(let j = i; j < nums.length; j++){  // loops over each value from start and totals them up
            sum += nums[j]
            if(sum === k){
                count += 1;
            }
        }
    }
    return count;
};

var subarraySum = function(nums, k) {
  const map = new Map([[0, 1]]);
  let sum = 0;
  let total = 0;
  for (let num of nums) {
      sum = sum + num;
      total += (map.get(sum - k) || 0);
      map.set(sum, (map.get(sum) || 0) + 1);
  }
  
  return total;
};