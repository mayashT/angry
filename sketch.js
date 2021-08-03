const Engine = Matter.Engine;
const World  = Matter.World ;
const Bodies = Matter.Bodies;


var engine, world;
var box1, box2, box3, box4, box5;
var piso;
var pig1, pig2;
var log1, log2, log3, log4;
var bird1;

function setup(){
   
  createCanvas(1200,400);

  engine = Engine.create();
  world = engine.world;
  
  //numeros correctos
  piso = new ground(200,height,2200,20);
  
  
  box1 = new box(700,320,50,50);
  box2 = new box(920,320,50,50);
  pig1 = new pig(810,350);
  log1 = new log(810,260,300,PI/2);
  
  box3 = new box(700,240,50,50);
  box4 = new box(920,240,50,50);
  log2 = new log(810,180,300,PI/2);
  pig2 = new pig(810,220); 
  box5 = new box(805,160,50,50);
  log3 = new log(803,160,110,PI/8);
  log4 = new log(806,160,110,-PI/8);
  bird1 = new bird(100,100);
  
  
 
  
  
}

function draw(){
    
  background(0);
  
  Engine.update(engine);
  
  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  
  piso.display();
  
  pig1.display();
  pig2.display();
  
  log1.display();
  log2.display();
  log3.display();
  log4.display();
  
  bird1.display();

}