const Engine = Matter.Engine;
const Render = Matter.Render;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;
const Composites = Matter.Composites;
const Composite = Matter.Composite;
 
var base;
var base_2;
var bridge;
var jointPoint;
var link;
var stones=[];


function setup() {
  createCanvas(1200,800);
  engine = Engine.create();
  world = engine.world;
  frameRate(80);

  base =new Base(150,500,400,50); 
  base_2 =new Base(1050,500,400,50); 
  //Its Bridge blue print, not Rope blueprint 
  bridge = new Bridge(15,{x:290,y:480}); 
  jointPoint = new Base(850, 480, 40, 20, "#8d6e63", true); 
  Matter.Composite.add(bridge.body,jointPoint); 
  link = new Link(bridge,jointPoint);

for(var i =0;i<=8;i++){
var x = random(width/2-200,width/2+300);
var y = random(-10,140);
var stone = new Stone(x,y,80,80);
stones.push(stone);
}
}

function showBalls(index,stone) {
  stone[index].show();
 
}


function draw() {
  background(51);
  Engine.update(engine);
  rectMode(CENTER);
  base.show();
  base_2.show();
  bridge.show();
  
}
