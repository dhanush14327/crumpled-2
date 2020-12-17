class Dustbin{
    constructor(x,y){
        this.x = x;
        this.y = y;
        this.dustbinWidth=200;
        this.dustbinHeight = 213;
        this.wallTickness=20;
        this.image=loadImage("sprites/dustbingreen.png")
        this.bottomBody=Bodies.rectangle(this.x,this.y,this.dustbinWidth,this.wallTickness,{isStatic:true})
        this.leftWallBody=Bodies.rectangle(this.x-this.dustbinWidth/2,this.y-this.dustbinHeight/2,this.wallTickness,this.dustbinHeight,{isStatic:true})
        this.rightWallBody=Bodies.rectangle(this.x+this.dustbinWidth/2,this.y-this.dustbinHeight/2,this.wallTickness,this.dustbinHeight,{isStatic:true})

        World.add(world,this.bottomBody);
        World.add(world,this.leftWallBody);
        World.add(world,this.rightWallBody);
    }
    display(){
        var dhanush =this.bottomBody.position;
        var posLeft =this.leftWallBody.position;
        var posRight =this.rightWallBody.position;
        push();
        translate(posLeft.x,posLeft.y);
        rectMode(CENTER);
        //strokeWeight(4);
        angleMode(RADIANS);
        fill(255);
        rotate(this.angle)
     //rect(0,0,this.wallThickness,this.dustbinHeight);
     pop();

     push();
     translate(posRight.x,posRight.y);
     rectMode(CENTER);
     //strokeWeight(4);
     angleMode(RADIANS);
     fill(255);
     rotate(-1*this.angle)
     //rect(0,0,this.wallTickness,this.dustbinHeight);
     pop();

     push();
     translate(this.dhanush.x,this.dhanush.y+10);
     rectMode(CENTER)
     //strokeWeight(4);
     angleMode(RADIANS)
     fill(255)
     imageMode(CENTER);
     this.image(this.image,0,this.dustbinHeight/2,this.dustbinWidth,this.dustbinHeight)
     rect(0,0,this.dustbinWidth,this.wallTickness);
     pop();

    }
};