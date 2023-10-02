
let playerIsDone, computerIsDone

function gameLoop() {
  background(200);

  for (let i = 0; i < 10; i++) {
  texture(rs[i]);
    plane(250, 250);
  };

  switch(currentState) {
    case 'menu':
      // Menu state code here
      image(bkgd, -width / 2, -height / 2, width, height);
      break;

    case 'playerTurn':
      // Player turn code here
      background(200,0,0);
      drawBoard();
      if (playerIsDone) {
        currentState = 'computerTurn';
      }
      break;

    case 'computerTurn':
      // AI turn code here
      drawBoard();
      if (computerIsDone) {
        currentState = 'playerTurn';
      }
      break;

    case 'gameOver':
      // Game over code here
      break;

    default:
      // Default logic here
      break;
  }
}

