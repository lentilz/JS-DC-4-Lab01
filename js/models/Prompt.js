var prompt = require('prompt');

// Start the prompt
prompt.start();

// Get players usernames
// function Prompt (){
//   prompt.get(['player_1', 'player_2'], function (err, result) {
//     // log player inputs
//     console.log('Command-line input received:');
//     console.log('  player 1: ' + result.player_1);
//     console.log('  player 2: ' + result.player_2);
//   });;
// }

module.exports.Prompt = function(){
  prompt.get(['player_1', 'player_2'], function (err, result) {
    // log player inputs
    console.log('Command-line input received:');
    console.log('  player 1: ' + result.player_1);
    console.log('  player 2: ' + result.player_2);
  });
}
