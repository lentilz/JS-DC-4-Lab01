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
function draw(hand1, hand2, leader){
  for (var i = 0; i < leader; i++) {
    var p1Score = hand1[i][0].score,
        p2Score = hand2[i][0].score,
        leader;

    console.log( p1Score + ' vs ' + p2Score);

    if ( p1Score > p2Score ) {
      // reward player 1
      console.log(' player 1 wins round ');
      hand1.push( hand2.splice(i, 1) );
    } else if ( p1Score < p2Score ) {
      // reward player 2
      console.log( 'player 2 wins round ');
      hand2.push( hand1.splice(i, 1) );
    } else if ( p1Score === p2Score ) {
      // war ( draw more cards -- nested for loop or is that messy? )
      console.log( 'declare war');
    }

    // Store the leaders' hand length in variable
    // iterate w variable of changing greatest hand, so that the loop continues until someone's hand === 0
    if ( hand1.length > hand2.length ){
      leader = hand1.length;
      console.log('player 1 winning');
    } else {
      leader = hand2.length;
      console.log('player 2 is winning');
      // if player 1's hand is smaller, then either player 2 has a larger hand or they are even.
    }

    console.log( 'Track scores: ' + hand1.length + ' vs ' + hand2.length, leader );

    i++;
  }
}

draw(player1.hand, player2.hand, 5);

//
// console.log( 'Track scores: ', deck.length, player1.hand.length, player2.hand.length );
