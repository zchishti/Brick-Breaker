class Brick{
    constructor(position,width,height,color){
        this.position = position,
        this.width = width,
        this.height = height,
        this.color = color,
        this.points = 10;
    }

    isColliding(ball){
        //Checks collison with ths the brick (bounding box patterns)
        if(ball.position.y - ball.radius <= this.position.y + this.height && 
            ball.position.y + ball.radius >= this.position.y &&
            ball.position.x + ball.radius >= this.position.x &&
            ball.position.x - ball.radius <= this.position.x + this.width){
                
                return true;

            }
    }

    display(){
        fill(this.color);
        rect(this.position.x, this.position.y,this.width,this.height);        
    }
}