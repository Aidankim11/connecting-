//Renaming
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint
let engine;
let world;


function setup() {
  createCanvas(400,400);
  engine = Engine.create();
  
  world = engine.world;

var options = {
  restitution: 0.8
}

ball = Bodies.circle(200,50,10,options)
World.add(world,ball)
ball2 = Bodies.circle(200,100,10,options)
World.add(world,ball2)
connect = Constraint.create({
  pointA: {x:200,y:20},
  bodyB: ball,
  length: 100,
  stiffness: 0.01
})

World.add(world,connect)

connect2 = Constraint.create({
  bodyA: ball,
  bodyB: ball2,
  length: 100,
  stiffness: 0.01
})

World.add(world,connect2)
  rectMode(CENTER);
  ellipseMode(RADIUS);
  
}

function draw() 
{
  background(51);
  Engine.update(engine);

  ellipse(ball.position.x,ball.position.y,10)
  ellipse(ball2.position.x,ball2.position.y,10)
  //line(x1,y1,x2,y2)
  line(connect.pointA.x,connect.pointA.y,ball.position.x,ball.position.y)
  line(ball.position.x,ball.position.y,ball2.position.x,ball2.position.y)
}

function keyPressed(){
  if(keyCode===RIGHT_ARROW){
    Matter.Body.applyForce(ball,ball.position,{x:0.05,y:0})
  }
}

