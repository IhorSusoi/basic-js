const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  let arr = [], it=0;
  for (let i = 0; i < str.length; i++){
    if(i==0){
    arr.push([1,str[i]]);
    it++;
      continue;
    }
    if(str[i]==arr[it-1][1]){
      arr[it-1][0]++;
    } else {
      arr.push([1,str[i]]);
      it++;
    }
  }
  return arr.toString().split(',').join('').split('1').join('');
}

module.exports = {
  encodeLine
};
