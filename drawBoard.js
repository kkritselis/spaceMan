// Function to draw the game board
function drawBoard() {
  // Set the camera for isometric perspective
  let camX = cos(PI / 3) * (50 + 25);
  let camY = sin(PI / 3) * (95 + 35);
  camera(0, camY, 80, 0, 0, 0, 0, 1, 0);

  // Set text properties
  textSize(6);
  textAlign(CENTER, CENTER);

  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[i].length; j++) {
      let cube = board[i][j];
      push();
      translate(cube.X - 45, cube.Y - 45, cube.Z);
      
      if (player.direction == "rows" && i == Math.ceil(player.X/10)) {
        fill('#00ff5D');
      };

      // Store the result of getHover() in a variable for reuse
      let hoverCoords = getHover();
      let hoverX = hoverCoords.row;
      let hoverY = hoverCoords.column;

      // Check for mouse hover when player's state is 'idle'
      if (currentState === 'playerTurn' && player.state === 'idle') {
        if (hoverX && board[hoverY][hoverX].bonus != null && hoverX === j && hoverY === i && j === Math.ceil(player.X / 10)) {
          fill('#ffff5D');
        } else {
          if (player.direction === "rows" && j === Math.ceil(player.X / 10)) {
            fill('#00ff5D');
          } else {
            fill(255);
          }
        }
      }
      box(10);

      // Add bonus value as texture
      let bonus = str(cube.bonus);
      for (let z = -5.01; z <= 5.03; z += 10.03) {
        translate(0, 0, z);
        fill('#ED225D');
        if (bonus != "null") {text(bonus, 0, 0)};
        translate(0, 0, -z);
      }

      pop();

      //
    }

      // Draw the player's image on top of the block at board[9,9]
      let pBlock = board[9][9];
      push();
      translate(pBlock.X - 46, pBlock.Y - 46, pBlock.Z + 10);  // Z-offset to place it on top
      rotateX(-70);
      rotateY(-70);
      texture(player.img);  // Assuming player.img holds the image
      noStroke();
      plane(5, 10);  // Draw a plane with the same dimensions as the block
      pop();

      // Draw the alien's image on top of the block at board[9,9]
      let aBlock = board[0][0];
      push();
      translate(aBlock.X - 46, aBlock.Y - 46, aBlock.Z + 10);  // Z-offset to place it on top
      rotateX(-70);
      rotateY(50);
      texture(computer.img);  // Assuming player.img holds the image
      noStroke();
      plane(5, 10);  // Draw a plane with the same dimensions as the block
      pop();
    }
  }