const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an email address, return it's domain.
 *
 * @param {String} email
 * @return {String}
 *
 * @example
 * For the input 'prettyandsimple@example.com', the output should be 'example.com'
 *
 */
function getEmailDomain(str) {
  str=str.split('').reverse();
  let result=[];
  let i=0;
  while(str[i]!='@'){
    result.push(str[i]);
    i++;
  }
  return result.reverse().join('');
}

module.exports = {
  getEmailDomain
};
