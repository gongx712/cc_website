let Character_X = 300;
let Character_Y = 200;
let Bomb_X = [50, 150, 350, 450, 550, 650];
let Bomb_Y = [50, 150, 350, 450];
let myBomb;
let imgBomb;
let imgBox;
let my_bombs = [];
let bomb_count = 18;
let imgCharacter
let current_scene = 0
let randomBox = [2,3]

function preload() {
  imgBomb = loadImage("Bomb.png");
  imgBox = loadImage("Box.png");
  Character = loadImage("Character.png");
  Character2 = loadImage("Character2.png");
  Scene0= loadImage('Scene1.png')
  Scene2= loadImage('Scene2.png')
  Scene3= loadImage('Scene3.png')
}

function setup() {
  createCanvas(600, 400);
  
  myBomb = new Bomb(17, 12);
  imageMode(CENTER);
  imgCharacter = Character


  for (let i = 0; i < bomb_count; i++) {
    my_bombs.push(new Bomb(random(Bomb_X), random(Bomb_Y)));
  }
}

function draw() {
  background(220);
  strokeWeight(7);
  stroke("rgb(86,60,7)");

  // Background
  for (let i = 0; i < 10; i++) {
    for (let j = 0; j < 10; j++) {
      fill("rgb(127,89,48)");
      rect(i * 100, j * 100, 100);
    }
  }

  for (let i = 0; i < bomb_count; i++) {
    my_bombs[i].render();
    my_bombs[i].bomb_visible();
  }

  drawOneBox();

  // Character movement
  if (keyIsPressed == true && keyCode == LEFT_ARROW) {
    Character_X -= 5;
    imgCharacter = Character2
  }
  if (keyIsPressed == true && keyCode == RIGHT_ARROW) {
    Character_X += 5;
    imgCharacter = Character
  }
  if (keyIsPressed == true && keyCode == UP_ARROW) {
    Character_Y -= 5;
  }
  if (keyIsPressed == true && keyCode == DOWN_ARROW) {
    Character_Y += 5;
  }

  image(imgCharacter, Character_X, Character_Y);
  switch (current_scene) {
    case 0:
      scene0();
      break;
    case 1:
      break;
    case 2:
      scene2();
      break;
    case 3:
      scene3();
      break;
  }
}

// Function to draw exactly one box in an empty spot based on distance//Helped by DT Study
function drawOneBox() {
  for (let i = 0; i < Bomb_X.length; i++) {
    // If there is no bomb at the current location
    if (isBombAtLocation(Bomb_X[i], Bomb_Y[i]) == false) {
      // Check if the character is within 50px of the box's position
      if (dist(Character_X, Character_Y, Bomb_X[i], Bomb_Y[i]) < 50 && mouseIsPressed) {
        image(imgBox, Bomb_X[i], Bomb_Y[i], 80, 80);
        if(current_scene === 1){
        current_scene = random(randomBox)
        Character_X = 300
        Character_Y = 200
        resetBombs()
        
        break;
      }
        
       break;
       
      }
    }
  }
}


// Function to check if there's already a bomb at the given coordinates//Helped by DT Study
function isBombAtLocation(x, y) {
  for (let i = 0; i < my_bombs.length; i++) {
    if (my_bombs[i].x === x && my_bombs[i].y === y) {
      return true; 
    }
  }
  return false; 
}

class Bomb {
  constructor(x_pos, y_pos) {
    this.x = x_pos;
    this.y = y_pos;
    this.visible = false;
  }

  render() {
    if (this.visible) {
      image(imgBomb, this.x + 2, this.y, 80, 80);
    }
  }

  bomb_visible() {
    if (dist(mouseX, mouseY, this.x, this.y) < 35) {
      this.visible = true;
    } else {
      this.visible = false;
    }
  }
}

function scene0(){
  image(Scene0,300, 200,600,400)
}

function scene2(){
  image(Scene2,300, 200,600,400)
}

function scene3(){
  image(Scene3,300, 200,600,400)
}

function mousePressed(){
  if (current_scene === 0) {
    current_scene = 1; 
  } else if (current_scene === 2 || current_scene === 3) {
    current_scene = 0; 
  }
  console.log(current_scene)
}

function resetBombs() {
  my_bombs = [];  


  for (let i = 0; i < bomb_count; i++) {
    my_bombs.push(new Bomb(random(Bomb_X), random(Bomb_Y)));
  }
}

