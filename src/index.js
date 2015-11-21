var uniqueName = require('unique-random-array');
var gameNames = require('./game-names.json');

module.exports = {
  all: gameNames,
  random: uniqueName(gameNames)
};
