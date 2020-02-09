class Ball{
    constructor(paddle){
        this.radius = 10;
        this.size = this.radius * 2;
        this.position = createVector((paddle.position.x) + (paddle.width/2) , (paddle.position.y) - this.radius);
        this.color =  color(255);//color(147,128,211);
        this.velocity = createVector(10,-8);
        this.paddle = paddle;
    }

    bouncePaddle(){

        // Check if we are within the width of the paddle
        if(this.position.x + this.radius >= this.paddle.position.x && 
            this.position.x - this.radius <= this.paddle.position.x + this.paddle.width){
                //Check to see if we are hitting the y of the paddle
                if(this.position.y  + this.radius >  this.paddle.position.y){
                    
                    this.position.y = this.paddle.position.y - this.radius - 5;
                    this.velocity.y *= -1;
                }

            }
    }

    bounce(){
        if(this.position.x + this.radius >  gameWidth){ //  Check right edge
            this.velocity.x *=  -1;
        }else if(this.position.x - this.radius <= 0){ // Check left edge
            this.velocity.x *=  -1;
        }else if(this.position.y - this.radius <= 0){ // Check top edge
            this.velocity.y  *= -1;
        }
        /*else if(this.position.y + (2 *this.radius) >= gameHeight){ // Check bottom edge (dont need this)
            this.velocity.y  *= -1;
        } */
    }

    reverseY(){
        this.velocity.y *= -1;
    }

    belowBottom(){
        return this.position.y + this.radius > gameHeight;
    }

    display(){
        fill(this.color);
        ellipse(this.position.x, this.position.y, this.size, this.size);
    }

    update(){
        this.position.add(this.velocity);
    }

}