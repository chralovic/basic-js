const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

module.exports = function dateSample(sampleActivity) {
  let akti = Number(sampleActivity);
  if (sampleActivity === undefined || typeof sampleActivity !== 'string' || akti.isInteger != true || sampleActivity <= 0) {
    return false;
  } else {
    return age = Math.ceil(Math.log(15 / akti) / 0.000122)
  }
};