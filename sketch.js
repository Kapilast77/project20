var astronaut,astronautbathing,astronautbrushing,astronautdrinking,astronauteating,astronautexercising,sleep;
var bgimg,bg;
function preload(){
 astronautbathing=loadAnimation("bath1.png","bath2.png");
 astronautbrushing=loadAnimation("brush.png");
 astronautdrinking=loadAnimation("drink1.png","drink2.png");
 astronauteating=loadAnimation("eat1.png","eat2.png");
 astronautexercising=loadAnimation("gym1.png","gym2.png","gym11.png","gym12.png");
 bgimg=loadImage("iss.png");
 sleep=loadAnimation("sleep.png");
}

function setup() {
  createCanvas(800,400);
  bg=createSprite(400,200);
  bg.addImage(bgimg);



  astronaut=createSprite(300,230);
  astronaut.addAnimation("sleeping",sleep);
  astronaut.scale=0.1
}

function draw() {
  background(255,255,255);  
  text("Instructions:",50,50);
  text("Up arrow=Brushing",50,60);
  text("Down arrow=Gymming",50,70);
  text("Left arrow=Eating",50,80);
  text("Right arrow=Bathing",50,90);
  text("mkey=moving",50,100)
  astronaut.bounceOff(edges);
  createEdgeSprites();
  drawSprites();
}
if(keyDown("UP_ARROW")){
  astronaut.addAnimation("brushing",astronautbrushing);
  astronaut.changeAnimation("brushing");
  astronaut.y=350;
  astronaut,velocictyX=0;
  stronaut.velocityY=0;
}
if(keyDown("DOWN_ARROW")){
  astronaut.addAnimation("gymming0",astronautexercising);
  astronaut.changeAnimation("gymming");
  astronaut.y=350;
  astronaut,velocictyX=0;
  astronaut.velocityY=0;
}
if(keyDown("LEFT_ARROW")){
  astronaut.addAnimation("bathing",astronautbathing);
  astronaut.changeAnimation("bathing");
  astronaut.y=350;
  astronaut,velocictyX=0;
  stronaut.velocityY=0;
}
if(keyDown("RIGHT_ARROW")){
  astronaut.addAnimation("eating",astronauteating);
  astronaut.changeAnimation("eating");
  astronaut.y=350;
  astronaut,velocictyX=0;
  stronaut.velocityY=0;
}