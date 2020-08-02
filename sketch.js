
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var papper;
var ground;
var box1,box2,box3;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;


	
	//Create the Bodies Here.
  papper=new Papper(50,600);
  box1=new Box(600,600,20,100);
  box2=new Box(750,600,20,100);
  box3=new  Box(670,630,200,20);
	ground=new Ground(400,650,800,20);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  box1. display();
  box2.display();
  box3.display();
  ground.display();
  
 papper.display();

 
  
 
}

function keyPressed() {
	if (keyCode === UP_ARROW) {
	Matter.Body.applyForce(papper.body,papper.body.position,{x:50,y:-85})

}
}



