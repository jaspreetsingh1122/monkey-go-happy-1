
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score
var ground, groundImage

var bananaGroup, bananaImage,obstaclesGroup
function preload(){
  
  
  monkey_running =            loadAnimation("monkey_0.png","monkey_1.png","monkey_2.png","monkey_3.png","monkey_4.png","monkey_5.png","monkey_6.png","monkey_7.png","monkey_8.png")
  

  obstacleImage = loadImage("obstacle.png");
  bananaImage = loadImage("banana.png");
}



function setup() {
  createCanvas(500,350)
  monkey=createSprite(50,300,50,50)
  monkey.addAnimation("running",monkey_running)
  monkey.scale=0.15

  bananaGroup = createGroup();
 obstaclesGroup = createGroup();
   ground = createSprite(250,300,500,15)
  //ground.velocityY=-3
 // ground.x = ground.width /2;
  //console.log(ground.x)
 // ground.scale=
}


function draw() {
background("lightblue")
  
  if(keyWentDown("space")&& monkey.y >= 100) {
        monkey.velocityY = -12;
       // jumpSound.play();
    } 
      monkey.velocityY = monkey.velocityY +0.5
  
  // monkey.velocityY = 0

      spawnbanana()
  spawnObstacles()
  monkey.collide(ground)
    
  drawSprites()
}


function spawnbanana() {
  //write code here to spawn the banana
  if (frameCount % 60 === 0) {
    var banana = createSprite(600,120,40,10);
   banana.y = Math.round(random(150,200));
    banana.addImage(bananaImage);
    banana.scale = 0.5;
    banana.velocityX = -3;
    
     //assign lifetime to the variable
    banana.lifetime = 200;
    banana.scale=0.1
    //adjust the depth
   
    
    //add each banana to the group
    bananaGroup.add(banana);
  }
}

function spawnObstacles(){
 if (frameCount % 300 === 0){
   var obstacle = createSprite(600,255,10,40);
   obstacle.velocityX = -3
   
     obstacle.addImage(obstacleImage);
            
    

   
    //assign scale and lifetime to the obstacle           
    obstacle.scale = 0.2;
    obstacle.lifetime = 300;
   
   //add each obstacle to the group
    obstaclesGroup.add(obstacle);
 }
}





