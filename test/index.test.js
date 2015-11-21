/*
  Sidenote: When I was trying to run this test with Istanbul/Mocha through Babel so this page could reference the ES6 SRC,
  I was getting either errors or success, but no coverage.
*/

var expect = require('chai').expect;
var gameNames = require('../dist/index');

function isArrayOfStrings(array){
  return array.every(function(item){
    return typeof item === 'string';
  });
}

describe('game-names', function(){
  describe('all', function(){
    it('should be an array of strings', function() {
      expect(gameNames.all).to.satisfy(isArrayOfStrings);
    });

    it('should contain `World of Warcraft`', function(){
      expect(gameNames.all).to.include('World of Warcraft');
    });

    describe('random', function(){
      it('should return a random game name from gameNames.all', function(){
        var randomName = gameNames.random();
        expect(gameNames.all).to.include(randomName);
      });
    });

    describe('startsWith', function(){
      it('should return an array of strings using gameNames.startsWith()', function(){
        var gameList = gameNames.startsWith('d');
        expect(gameNames.startsWith('d')).to.satisfy(isArrayOfStrings);
      });
    });
  });
});
