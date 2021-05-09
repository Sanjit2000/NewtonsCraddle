
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ball,rect,slingshot

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ball = new Ball(200,400,40)
	ball2 = new Ball(280,400,40)
	ball3 = new Ball(360,400,40)
	ball4 = new Ball(440,400,40)
	ball5 = new Ball(520,400,40)
    ground = new Ground(400,100,500,10)
	slingshot = new Rope(ball.body,ground.body,-200,0)
	slingshot1 = new Rope(ball2.body,ground.body,-100,0)
	slingshot2 = new Rope(ball3.body,ground.body,0,0)
	slingshot3 = new Rope(ball4.body,ground.body,100,0)
	slingshot4 = new Rope(ball5.body,ground.body,200,0)
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("white");
  
  ball.display()
  ball2.display()
  ball3.display()
  ball4.display()
  ball5.display()
  ground.display()
  slingshot.display()
  slingshot1.display()
  slingshot2.display()
  slingshot3.display()
  slingshot4.display()
  drawSprites();
 
}



