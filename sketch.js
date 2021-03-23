var PLAY = 1;
var END =1;
var gameState = PLAY;
var monkey , monkey_running;
var banana ,bananaImage, obstacle, obstacleImage;
var bananaGroup, obstacleGroup;
var score, survivalTime;

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
  createCanvas(600,350);

  monkey = createSprite(80,315,20,20);
  monkey.addAnimation("moving", monkey_running);
  monkey.scale = 0.1;
  
  
  ground = createSprite(400,350,900,10);
  ground.velocityX=-4;
  ground.x=ground.width/2;
  console.log(ground.x);
  
  bananaGroup = createGroup();
  obstacleGroup=createGroup();
  
  survivalTime=0;
 
}


function draw() {
background("white");
  
  
  //if (gameState === PLAY){
     if (ground.x>0){
   ground.x = ground.width /2;
 }
     if(keyDown("space") && monkey.y >= 100 ){
      monkey.velocityY = -12;
    }
    
     monkey.velocityY = monkey.velocityY + 0.8;
     monkey.collide(ground);
    
    stroke("blue");
  textSize(20);
  fill("black");
  survivalTime = Math.ceil(frameCount / frameRate());
    text("Survival Time : " + survivalTime , 100 , 50);
    
    Obstacles();
    Food();
   // if(obstacleGroup.isTouching(monkey)){
     //   gameState = END;
      //ground.velocityX = 0;
   // monkey.velocityY = 0;
   // obstacleGroup.setVelocityXEach(0);
   // bananaGroup.setVelocityXEach(0);
  
  drawSprites();

}
function Obstacles(){
 if (frameCount % 300 === 0){
   var obstacle = createSprite(400,310,20,20);
   
   obstacle.addImage( obstacleImage);
   obstacle.velocityX = -6 ;
   obstacle.scale = 0.2;
   obstacle.velocityX = -4;
   obstacle.lifetime = 250;
   obstacleGroup.add(obstacle);     
    }
 }
 
function Food(){
if (frameCount % 80 === 0){
  var bana = createSprite(600,150,20,20);
  
  bana.addImage(bananaImage);
  bana.scale = 0.1;
  bana.velocityX = -5;
  bana.lifetime = 250;
  bananaGroup.add(bana);
}

}
