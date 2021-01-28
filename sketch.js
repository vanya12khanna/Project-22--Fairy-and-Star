var fairy, fairyFlying;
var star, starImg
var starnight, starnightImg;
var joyMusic;

function preload()
{
   //preload the images here
  
    fairyFlying = loadAnimation("fairy1.png","fairy2.png");
    starImg   = loadImage("star.png");
    starnightImg = loadImage("starnight.png");
    joyMusic  = loadSound("joyMusic.mp3");
}

function setup() {
	createCanvas(800, 750);
  
  fairy = createSprite(150,580,20,20);
  fairy.addAnimation("fairyFlappingWings",fairyFlying);
  fairy.scale = 0.25;
  
  starnight = createSprite(400,325);
  starnight.addImage(starnightImg);

  star = createSprite(700,50,10,10);
  star.addImage(starImg);
  star.scale = 0.25;
}


function draw() {

  fairy.depth=starnight.depth;
  fairy.depth++;

  star.depth=starnight.depth;
  star.depth++;
  
     if(keyDown(RIGHT_ARROW)){
      fairy.x += 3;
     }

     if(keyDown(LEFT_ARROW)){
      fairy.x -= 3;
     }
  
     if(star.y >= 470){
      star.x = fairy.x + 155;
      star.y = fairy.y - 10;
      joyMusic.play();
     }

     if(keyDown(DOWN_ARROW)){
          star.velocityY=5;
     }
  
  drawSprites();
}
