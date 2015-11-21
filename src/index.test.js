var expect = require('chai').expect;
var gameNames = require('./index');

describe('game-names', function(){
  describe('all', function(){
    it('should be an array of strings', function() {
      expect(gameNames.all).to.satisfy(isArrayOfStrings);
      function isArrayOfStrings(array){
        return array.every(function(item){
          return typeof item === 'string';
        });
      }
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
  });
});