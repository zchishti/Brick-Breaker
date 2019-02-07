let bg;

let playerScore = 0;
let paddle;
let ball;
let brick;
let bricks = [];

let gameWidth;
let gameHeight;

function setup(){
    gameWidth =  windowWidth - 30;
    gameHeight = windowHeight -50;
    //bg = loadImage("img/bg.jpg");
    bg =  0;
    createCanvas(gameWidth,gameHeight);

    // Color generation for bricks 
    let colors = [];
    colors.push(color(26,188,156));
    colors.push(color(52,152,219));
    colors.push(color(155,89,182));
    colors.push(color(231,76,60));
    colors.push(color(243,156,18));
    colors.push(color(56,142,60));
    colors.push(color(0,191,165));
    colors.push(color(173,20,87));
    colors.push(color(62,39,35));
    colors.push(color(255,87,34));
    colors.push(color(156,39,176));
    colors.push(color(118,255,3));

    paddle = new Paddle();
    ball = new Ball(paddle);
    const bricksPerRow = 10;
    const rows =  3;
    const brickWdth = gameWidth / bricksPerRow;
    for(let j =  0; j < rows; j++){
      for (let i = 0; i < bricksPerRow; i++){
        brick = new Brick(createVector(brickWdth * i, j * 25),brickWdth,25, colors[Math.floor(random(0,colors.length))]);
        bricks.push(brick);
      }
    }
    
}

function draw(){
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


    //display f)unction calls
    paddle.display();
    ball.display();
    brick.display();
    bricks.forEach(brick =>{
       
      brick.display();
   //   brick.collide(ball);
      
    });

    // Score Dispaly
    textSize(32);
    fill(255); //(0,102,153)
    text("Score:"+playerScore, width - 200, 50);
    
}
