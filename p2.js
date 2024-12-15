let x = 200, y = 200;
let z = 200;
let minZ = 150;
let maxZ = 200;
let increment = -0.1;
let emojis = ["💥", "☀️", "🌞", "🔥", "🌄", "🌅"];
let currentEmojiIndex = 0;
let back = 220;
let snowflakes = [];

function setup() {
  createCanvas(400, 400);
}

function draw() {
  noStroke();
  background(back);
  circle(x, y, z);
  
  push();
  fill("black");
  circle(160, 180, 15);
  pop();
  
  push();
  fill("black");
  circle(240, 180, 15);
  pop();
  
  push();
  textSize(32);
  text("🥕", 180, 220);
  pop();
  
  push();
  textSize(32);
  text(emojis[currentEmojiIndex], mouseX, mouseY);
  pop();
  
  // 让 z 均匀变化
  z += increment;
  if (z <= minZ) {
    increment = 0;
  }

  // 绘制和更新雪花
  for (let i = snowflakes.length - 1; i >= 0; i--) {
    let snowflake = snowflakes[i];
    fill('white');
    textSize(32);
    text('❄️', snowflake.x, snowflake.y);
    snowflake.y += 2;
    snowflake.opacity -= 0.01;
    if (snowflake.opacity <= 0) {
      snowflakes.splice(i, 1);
    }
  }
}

function mouseClicked() {
  z = maxZ;
  increment = -0.1;
  currentEmojiIndex = Math.floor(Math.random() * emojis.length);
  back = random(100, 200);
}

function keyPressed() {
  let x = random(0, width);
  let y = 0;
  let opacity = 1;
  snowflakes.push({ x, y, opacity });
}