
var engine,world1,ground, groundOptions,ball,ballOptions,box1,box2,box3,box4,box5,ball2,ball2Options

function setup() {
  createCanvas(1000,600);
  engine = Matter.Engine.create()
  world1 = engine.world

 groundOptions = {
   isStatic:true
 }

  ground = Matter.Bodies.rectangle(500,580,1000,40,groundOptions)
  Matter.World.add(world1,ground)


  ballOptions = {
    restitution:0.8
  }
  ball = Matter.Bodies.circle(200,100,50,ballOptions)
  Matter.World.add(world1,ball)
  var options = {
    'restitution':0.8,
    'friction':1.0,
    'density':1.0
}

ball2Options = {
  restitution:0.8
}
ball2 = Matter.Bodies.circle(590,100,50,ball2Options)
Matter.World.add(world1,ball2)
var options = {
  'restitution':0.8,
  'friction':1.0,
  'density':1.0
}















  box1 = Matter.Bodies.rectangle(580,0,100,100,options)
  Matter.World.add(world1,box1)

  box2 = Matter.Bodies.rectangle(500,200,100,100,options)
  Matter.World.add(world1,box2)


  box3 = Matter.Bodies.rectangle(500,300,100,100,options)
  Matter.World.add(world1,box3)
 
  box4 = Matter.Bodies.rectangle(100,200,100,100,options)
  Matter.World.add(world1,box4)


  box5= Matter.Bodies.rectangle(580,400,100,100,options)
  Matter.World.add(world1,box5)





}

function draw() {
  background("black");  
  Matter.Engine.update(engine)

  rectMode(CENTER)
  rect(ground.position.x,ground.position.y,1000,40)


  ellipseMode(RADIUS)
  ellipse(ball.position.x,ball.position.y,50,50)


  ellipseMode(RADIUS)
  ellipse(ball2.position.x,ball2.position.y,50,50)

  push()
  translate(box1.position.x,box1.position.y)
  rotate(box1.angle)
  rect(0,0,100,100)
  pop()

  push()
  translate(box2.position.x,box2.position.y)
  rotate(box2.angle)
  rect(0,0,100,100)   
  pop()


  push()
  translate(box3.position.x,box3.position.y)
  rotate(box3.angle)
  rect(0,0,100,100)   
  pop()


 
  push()
  translate(box4.position.x,box4.position.y)
  rotate(box4.angle)
  rect(0,0,100,100)   
  pop()


  push()
  translate(box5.position.x,box5.position.y)
  rotate(box5.angle)
  rect(0,0,100,100)   
  pop()


  















}