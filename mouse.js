
function mousePressed() {
    if (currentState === 'menu') {
        gameInit();
        currentState = 'playerTurn';
    }
}

function mouseClicked() {
    let selectedBlock = getHover(); 
    // Check if the player's direction is "row"
    if (player.direction === "rows") {
        // Check if the clicked block is in the same row as the player and within the fuel limit
        let distance = Math.abs(selectedBlock.row - player.currentRow);
        if (selectedBlock.row === player.currentRow && distance <= player.fuel && selectedBlock.column != player.currentColumn) {
            console.log("Legal move");
            playerAnim = true;
            startX = player.X;
            startY = player.Y;
            endX = board[selectedBlock.column][selectedBlock.row].X;
            endY = board[selectedBlock.column][selectedBlock.row].Y;
        // It's a legal move
        // Proceed with the next steps (animation, fuel removal, etc.)
        } else if (player.direction === "columns") {
            // Check if the clicked block is in the same row as the player and within the fuel limit
            let distance = Math.abs(selectedBlock.row - player.currentRow);
            if (selectedBlock.row === player.currentRow && distance <= player.fuel) {
            // It's a legal move
            // Proceed with the next steps (animation, fuel removal, etc.)
            }
        }
    }
}