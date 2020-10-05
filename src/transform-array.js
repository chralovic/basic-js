const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
  const newArr = [].concat(arr);

  if (arr.isArray === false) {
    throw new Error('Not implemented');
  } else {
    newArr.forEach(item => {
      switch (item) {
        case '--discard-next':
          newArr.splice(item.length, 2);
        case '--discard-prev':
          newArr.splice(item.length - 1, 2);
        case '--double-next':
          newArr.splice(item.length, 1);
          newArr[item.length + 1] = newArr[item.length + 1] * 2;
        case '--double-prev':
          newArr[item.length - 1] = newArr[item.length - 1] * 2;
          break;
      }
    })
  }
  return newArr;
};