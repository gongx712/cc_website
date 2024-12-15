function setup() {
    createCanvas(600, 600);
    angleMode(DEGREES);
  }
  
  function draw() {
    let b = 300
    let currentTime = new Date();
    let h = currentTime.getHours();
  
    if (h >= 12) {
      b = 230;
    }
  
    background(b)
  
    let s = currentTime.getSeconds();
    let m = currentTime.getMinutes();
    
    let s_width = map(s, 0, 60, 0, 600);
    let m_width = map(m, 0, 60, 0, 600);
    let h_width = map(h, 0, 24, 0, 600);
    let w = map(h, 0, 24, 0, 50);
    let r = map(m, 0, 60, 0, 360);
    
    push();
    fill('black');
    rect(0, 500, s_width, 12);
    pop();
    
    push();
    noFill()
    strokeWeight(w);
    circle(200, 200, 250);
    pop();
    
    push();
    noFill()
    strokeWeight(6);
    translate(450, 330);
    rotate(r);
    triangle(0, -120, -80, 80, 80, 80);
    pop();
  }
  