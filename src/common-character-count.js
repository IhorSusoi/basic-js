const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(str1, str2) {
  str1 = str1.split('').sort();
  str2 = str2.split('').sort();
  let count=0;
  let str1len=str1.length;
  let str2len=str2.length;
  for(let i=0; i < ((str1len<str2len) ? str1len : str2len); i++){
    for(let j=0; j < ((str1len>str2len) ? str1len : str2len); j++){
      if(str1[i]===str2[j]){
        count++;
        str2.splice(j,1);
        j--;
        break;
      }
    }
  }
  return count;
}

module.exports = {
  getCommonCharacterCount
};
