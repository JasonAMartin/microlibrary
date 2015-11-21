'use strict';

var _uniqueRandomArray = require('unique-random-array');

var _uniqueRandomArray2 = _interopRequireDefault(_uniqueRandomArray);

var _gameNames = require('./game-names.json');

var _gameNames2 = _interopRequireDefault(_gameNames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = {
  all: _gameNames2.default,
  random: (0, _uniqueRandomArray2.default)(_gameNames2.default)
};
