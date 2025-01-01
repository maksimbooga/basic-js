const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 * 
 * @example
 * 
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
class DepthCalculator {
  calculateDepth( arr ) {
    if (!arr.some(i => Array.isArray(i))) {
      return 1;
    }
    return 1 + Math.max(...arr.map(i => {
      return Array.isArray(i) ? this.calculateDepth(i) : 0;
    }));
    // remove line with error and write your code here
  }
}

module.exports = {
  DepthCalculator
};
