const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1,box2,ground;

function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;

    box1 =new Box(250,160,50,50)
    box2 =new Box(240,100,40,60)
    ground = new Ground(200,380,400,40);
}

function draw(){
    background("grey");
    Engine.update(engine);
    box1.display();
    box2.display();
    fill("black");
    ground.Display();
}