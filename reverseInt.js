// let int = 123
// let int = -123
// let int = 0 
// let int = 120
// let int = 1534236469
// let int = -1534236469


var reverse = function(x) {
  let outputStr = ''
 
  if(x > 0){
      let strX = x.toString();
      for(let i = strX.length - 1; i >= 0; i--){
          outputStr += strX[i]
      }
      if(outputStr[0] === 0){
        outputStr = outputStr.substring(1)
      }
      if (parseInt(outputStr) > 2 ** 31 - 1) {
        return 0;
      } else {
        return parseInt(outputStr);
      }
  } else if(x < 0){
      let strX = Math.abs(x).toString()

      for(let i = strX.length - 1; i >= 0; i--){
          outputStr += strX[i]
      }
      if (parseInt(outputStr) > 2 ** 31 - 1) {
        return 0;
      } else {
        return -Math.abs(parseInt(outputStr));
      }

  } else {
      return 0
  }
  
};