var shooter;
var ground, groundImg, invGround;
var backgroundImg, bg2Img;
var shooterAnim,shooterJump;
var zombieAnimRun;
var zombie,zombieGroup;
var bullet,bulletImage,bulletGroup;
var temp_bullet;
var gameState="play";
//var zombieX=zombie.x;
//var bulletX=bullet.x;
var aim,aimImg;

var lifeTime=5;

function preload(){
 backgroundImg=loadImage("background.JPG") 
 //bg2Img=loadImage("bg2.png")
 //groundImg=loadImage("ground.png")
 shooterAnim=loadAnimation("Sr1.png","Sr2.png","Sr3.png","Sr4.png","Sr5.png","Sr6.png")
 shooterJump=loadAnimation("Sj.png","Sj2.png")

 zombieAnimRun=loadAnimation("Run5.png","Run6.png","Run7.png","Run8.png","Run9.png","Run10.png")
 bulletImage=loadImage("SpongeBullet.png")

 aimImg=loadImage("aim.png")
}

function setup() {
  createCanvas(500,400);
  
  Background=createSprite(400,150,1000,400);
  Background.addImage(backgroundImg)
  Background.scale=2;

  shooter=createSprite(50,350,50,50);
  shooter.addAnimation("shoot",shooterAnim);
  shooter.scale=0.55;
  //shooter.debug=true;

  zombie = createSprite(450, 340, 50, 50);
  zombie.visible=false;

  

  ground=createSprite(0,390,1000,20);
  ground.shapeColor="black"

  invGround=createSprite(0,390,200,10);
  invGround.visible=false;

  aim=createSprite(200,200,10,10);
  aim.addImage("aim",aimImg);
  aim.scale=0.18;

  

  
   
  zombieGroup=new Group();
  bulletGroup=new Group();

}

function draw() {
  background("black");  
  
  aim.x=mouseX;
  aim.y=mouseY;
 
if (keyDown("a")) {
    temp_bullet = createBullets();
     temp_bullet.addImage(bulletImage);
      temp_bullet.y = shooter.y;
  }



 

    Background.velocityX=-2;

    if(Background.x<0){
      Background.x = 500;
    }

    if(keyDown("space")){
      shooter.velocityY=-10;
  
    }
   
    shooter.velocityY=shooter.velocityY+0.8;

   

    spawnZombies();

    if(mousePressedOver(zombie)){
      zombieGroup.destroyEach();
    }

  shooter.collide(invGround);
  text ("HP:"+lifeTime,50,50);
  drawSprites();
  
}

function spawnZombies() {
  //write code here to spawn the zombies
  var rand=Math.round(random(140,150));
  if (frameCount % rand  === 0) {
     zombie = createSprite(450, 340, 50, 50);
    zombie.addAnimation("run",zombieAnimRun);
    zombie.scale = 0.20;
    zombie.velocityX = -2;

    //zombieX=zombie.x;
    //assign lifetime to the variable
    zombie.lifetime = 400;
    //zombie.debug=true;
    
      
   
    //add each zombie to the group
    zombieGroup.add(zombie);
  }
}

function createBullets() {
  bullet= createSprite(90, 350, 10, 10);
  bullet.velocityX = 6;
  bullet.scale = 2;
  //bulletX=bullet.x;
    
  //bullet.debug=true;

  

   
 
  bulletGroup.add(bullet);
 return bullet;

  
  }

