const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  let objectDNS={};
  let arr=domains.slice();
  for(let i=0; i<domains.length; i++){
    arr[i]=arr[i].split('.');
    arr[i]=arr[i].reverse();
    for(let j=0; j<arr[i].length; j++){
    arr[i][j]='.'+arr[i][j];
    }
  }
  for(let i=0; i<arr.length; i++){
    let jIt=arr[i].length;
    for(let j=0; j<jIt; j++){
      if(!objectDNS[arr[i][0]]) objectDNS[arr[i][0]]=1; 
      else objectDNS[arr[i][0]]++;
      arr[i][0]=arr[i][0]+arr[i][1];
      arr[i].splice(1,1);
    }
  }
  return objectDNS;
}

module.exports = {
  getDNSStats
};
