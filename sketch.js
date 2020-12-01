var wall,thickness;
var bullet,speed,weight

function setup() {
  createCanvas(1600,400);
  thickness=random(22,83)
  speed=random(223,321)
  weight=random(30,52)
  
  wall = createSprite(1200,200,thickness,height/2);
  wall.shapeColor=color(80,80,80)
  bullet = createSprite(100,200,50,50)
 
 bullet.velocityX = 5; 

  
}





function draw() {
  background ("black");  
  if(wall.x-bullet.x < (bullet.width+wall.width)/2){
    bullet.velocityX = 0
    wall.shapeColor = "green"
  }
    
  
  
    drawSprites();
}

  



