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
function encodeLine( str ) {
  let count = 0;
  let encode = '';

  for (let i = 0; i < str.length; i++) {
    count++;
    if (str[i] !== str[i + 1]) {
      if (count > 1) {
        encode += count;
      }
        encode += str[i];
        count = 0;
    }
  }
  return encode;
  // remove line with error and write your code here
}

module.exports = {
  encodeLine
};
