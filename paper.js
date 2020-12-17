class Paper {
    constructor (x,y,width,height){
        var options={
            isStatic:false,
            restitution:0.3,
            friction:0.5,
            density:1.2
        }
        this.body = Bodies.circle(100,200,20, options);
        this.width = width;
        this.height = height;
        World.add(world,this.body)
        this.image=loadImage("sprites/paper.png")
    }
    display(){
        var pos=this.body.position
        fill("yellow");
        strokeWeight(4);
        stroke("green")
        ellipseMode(RADIUS);
        ellipse(pos.x,pos.y,20,20);
    }
}