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
 к *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  const count = {};

  for (let i = 0; i < domains.length; i += 1) {
    const parts = domains[i].split('.');
    let dnsSuffix = '';
    for (let j = parts.length - 1; j >= 0; j -= 1) {
      dnsSuffix = dnsSuffix + '.' + parts[j];
      count[dnsSuffix] = (count[dnsSuffix] || 0) + 1;
    }
  }
  return count;
}


module.exports = {
  getDNSStats
};
