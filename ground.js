class Ground {
    constructor(x,y,width,height) {
      var OP = {
          isStatic: true
      }
      this.body = Bodies.rectangle(x,y,width,height,OP);
      this.x=x;
      this.y=y;
      this.width = width;
      this.height = height;
      World.add(world, this.body);
    }
    display(){
      push()
      translate(this.body.position.x,this.body.position.y);
      rotate(this.body.angle)
      rectMode(CENTER)
      fill("red")
      rect(0,0,this.width,this.height)
      pop();
    }
  };