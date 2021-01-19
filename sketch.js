const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var B1,B2,B3,B4,B5,B6,B7,B8,B9;
var B10,B11,B12,B13,B14;
var B15,B16,B17;
var B18;
var b1,b2,b3,b4,b5;
var b6,b7,b8;
var b9;
var G1,G2,G3;
var P1;
var S;


function preload() {
p1=loadImage("polygon.png");
}

function setup(){
    var canvas = createCanvas(1600,700);
    engine = Engine.create();
    world = engine.world;
    Engine.run(engine);
//var OP={isStatic:false}

G1=new Ground(700,600,450,20);
G2=new Ground(1300,350,300,20);
G3=new Ground(width/2,height-5,width,20);

 B1 = new Box(550,550,50,50);
 B2 = new Box(600,550,50,50);
 B3 = new Box(650,550,50,50);
 B4 = new Box(700,550,50,50);
 B5 = new Box(750,550,50,50);
 B6 = new Box(800,550,50,50);
 B7 = new Box(850,550,50,50);


 B10 = new Box(600,500,50,50);
 B11 = new Box(650,500,50,50);
 B12 = new Box(700,500,50,50);
 B13 = new Box(750,500,50,50);
 B14 = new Box(800,500,50,50);

 B15 = new Box(650,450,50,50);
 B16 = new Box(700,450,50,50);
 B17 = new Box(750,450,50,50);

 B18 = new Box(700,430,50,50);

 b1 = new Box(1200,300,50,50);
 b2 = new Box(1250,300,50,50);
 b3 = new Box(1300,300,50,50);
 b4 = new Box(1350,300,50,50);
 b5 = new Box(1400,300,50,50);

 b6 = new Box(1250,250,50,50);
 b7 = new Box(1300,250,50,50);
 b8 = new Box(1350,250,50,50);

 b9 = new Box(1300,200,50,50);

 P1=Bodies.circle(150,450,20);
 World.add(world,P1);

 S=new Sling(this.P1,{x:150,y:400})
}

function draw(){
    background("black");
   // Engine.update(engine);
    G1.display();
    G2.display();
fill(rgb(134, 205, 234))
    B1.display();
    B2.display();
    B3.display();
    B4.display();
    B5.display();
    B6.display();
    B7.display();

fill("pink");
    B10.display();
    B11.display();
    B12.display();
    B13.display();
    B14.display();
fill("lightgreen")
    B15.display();
    B16.display();
    B17.display();
fill(rgb(134, 205, 234))
    B18.display();
fill(rgb(134, 205, 234))
    b1.display();
    b2.display();
    b3.display();
    b4.display();
    b5.display();
fill("pink")
    b6.display();
    b7.display();
    b8.display();
fill("lightgreen")
    b9.display();

    imageMode(CENTER)
    image(p1,P1.position.x,P1.position.y,70,70)

    S.display();
    textSize(30);
    fill("blue");
    stroke("red")
    strokeWeight(3)
    text("Press Space key for second chance !!",30,50)
}

function keyPressed(){
    if (keyCode === 32){
        S.attach(this.P1);
    }

}

function mouseDragged(){
    Matter.Body.setPosition(this.P1, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    S.fly();
}