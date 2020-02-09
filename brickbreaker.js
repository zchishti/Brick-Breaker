let bg;

let playerScore = 0;
let paddle;
let ball;
let brick;
let bricks = [];

let gameWidth;
let gameHeight;

let gameState;

function setup(){
    gameWidth =  windowWidth - 30;
    gameHeight = windowHeight -50;
    gameState = 'playing';
    playerScore= 0;
    //bg = loadImage("img/bg.jpg");
    bg =  0;
    createCanvas(gameWidth,gameHeight);

    // Color generation for bricks 
    let colors = generateRandomColors(5);

    paddle = new Paddle();
    ball = new Ball(paddle);
    bricks = createBricks(colors);
    
}

function createBricks(colors){
  const bricks = [];
  const bricksPerRow = 10;
  const rows =  3;
  const brickWdth = gameWidth / bricksPerRow;
  for(let j =  0; j < rows; j++){
    for (let i = 0; i < bricksPerRow; i++){
      brick = new Brick(createVector(brickWdth * i, j * 25),brickWdth,25, colors[Math.floor(random(0,colors.length))]);
      bricks.push(brick);
    }
  }
  return bricks;
}

function generateRandomColors(noOfColors){
  const colors = [];
  for(let i = 0; i < noOfColors; i++){
    colors.push(color(random(0,255),random(0,255),random(0,255)));
  }
  return colors;
}

function draw(){
    if(gameState === 'playing'){
      background(bg);

      //paddle
      if (keyIsDown(LEFT_ARROW)) {
          paddle.move('left');
        }else if (keyIsDown(RIGHT_ARROW)) {
          paddle.move('right');
        }

      
      ball.bouncePaddle();
      ball.bounce();
      ball.update();

      //display function calls
      paddle.display();
      ball.display();
      brick.display();



      for(let i = bricks.length - 1; i >= 0; i--){
        const brick = bricks[i];
       // brick.display();
        if(brick.isColliding(ball)){
          ball.reverseY();
          bricks.splice(i,1);
          playerScore += brick.points;
        }else{
          brick.display();
        }
      }

      // Score Dispaly
      textSize(32);
      fill(255); //(0,102,153)
      text("Score:"+playerScore, width - 200, 50);

      if(ball.belowBottom()){
        gameState = 'Loose';
      }

      if(bricks.length === 0){
        gameState = 'Win';
      }

  }else{
      textSize(150);
      fill(255); //(0,102,153)
      text("You "+gameState+"!!", gameWidth/2 - 350, gameHeight/2); 

      if(keyIsDown(SHIFT)){
        setup();
      }
  }
}
