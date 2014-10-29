

function play(state, column, color) {
  var depth = 0;
  while(state[depth][column] == null) {
    depth++; 
  }

  var newState = state.slice();
  newState[depth - 1][column] = color;
  
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
    if(state[0][i] == null)
    { 
      states.push(play(state, i, color);
    }
  }
}
