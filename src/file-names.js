const { NotImplementedError } = require('../extensions/index.js');

/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {any[]}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */
function renameFiles(names) {
  let tracker = new Set;
  let nameCount = {};
  let result = [];

  for (const name of names) {
    let newName = name;

    if (tracker.has(name)) {
      let suffix = nameCount[name] || 1;
      newName = `${name}(${suffix})`;

      while (tracker.has(newName)) {
        suffix += 1;
        newName = `${name}(${suffix})`;
      }
      nameCount[name] = suffix + 1;
    }
    tracker.add(newName);
    result.push(newName);
    }
  return result;

}

console.log(renameFiles(["file", "file", "image", "file(1)", "file"]));

module.exports = {
  renameFiles
};
