var monkey , monkey_running
var ground, groundImage
var banana ,bananaImage, obstacle, obstacleImage
var bananaGroup, obstacleGroup
var survivalTime

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png");
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
  createCanvas(400, 400);
  
  monkey = createSprite(50, 250, 20, 20);
  monkey.addAnimation("running", monkey_running);
  monkey.scale=0.08;
  monkey.debug=true;
  
  ground = createSprite(200, 280, 400, 20);
  ground.velocityX=-4;
  ground.debug=true;
  
  bananaGroup=createGroup();
  
  obstacleGroup=createGroup();
  
  //banana
  
  survivalTime=0;
}


function draw() {
  background("white");
  
  if (keyDown("space") && monkey.y>=235) {
    monkey.velocityY=-20;
  }
  
  console.log(monkey.y);
  
  if (ground.x<=0) {
    ground.x=200
  }
  
  if (frameCount%80===0) {
    spawnBanana();
  }
  
  if (frameCount%300===0) {
    spawnObstacle();
  }
  
  stroke("black");
  textSize(20);
  fill("black");
  survivalTime = Math.round(frameCount/getFrameRate());
  text("Survival Time: " + survivalTime, 130, 50)
  
  monkey.velocityY=monkey.velocityY+1.5;
  
  monkey.collide(ground);
  
  drawSprites();
}

function spawnBanana () {
  var rand = Math.round(random(120,200));
  banana = createSprite(400, 200, 20,20);
  banana.addImage(bananaImage);
  banana.scale=0.08
  banana.velocityX=-4;
  banana.y=rand;
  banana.lifetime=100;
  bananaGroup.add(banana);
}

function spawnObstacle () {
  obstacle=createSprite(400, 255, 20, 20);
  obstacle.addImage(obstacleImage);
  obstacle.velocityX=-4
  obstacle.scale=0.08
  obstacle.lifetime=100
}