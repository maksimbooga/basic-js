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
function getCommonCharacterCount( s1, s2 ) {
  const countOccurrences = s => {
    return s.split('').reduce((acc, cur) => {
       acc[cur] = (acc[cur] || 0) + 1;
       return acc;
    }, {});
  };
  const count1 = countOccurrences(s1);
  const count2 = countOccurrences(s2);

  let count = 0;
  for (const char in count1 ) {
    if (char in count2) {
      count += Math.min(count1[char], count2[char]);
    }
  }
  return count;
}

module.exports = {
  getCommonCharacterCount
};
