

function play(state, column, color)
{
  var depth = 0;
  while(state[depth][column] == null)
  {
    depth++; 
  }

  state[depth - 1][column] = color;
  
  return state;
}

//Returns a number
function eval(state)
{

}

//Returns a number
//0 = Not at end
//1 = you win
//2 = you lose
//3 = tie
//
//Not sure if we really need this
function checkEnd(state)
{

}
