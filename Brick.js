class Brick{
    constructor(position,width,height,color){
        this.position = position,
        this.width = width,
        this.height = height,
        this.color = color,
        this.point = 1;
    }

    display(){
        fill(this.color);
        rect(this.position.x, this.position.y,this.width,this.height);        
    }

}