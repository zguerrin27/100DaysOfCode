


var removeDuplicates = function(nums) {
  if (nums.length <= 1) return nums.length;
    
  for(let i = 0; i < nums.length; i++){
      if(nums[i] === nums[i+1]){
          nums.splice(i,1);
          i--;  // this starts it over if dupe is found. protects from 3+ of same num
      }
  }
    return nums.length
};