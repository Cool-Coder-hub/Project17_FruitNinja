//Game States
var PLAY=1;
var END=0;
var gameState=1;

var knife;
var knifeImage ;


function preload(){
  
  
  swordImage = loadImage("knife.png");
  
  monsterImage =loadAnimation  
    ("alien1.png","alien2.png");
  
  fruit1 = loadImage("fruit1.png");
  
  fruit2 = loadImage("fruit2.png");
  
  fruit3 = loadImage("fruit3.png");
  
  fruit4 = loadImage("fruit4.png");
  
  gameOverImage = loadImage("gameover.png");
  
  
}



function setup() {
  createCanvas(600, 600);
  
  
  sword=createSprite(40,200,20,20);
  sword.addImage(swordImage);
  sword.scale=0.7
  sword.setCollider("rectangle",0,0,40,40);

  score=0;
  
  fruitGroup=createGroup();
  enemyGroup=createGroup();
}

function draw() {
  background("lightblue");
  
    
    if(gameState===PLAY){
    
    fruits();
    fruits1();
    Enemy();
    
    sword.y=World.mouseY;
    sword.x=World.mouseX;
    
  
    if(fruitGroup.isTouching(sword)){
      fruitGroup.destroyEach();
      cutSound.play();
      score=score+2;
    }
    
    
    else
      
    {
      if(enemyGroup.isTouching(sword)){
        gameState=END;
        
        fruitGroup.destroyEach();
        
        enemyGroup.destroyEach();
        
        gameOverSound.play();
        
        fruitGroup.setVelocityXEach(0);
        
        enemyGroup.setVelocityXEach(0);
        
        
        
        sword.addImage(gameOverImage);
        sword.x=300;
        sword.y=300;
        sword.scale = 2.5;
        
      }
    }
  }
  
  drawSprites();
  
  //Display score
  textSize(25);
  text("Score : "+ score,250,50);

}

