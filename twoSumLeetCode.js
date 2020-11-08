var twoSum = function(nums, target) {
  for(let i = 0; i < nums.length; i++){
      for(let j = i + 1; j <= nums.length; j++){
          if(nums[i] + nums[j] === target){
              return [[i],[j]]
          }
      }
  }  
}; 


var twoSum = function(nums, target) {
  let dic = {}
  for(let i = 0; i < nums.length; i++) {
    let potential = target-nums[i]
      if (potential in dic) {
          return [dic[potential], i]
      }
      dic[nums[i]] = i
  }
}; 