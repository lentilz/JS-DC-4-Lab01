// War game

var Player = require('./js/models/Player.js'),
    Deck = require('./js/models/Deck.js'),
    Prompt = require('./js/models/Prompt.js');

Prompt;

// create new Deck and initialize new set of players
var deck = new Deck(),
    player1 = new Player('WarChamp1'),
    player2 = new Player('BeginnersLuck') ;

// console.log( deck, player1.username, player2.username );
// console.log(player1.hand);

// split the deck amongst both players
while ( deck.length > 0 ) {
  // select random card:
  // 1. remove random index value from the deck and assign/push deal to each player
  // 2. splicing the deck will act as the increment value during each iteration
  var deal1 = deck.splice(Math.floor(Math.random() * deck.length), 1),
      deal2 = deck.splice(Math.floor(Math.random() * deck.length), 1);

  // console.log( deal1, deal2 );

  player1.hand.push( deal1 );
  player2.hand.push( deal2 );
  // //
  // console.log( 'player 1: ' );
  // console.log( player1.hand );
  // //
  // console.log( 'player 2: ' );
  // console.log( player2.hand );

  console.log( deck.length );
}

console.log( deck.length, player1.hand.length, player2.hand.length );
