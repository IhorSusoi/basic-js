const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(arr) {
  let dreamTeam='';
  if(!Array.isArray(arr))return false;

    for(let key of arr){
      if(typeof key==='string'){
        key=key.trim();
        key=key.toUpperCase();
        dreamTeam+=key[0];
      }
    }
    dreamTeam=dreamTeam.split('');
    dreamTeam=dreamTeam.sort();
    dreamTeam=dreamTeam.join('');
  return dreamTeam;
}

module.exports = {
  createDreamTeam
};
