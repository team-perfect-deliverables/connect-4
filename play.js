

function play(state, column, color) {
  var depth = 0;
  while(state[column][depth] == undefined || depth < 6) {
    depth++; 
  }

  var newState = state.slice();
  newState[column][depth - 1] = color;
  
  return newState;
}

//Returns a number
function eval(state) {

}

//Returns a number
//0 = Not at end
//1 = you win
//2 = you lose
//3 = tie
//
//Not sure if we really need this
function checkEnd(state) {

}

//Returns array of possible moves for the player this turn
function generateMoves(state, color) {
  var states = [];

  for(var i = 0; i < 7; i++)
  {
    if(state[i][0] == undefined)
    { 
      states.push(play(state, i, color);
    }
  }
}
