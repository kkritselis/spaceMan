// p5.js Starter Code with State Machine 

let currentState = 'menu'; 
let bkgd, player, ai, myFont, pIdle, aIdle;
let fuel = 15;
let board = [];
let rs = [];
let cs = [];
let playerAnim = false;
let animStartFrame, totalFrames = 300;
let startX, startY, endX, endY;

// Preload the image
function preload() {
  bkgd = loadImage('bkgd.png');
  pIdle = loadImage('idle1.png');
  aIdle = loadImage('alien_angry.png');
  for (let i = 0; i < 10; i++) {
    rs[i] = loadImage(`hover/r${i}.png`);  // Replace with the actual file extension of your images
  };
  for (let i = 0; i < 10; i++) {
    cs[i] = loadImage(`hover/c${i}.png`);  // Replace with the actual file extension of your images
  };

  myFont = loadFont('OUTER-FRONTIER.ttf');  // Replace 'Arial.ttf' with the path to your desired font file
}

function setup() { 
  createCanvas(1920, 1080, WEBGL); 
  textFont(myFont);
} 

function draw() {
  gameLoop();
  if (playerAnim) {
    let t = (frameCount - animStartFrame) / totalFrames;  // Normalize time to [0, 1]
    
    // Calculate next position based on parabolic equation
    let x = lerp(startX, endX, t);  // Linear interpolation for x
    let y = startY + (endY - startY) * (4 * t * (1 - t));  // Parabolic interpolation for y

    // Update player's coordinates
    player.x = x;
    player.y = y;

    // Check if animation is complete
    if (frameCount >= animStartFrame + totalFrames) {
      playerAnim = false;
      // Add 'bonus' to 'fuel', and other end-of-animation tasks
    }
  }
}