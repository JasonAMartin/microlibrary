# MICROLIBRARY

Testing out creating a microlibrary for GitHub, NPM, etc.

:memo: This library does nothing special. It has a list of games that I've played and it returns all of them, random one or a list starting with whatever criteria is passed in.

For this microlibrary, I wanted to experiment with implementing a CI build system. I'm using Travis CI along with coveralls. Additionally, I use Istanbul for coverage.

Travis CI report:
![Travis CI](https://travis-ci.org/JasonAMartin/microlibrary.svg?branch=master)

Coverage via Coveralls.io:
![Coverage Status](https://coveralls.io/github/JasonAMartin/microlibrary?branch=master)

For testing, I'm using mocha / chai.

:collision: I'm using ES2015, but for testing, I point to the ES5 file, which may be why coverage is reporting at under 100%.

## Install:

npm install microlibrary

## Usage:

```javascript
var games = require('microlibrary');
console.log(games.all()); // prints out entire list
console.log(games.random()); // prints out a random game.
console.log(games.startsWith('d'); // prints out all games starting with d (not case sensitive)
```
