var fRect,mRect;

function setup() {
  createCanvas(1200,800);
 fRect= createSprite(400, 200, 50, 50);
 mRect= createSprite(800, 200, 50, 50);
 fRect.velocityX=2;
 mRect.velocityX=-2;
}

function draw() {
  background(1,6,1);  
if (mRect.x-fRect.x<mRect.width/2+fRect.width/2
  && fRect.x-mRect.x<mRect.width/2+fRect.width/2
  && mRect.y-fRect.y<mRect.height/2+fRect.height/2
  && fRect.y-mRect.y<mRect.height/2+fRect.height/2) {
fRect.velocityX=fRect.velocityX*(-1);
mRect.velocityX=mRect.velocityX*(-1);
}
  drawSprites();
}