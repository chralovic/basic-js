const CustomError = require("../extensions/custom-error");

module.exports = function calculateHanoi(disksNumber, turnsSpeed) {
  let abjekt = {};
  let turns = Math.pow(2, disksNumber) - 1;
  let czas = Math.floor(3600 * (turns / turnsSpeed));
  abjekt.turns = turns;
  abjekt.seconds = czas;
  return abjekt;

};