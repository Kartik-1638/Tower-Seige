const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var ball,ground;
var stand1,stand2;
var slingShot;
var rock_img;
var hexagon;
var bg
function preload(){
  rock_img=loadImage("rock.png");
descidbackgroundImage()
}
function setup() {

  createCanvas(900,400);
  engine = Engine.create();
  world = engine.world;
  Engine.run(engine);
  
  ground = new Ground();
  stand1 = new Stand(390,300,250,10);
  stand2 = new Stand(700,200,200,10);
 block1=new Block(330,275,30,40)
 block2=new Block(360,275,30,40)
 block3=new Block(390,275,30,40)
 block4=new Block(420,275,30,40)
 block5=new Block(450,275,30,40)
 block6=new Block(350,235,30,40)
 block7=new Block(380,235,30,40)
 block8=new Block(410,235,30,40)
 block9=new Block(380,190,30,40)
  //level one
  
  //level two
  
  //top
  

hexagon=new Hexagon(100,300,50,50)

  slingShot = new Slingshot(hexagon.body,{x:100,y:300});

}

function draw() {
  if(bg)
  background(bg); 
 
  
  // write image() to display the polygon image 
  //use the same x and y position as ball
  


  stroke(0,0,0);
  fill("white");
  textSize(20);
  fill("lightyellow");
  text("Drag the Hexagonal Stone and Release it, to launch it towards the blocks",100,30);

  ground.display();
  stand1.display();
  stand2.display();

  strokeWeight(2);
  stroke(0,0,0);
  
  fill("skyblue");
  block1.display()
  block2.display()
  block3.display()
  block4.display()
  block5.display()
  fill("pink");
  block6.display()
  block7.display()
  block8.display()
  fill("turquoise");
  block9.display()
  fill("grey");
  
  fill("skyblue");
  
  fill("turquoise");
  
  fill("pink")
  
  fill("gold");
  hexagon.display();


  
  slingShot.display();
}
function mouseDragged(){
  Matter.Body.setPosition(hexagon.body,{x:mouseX,y:mouseY});
}
function mouseReleased(){
  slingShot.fly();
}
async function descidbackgroundImage(){
var responce=await fetch('http://worldclockapi.com/api/json/est/now')
var json=await responce.json()
var datetime=json.currentDateTime
var hour=datetime.slice(11,13)
console.log(hour)
if(hour>=6&&hour<=17){
  bg=loadImage('morning.jpeg')
}
else{
  bg=loadImage('sunset.jpg')
}
}

