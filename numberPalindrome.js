var isPalindrome = function(x) {
  let stringNum = x.toString()
  let leftIndex = 0;
  let rightIndex = stringNum.length - 1;
  while(leftIndex < rightIndex){
      if(stringNum[leftIndex] !== stringNum[rightIndex]) return false;
      leftIndex++
      rightIndex--
  }
  return true;
};