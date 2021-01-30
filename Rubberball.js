class Rubberball{
    constructor(x,y){
        var prop={
            restitution: 0.8,
            friction:0.3,
            density:1.0
        

          } 
        
          this.body=Bodies.circle(x,y,20,prop); // determining the shape of the body
          this.diameter=40;
          World.add(world,this.body); // adding the body to the world
    }
    display(){
        var pose= this.body.position
        var angle= this.body.angle
        push();
        translate(pose.x,pose.y)
        rotate(angle)
        fill("blue");
        ellipseMode(CENTER);
        ellipse(0,0,this.diameter,this.diameter);
        pop()


    }
}
