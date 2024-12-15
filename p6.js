function setup() {
    createCanvas(600, 600);
  }
  
  let D1 = [23.24, 15.16, 2.75, 8.47, 2.75];
  let D2 = [36.62, 32.80, 34.94];
  let D3 = [30.55];
  let D4 = [2.75, 11.06, 2.75, 20.78, 8.47];
  let D5 = [26.65, 35.97, 2.75, 5.48, 24.51];
  let D6 = [2.75, 2.75, 5.48, 5.27];
  let D7 = [2.75, 13.91, 2.75];
  
  function draw() {
    background(0);
    noStroke();
    for (let i = 0; i < 5; i++) {
      let randomLength = random(5, 20);
      fill('white');
      rect(0, i * 22, D1[i] * 15, randomLength);
    }
    for (let i = 0; i < 5; i++) {
      let randomLength = random(5, 50);
      fill('gray');
      rect(0, i * 22 + 100, D2[i] * 15, randomLength);
    }
    for (let i = 0; i < 5; i++) {
      let randomLength = random(5, 40);
      fill('rgb(255,255,255)');
      rect(0, i * 22 + 160, D3[i] * 15, randomLength);
    }
    for (let i = 0; i < 5; i++) {
      let randomLength = random(5, 15);
      fill('white');
      rect(0, i * 22 + 180, D4[i] * 15, randomLength);
    }
    for (let i = 0; i < 5; i++) {
      let randomLength = random(5, 40);
      fill('gray');
      rect(0, i * 22 + 280, D5[i] * 15, randomLength);
    }
    for (let i = 0; i < 5; i++) {
      let randomLength = random(5, 10);
      fill('white');
      rect(0, i * 22 + 380, D6[i] * 15, randomLength);
    }
    for (let i = 0; i < 5; i++) {
      let randomLength = random(5, 10);
      fill('gray');
      rect(0, i * 22 + 470, D7[i] * 15, randomLength);
    }
  }
  
  function mouseMoved() {
    let x = mouseX;
    let y = mouseY;
    let found = false;
    let displayText = '';
  
    // Check D1 rectangles
    for (let i = 0; i < 5; i++) {
      if (x > 0 && x < D1[i] * 15 && y > i * 22 && y < i * 22 + random(5, 10)) {
        found = true;
        displayText = D1[i].toFixed(2);
        break;
      }
    }
  
    // Check D2 rectangles
    if (!found) {
      for (let i = 0; i < 5; i++) {
        if (x > 0 && x < D2[i] * 15 && y > i * 22 + 100 && y < i * 22 + 100 + random(5, 10)) {
          found = true;
          displayText = D2[i].toFixed(2);
          break;
        }
      }
    }
  
    // Check D3 rectangles
    if (!found) {
      for (let i = 0; i < 5; i++) {
        if (x > 0 && x < D3[i] * 15 && y > i * 22 + 160 && y < i * 22 + 160 + random(5, 10)) {
          found = true;
          displayText = D3[i].toFixed(2);
          break;
        }
      }
    }
  
    // Check D4 rectangles
    if (!found) {
      for (let i = 0; i < 5; i++) {
        if (x > 0 && x < D4[i] * 15 && y > i * 22 + 180 && y < i * 22 + 180 + random(5, 10)) {
          found = true;
          displayText = D4[i].toFixed(2);
          break;
        }
      }
    }
  
    // Check D5 rectangles
    if (!found) {
      for (let i = 0; i < 5; i++) {
        if (x > 0 && x < D5[i] * 15 && y > i * 22 + 280 && y < i * 22 + 280 + random(5, 10)) {
          found = true;
          displayText = D5[i].toFixed(2);
          break;
        }
      }
    }
  
    // Check D6 rectangles
    if (!found) {
      for (let i = 0; i < 5; i++) {
        if (x > 0 && x < D6[i] * 15 && y > i * 22 + 380 && y < i * 22 + 380 + random(5, 10)) {
          found = true;
          displayText = D6[i].toFixed(2);
          break;
        }
      }
    }
  
    // Check D7 rectangles
    if (!found) {
      for (let i = 0; i < 5; i++) {
        if (x > 0 && x < D7[i] * 15 && y > i * 22 + 470 && y < i * 22 + 470 + random(5, 10)) {
          found = true;
          displayText = D7[i].toFixed(2);
          break;
        }
      }
    }
  
    if (found) {
      fill(255);
      textSize(100);
      text(displayText, 350, 550);
    }
  }