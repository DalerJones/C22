const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine, world;

var ground

var ball

function setup() {
  createCanvas(400,400);
  engine = Engine.create();
  world = engine.world;
  var options = {
    isStatic:true
  }
  ground = Bodies.rectangle(200,390,200,50,options);
  World.add(world,ground);
 console.log(ground)
 
 var options2 = {
   restitution:1
 }
 ball = Bodies.circle(200,100,30,options2);
 World.add(world,ball);
 

}

function draw() {
  background("black");  
  Engine.update(engine);
  rectMode(CENTER);
  rect(ground.position.x,ground.position.y,400,50);
  ellipseMode(RADIUS);
  ellipse(ball.position.x,ball.position.y,30);
  

}