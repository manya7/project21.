var bullet ;
var speed , weight ,thickness;
var wall ;


function setup() {
  createCanvas(1600,400);
 speed=random(231,321);
 weight=random(30,51);
 thickness=random(23,83)
 bullet=createSprite(50,200,50,50);
 bullet.velocityX=speed;
 wall=createSprite(1200,200,thickness,width/2);
wall.shapeColor=color(80,80,80);
}
                                    
function draw() {
 background(0);  
 bullet.collide(wall);
  if(hasCollided(bullet,wall)) {

    bullet.velocityX=0;
  var damage=0.5*weight*speed*speed/thickness*thickness*thickness;
if (damage>10) {
  wall.shapeColor=color(255,0,0) ; 
} 
if (damage<10) {
  wall.shapeColor=color(0,255,0);

}
  }
  drawSprites();
}
function hasCollided(bullet,wall){

bulletRightEdge=bullet.x+bullet.width;
wallLeftEdge=wall.x;
if(bulletRightEdge>wallLeftEdge)

{
  return true
}

return false

}