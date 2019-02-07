class Paddle{
    constructor(){
        this.width = 150;
        this.height = 20;
        this.color = color(0,102,153);
        this.position = createVector(((windowWidth-30) /2) - (this.width / 2), windowHeight - 80); 
        const speed = 10;
        this.speed = {
            right: createVector(speed,0),
            left : createVector(speed * -1,0)
        }
    }

    display(){
        fill(this.color);
        rect(this.position.x,  this.position.y, this.width, this.height);
    }

    move(direction){
        this.position.add(this.speed[direction]);

        if(this.position.x < 0 ){
            this.position.x = 0;
        }else if(this.position.x + this.width > gameWidth){
            this.position.x  = gameWidth - this.width;
        }

    }
}