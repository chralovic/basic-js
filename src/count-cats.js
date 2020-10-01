const CustomError = require("../extensions/custom-error");

module.exports = function countCats(backyard) {
  let licznikKotow = 0;
  let newB = backyard.flat();
  newB.forEach(item => {
    if (item === '^^') {
      licznikKotow++;
    }
  })
  return licznikKotow;
}