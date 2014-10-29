

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
