var PLAY=1;
var END=0;
var gameState=1;

var sword,fruit1,fruit2,fruit3,fruit4,monster,monster2;
var swordImage,monsterImage,gameoverImage;
var fruitGroup,enemyGroup;
var gameover;
var score=0;


function preload() {
  
  //load images
  fruit1 = loadImage("fruit1.png");
  fruit2 = loadImage("fruit2.png");
  fruit3 = loadImage("fruit3.png");
  fruit4 = loadImage("fruit4.png");
  monsterImage1 = loadImage("alien1.png");
  monsterImage2 = loadImage("alien2.png");
  swordImage = loadImage("sword.png");
  gameoverImage = loadImage("gameover.png")
  
}


function setup() {
  
  createCanvas(500,500);
  
  sword = createSprite(250,250,20,20);  
  sword.scale=0.7;
  sword.addImage(swordImage);
  fruitGroup = new Group();
  enemyGroup = new Group();
  
 
  
}


function draw() {
  background("aqua");
  
  if(gameState === PLAY){
 
  Enemys();
  fruits();
     
  sword.y=World.mouseY;
  sword.x=World.mouseX;   
     
   if(fruitGroup.isTouching(sword)) {
    fruitGroup.destroyEach();
    score=score+2;
   }
     
     else if(enemyGroup.isTouching(sword)) {
      
      gameState = END;
    
      fruitGroup.destroyEach();
      enemyGroup.destroyEach();
      fruitGroup.velocityX=0;
      enemyGroup.velocityX=0;
      sword.addImage(gameoverImage);
      sword.scale=1.5;
      sword.x=250;
      sword.y=250;

    }
    
  }
  
  drawSprites();
  
  fill("blue");
  textSize(30);
  text("Score : " + score,350,50);
  
}


function fruits() {
  
  if(World.frameCount%80===0){ 
   fruit=createSprite(600,200,20,20);
   fruit.scale=0.2;
   
    rand=Math.round(random(1,4)); 

     if(rand == 1) {
      fruit.addImage(fruit1);
     } 
     else if (rand == 2){
      fruit.addImage(fruit2)
     } 
     else if (rand == 3){
      fruit.addImage(fruit3)
     } 
     else if (rand == 4){
      fruit.addImage(fruit4)
     }

     fruit.y=Math.round(random(50,400));
     fruit.velocityX=-9;
    

     fruitGroup.add(fruit);
  }
  
}
  
 function Enemys(){
   if(World.frameCount%200 === 0) {
     
     monster2=createSprite(800,200,20,20);
     monster2.addImage("moving2", monsterImage2);
     monster2.y=Math.round(random(325,575));
     monster2.velocityX=-10;
     monster2.setlifetime=50;

     enemyGroup.add(monster2);
     
   }
   
}

