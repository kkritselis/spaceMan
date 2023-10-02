// Initialize the game board
function gameInit() {
    for (let i = 0; i < 10; i++) {
      board[i] = [];
      for (let j = 0; j < 10; j++) {
        let x = i * 10;
        let y = j * 10;
        let z = 0;
        let bonus = Math.floor(Math.random() * 21) - 8; // Random number between -8 and 12
        board[i][j] = { X: x, Y: y, Z: z, bonus: bonus };
      }
    }
    board[0][0].bonus = null;
    board[9][9].bonus = null;
  
    // Initialize the player object
    player = {
      X: 90,
      Y: 90,
      Z: 0,
      fuel: 10,
      state: 'idle',
      img: pIdle,
      direction: 'rows',
      currentRow: 9,
      currentColumn: 9
    };
  
    // Initialize the AI object
    computer = {
      X: 0,
      Y: 0,
      Z: 0,
      fuel: 10,
      state: 'idle',
      img: aIdle, 
      direction: 'rows',
      currentRow: 0,
      currentColumn: 0
    };
}
