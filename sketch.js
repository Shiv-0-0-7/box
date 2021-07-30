
function setup() {
  createCanvas(600,600);
  var box=createSprite(200,200,30,30)
}

function draw() 
{
  background("green");
  if (keyIsDown(RIGHT_ARROW)){
    box.x=box.x+5
  }
drawSprites();
}




