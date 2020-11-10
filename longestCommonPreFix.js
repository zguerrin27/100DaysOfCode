let strings = ["flower","flow","flight"]

var longestCommonPrefix = function(strs) {
  let result = '';
  if(strs.length == 0) return result;
  if(strs.length == 1) return strs[0];

  for(let i = 0; i < strs[0].length; i++){
      let comparisonLetter = strs[0][i];
   
      for(let j = 1; j < strs.length; j++ ){
        
        if(comparisonLetter == strs[j][i] && j == strs.length-1){
          result += comparisonLetter;
        } else if(comparisonLetter != strs[j][i]){
          return result;
        } 
        
      }
   }
return result;
};

console.log(longestCommonPrefix(strings))