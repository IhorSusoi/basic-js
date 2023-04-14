const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(number) {
  number=number+'';
  number=number.split('');
  let maxNumber=0;
  for(let i=0; i<number.length; i++){
    let tempArr=number.slice();
    tempArr.splice(i,1);
    let tempNumber=tempArr.join('');
    if(+tempNumber>maxNumber) maxNumber= +tempNumber;
  };
  return maxNumber;
}
//deleteDigit(1001);

module.exports = {
  deleteDigit
};
