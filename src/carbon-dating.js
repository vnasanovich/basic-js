const { NotImplementedError } = require('../extensions/index.js');

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

/**
 * Determine the age of archeological find by using
 * given MODERN_ACTIVITY and HALF_LIFE_PERIOD values
 * 
 * @param {String} sampleActivity string representation of current activity 
 * @return {Number | Boolean} calculated age in years or false
 * in case of incorrect sampleActivity
 *
 * @example
 * 
 * dateSample('1') => 22387
 * dateSample('WOOT!') => false
 *
 */
function dateSample(sampleActivity) {
  const MODERN_ACTIVITY = 15;
  const HALF_LIFE_PERIOD = 5730;
 if((+sampleActivity > MODERN_ACTIVITY || +sampleActivity <=0 || typeof sampleActivity !== 'string'|| isNaN(+sampleActivity)))  {
  return false;}
  else {
    const age = Math.log(MODERN_ACTIVITY / sampleActivity) / (0.693/5730);
    return Math.ceil(age);
  }

}

module.exports = {
  dateSample
};
