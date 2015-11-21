import uniqueName from 'unique-random-array';
import gameNames from './game-names.json';

module.exports = {
  all: gameNames,
  random: uniqueName(gameNames)
};
