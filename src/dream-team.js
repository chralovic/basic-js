const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  let acronym = [];
  members.forEach(item => {
    if (typeof item === 'string') {
      acronym.push(item[0].toUpperCase())
    } else return false;

  })
  return acronym.sort().join('');
};