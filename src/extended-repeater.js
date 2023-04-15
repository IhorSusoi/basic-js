const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, { repeatTimes=0, separator='+', addition='', additionRepeatTimes=0, additionSeparator='|' }) {
  
  let result='';
  for(let i=0; i<repeatTimes; i++){
    result=result+str;
    for(let j=0; j<additionRepeatTimes; j++){
      result=result+addition+((j+1)<additionRepeatTimes?additionSeparator:'');
    }
    if(i+1<repeatTimes)result=result+separator;
  }
  if(repeatTimes==0){
    result=result+str;
  }
  if(additionRepeatTimes==0){
    result=result+addition;
  }
  return result;
}

module.exports = {
  repeater
};
