class Box{
    constructor(x,y,width,height){
    var OP={
       restitution:0.4,
       friction:0.0
    }
    this.visibility=255;
    this.body=Bodies.rectangle(x,y,width,height,OP);
    this.x=x;
    this.y=y;
    this.width=width;
    this.height=height;
    World.add(world,this.body)
    }
    display(){
      if (this.body.speed<3){
        var angle=this.body.angle;
        var p=this.body.position;
    push()
    translate(p.x,p.y);
    rotate(angle)
    rectMode(CENTER)
    rect(0,0,this.width,this.height)
    pop();
      }
      else{
        World.remove(world,this.body);
        push();
        this.visibility=this.visibility -5;
        pop();
      }
  }
}