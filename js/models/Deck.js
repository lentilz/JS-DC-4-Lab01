var Card = require('./Card.js'),
suits = ['hearts', 'clubs', 'spades', 'diamonds']
var ranks = ['ace', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'jack', 'queen', 'king'];

module.exports = function Deck () {
  var deck = []

  for (var i = 0; i < suits.length; i++) {
    for (var j = 0; j < ranks.length; j++) {
      deck.push( new Card( suits[i], ranks[j] ) )
    }
  }
  // console.log( deck );

  return deck
}
