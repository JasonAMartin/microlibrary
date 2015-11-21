# MICROLIBRARY

Testing out creating a microlibrary for GitHub, NPM, etc.

This library does nothing special. It has a list of games that I've played and it returns all of them, random one or a list starting with whatever criteria is passed in.

[![Travis CI:](https://travis-ci.org/JasonAMartin/microlibrary.svg?branch=master)

Testing coveralls.io.

[![Coverage Status](https://coveralls.io/repos/JasonAMartin/microlibrary/badge.svg?branch=master&service=github)](https://coveralls.io/github/JasonAMartin/microlibrary?branch=master)


- using mocha / chai

##Install:

npm install microlibrary

##Usage:

```javascript
var games = require('microlibrary');
console.log(games.all()); // prints out entire list
console.log(games.random()); // prints out a random game.
console.log(games.startsWith('d'); // prints out all games starting with d (not case sensitive)
```
