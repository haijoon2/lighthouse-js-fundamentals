const finalPosition = function (moves) {
  let x = 0;
  let y = 0;
  for (let i = 0; i < moves.length; i++) {
    const move = moves[i];
    if (move === "north") {
      y++;
    } else if (move === "south") {
      y--;
    } else if (move === "west") {
      x--;
    } else if (move === "east") {
      x++;
    }
  }

  return [x, y];
};

const moves = ["north", "north", "west", "west", "north", "east", "north"];

finalPosition(moves);
