function setup() {
  createCanvas(400, 400);
  angleMode(DEGREES)
// R, G & B values.
  background(255, 204, 0);
  
  fill(220)

triangle(190,100,120,200,200,250)
  
  fill(235)
quad(130, 150, 200, 220, 200, 150, 150, 250)
  
  fill(240)
triangle(190,100,280,200,200,250)
  
  fill(235)
quad(260, 130, 270, 220, 250, 200, 200, 250)
  
  fill(250)
quad(240, 330, 270, 220, 200, 140, 150, 250)
quad(100, 200, 130, 150, 150, 250, 80, 280)
  
triangle(340, 220, 270, 220, 260, 130) 
  
  push()
  blendMode(EXCLUSION)
  translate(200,230)
  rotate(-10)
  fill(100)
  textSize(32)
  text('동',0,0)
  pop()
  
  push()
  blendMode(EXCLUSION)
  translate(100,215)
  rotate(15)
  fill(100)
  textSize(32)
  text('서',0,0)
  pop()

  push()
  blendMode(EXCLUSION)
  translate(282,200)
  rotate(-30)
  fill(100)
  textSize(28)
  text('남',0,0)
  pop()
}

