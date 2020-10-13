const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var platform;
var block1, block2, block3;
var block4, block5, block6;
var block7, block8, block9;
var block10, block11, block12;
var block13, block14, block15;
var block16, block17, block18;
var block19, block20;
var hexagon;
var rope;
var hexagon_img;
var ground;
var score = 0;

function preload() {
  hexagon_img = loadImage("hexagon.png");
  //getBackgroundImg();
}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    platform = new Ground(600,300,400,20);

    ground = new Ground(600,390,1200,20);

    block1 = new Box(425,270,50,50);
    block2 = new Box(475,270,50,50);
    block3 = new Box(525,270,50,50);
    block4 = new Box(575,270,50,50);
    block5 = new Box(625,270,50,50);
    block6 = new Box(675,270,50,50);
    block7 = new Box(725,270,50,50);
    block8 = new Box(775,270,50,50);
    block9 = new Box(475,220,50,50);
    block10 = new Box(525,220,50,50);
    block11 = new Box(575,220,50,50);
    block12 = new Box(625,220,50,50);
    block13 = new Box(675,220,50,50);
    block14 = new Box(725,220,50,50);
    block15 = new Box(525,170,50,50);
    block16 = new Box(575,170,50,50);
    block17 = new Box(625,170,50,50);
    block18 = new Box(675,170,50,50);
    block19 = new Box(575,120,50,50);
    block20 = new Box(625,120,50,50);

    hexagon = Bodies.circle(50,200,20);
    World.add(world,hexagon);
    
    rope = new SlingShot(this.hexagon,{x:120,y:200});

}

function draw(){
    //getBackgroundImg();
    background(grey);
    Engine.update(engine);

    push();
    stroke("black");
    textSize(20);
    text("score : "+score,750,40);
    pop();

    platform.display();
    block1.display();
    block2.display();
    block3.display();
    block4.display();
    block5.display();
    block6.display();
    block7.display();
    block8.display();
    block9.display();
    block10.display();
    block11.display();
    block12.display();
    block13.display();
    block14.display();
    block15.display();
    block16.display();
    block17.display();
    block18.display();
    block19.display();
    block20.display();
    block1.score();
    block2.score();
    block3.score();
    block4.score();
    block5.score();
    block6.score();
    block7.score();
    block8.score();
    block9.score();
    block10.score();
    block11.score();
    block12.score();
    block13.score();
    block14.score();
    block15.score();
    block16.score();
    block17.score();
    block18.score();
    block19.score();
    block20.score();

    rope.display();
    ground.display();

    imageMode(CENTER);
    image(hexagon_img,hexagon.position.x,hexagon.position.y,70,70);

    drawSprites();
}


function mouseDragged(){
      Matter.Body.setPosition(this.hexagon, {x: mouseX , y: mouseY});
}


function mouseReleased(){
  rope.fly();
}

function keyPressed(){
  if(keyCode === 32){
    rope.attach(this.hexagon);
  }
}

//async function getBackgroundImg(){
  //var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
  //var responseJSON = await response.json();

  //var datetime = responseJSON.datetime;
  //var hour = datetime.slice(11,13);
  
  //if(hour>=06 && hour<=18){
      //background("yellow")
  //}
  //else{
      //background("grey");
  //}
//}