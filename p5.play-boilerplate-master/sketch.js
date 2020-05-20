var wall;
var speed;
var car;
var damage;
var weight;
var thickness;

function setup() {
  createCanvas(1600,400);
  thickness=random(22,83)
  wall = createSprite(1200, 100,thickness,1200);
  speed = random(223,321);
   bullet= createSprite(200,200,70,20);
   weight=random(30,52);
  

  bullet.shapeColor="white";
   wall.shapeColor="brown";
}

function draw() {
  background("black"); 

  if(keyDown("space")){
    bullet.velocityX=speed;
    bullet.shapeColor="pink"
  }
  if(bullet.collide(wall)){
   
    damage=0.5*weight*speed*speed/thickness*thickness*thickness;

   }
   if(damage>12.43){

    bullet.shapeColor=color(255,0,0);

   }
   if(damage>10.68 && damage<12.43){

    bullet.shapeColor=color(230,230,0);
    
   }
  
  drawSprites();
}