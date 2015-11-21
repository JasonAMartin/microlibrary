import {expect} from 'chai';
import gameNames from './index';

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
