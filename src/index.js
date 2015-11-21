import uniqueName from 'unique-random-array';
import gameNames from './game-names.json';

module.exports = {
  all: gameNames,
  random: uniqueName(gameNames),
  startsWith: function letterList(letter) {
    let gamesList = [];
    for (let name of gameNames) {
      if (name.toLowerCase().startsWith(letter.toLowerCase())) gamesList.push(name);
    }
    return gamesList;
  }
};
