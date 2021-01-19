class Sling{
    constructor(bodyA, pointB){
        var OP = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 5
        }
        this.pointB = pointB
        this.sling = Constraint.create(OP);
        World.add(world, this.sling);
    }
    attach(body){
        this.sling.bodyA = body;
   }
    
    fly(){
        this.sling.bodyA = null;
    }

    display(){
        if(this.sling.bodyA){
            var pointA = this.sling.bodyA.position;
            var pointB = this.pointB;
            strokeWeight(4);
            stroke("lightgreen")
            line(pointA.x,pointA.y,pointB.x,pointB.y)
        }
    }
    
}