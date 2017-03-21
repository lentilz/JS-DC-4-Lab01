// War game

var Player = require('./js/models/Player.js'),
    Deck = require('./js/models/Deck.js'),
    Prompt = require('./js/models/Prompt.js');

// Prompt;

// Step 1:
// create new Deck and initialize new set of players
var deck = new Deck(),
    player1 = new Player('WarChamp1'),
    player2 = new Player('BeginnersLuck') ;

// Step 2:
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

  // console.log( deck.length );
}

// Step 3:
// compare player hands
for (var i = 0; i < 10; i++) {
  var p1Score = player1.hand[i][0].score,
      p2Score = player2.hand[i][0].score;

  // console.log( player1.hand[i], player1.hand[i][0].score );
  // console.log( player2.hand[i], player2.hand[i][0].score );
  console.log( p1Score + ' vs ' + p2Score);

  if ( p1Score > p2Score ) {
    // reward player 1
    console.log(' player 1 wins round ');
    player1.hand.push( player2.hand.splice(i, 1) );
  } else if ( p1Score < p2Score ) {
    // reward player 2
    console.log( 'player 2 wins round ');
    player2.hand.push( player1.hand.splice(i, 1) );
  } else if ( p1Score === p2Score ) {
    // war ( draw more cards )
    console.log( 'declare war');
  }
}

console.log( deck.length, player1.hand.length, player2.hand.length );
