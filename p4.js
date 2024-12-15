function setup() {
    createCanvas(400, 600);
  }
  let b = 300
  function draw() {
    background(b);
    
     push()//hair 3
    translate(150,80)
    //fill('rgb(70,55,45)')
    //noStroke()
    rect(0,0,80,80)
    pop()
    
    push()//Neck
    noStroke()
    fill(255,229,171)
    translate(200,150)
    rect(-15,-15,30,40)
    pop()
    
    push()//Face
    noStroke()
    fill(255,238,191)
    circle(200,90,100)
    pop()
    
    push()//arm left
    translate(95,161)
    strokeWeight(23)
    stroke('rgb(255,238,191)')
    line(10,200,60,10)
    pop()
    
    push()//arm right
    translate(235,161)
    strokeWeight(23)
    stroke('rgb(255,238,191)')
    line(60,200,10,10)
    pop()
    
    
    push()//Body up1
    noStroke()
    translate(200,200)
    fill("rgb(129,170,235)")
    quad(40,60,-40,60,-60,-40,60,-40)
    pop()
    
    push()//Body up2
    noStroke()
    translate(200,200)
    fill(210,227,238)
    quad(25,60,-25,60,-45,-40,45,-40)
    pop()
    
    push()//Body down1
    noStroke()
    translate(200,300)
    fill("rgb(129,170,235)")
    quad(90,110,-90,110,-40,-40,40,-40)
    pop()
    
    push()//Body down2
    noStroke()
    translate(200,300)
    fill(210,227,238)
    quad(60,70,-60,70,-25,-40,25,-40)
    pop()
    
    push()//leg left
    noStroke()
    translate(180,450)
    fill('black')
    quad(7,70,-7,70,-15,-40,15,-40)
    pop()
    
    push()//leg right
    noStroke()
    translate(220,450)
    fill('black')
    quad(7,70,-7,70,-15,-40,15,-40)
    pop()
    
    push()//foot left
    noStroke()
    translate(180,450)
    fill('rgb(202,202,202)')
    quad(7,70,-7,70,-15,110,15,110)
    pop()
    
    push()//foot right
    noStroke()
    translate(220,450)
    fill('rgb(202,202,202)')
    quad(7,70,-7,70,-15,110,15,110)
    pop()
    
    push()//shoe left
    noStroke()
    translate(165,560)
    fill('rgb(0,0,0)')
    triangle(0,0,30,0,15,25)
    pop()
    
      push()//shoe right
    noStroke()
    translate(205,560)
    fill('rgb(0,0,0)')
    triangle(0,0,30,0,15,25)
    pop()
    
    push()
    noStroke()
    translate(280,90)
    rotate(9)
    fill('rgb(65,43,24)')
    pop()
    
    
    push()//hair 1
    translate(150,80)
    //fill('rgb(70,55,45)')
    //noStroke()
    rect(0,0,23,80)
    pop()
    
    push()//hair 2
    translate(227,80)
    //fill('rgb(70,55,45)')
    //noStroke()
    rect(0,0,23,80)
    pop()
    
    let x = mouseX
    push()
    textSize(20)
    //text('❤️',215,200)
    text('❤️',mouseX,mouseY)
    pop()
    
      push()//hair semicircle
    translate(200,81)
    //fill('rgb(70,55,45)')
    //noStroke()
    arc(0, 0, 100, 100, PI, TWO_PI)
    pop()
    
    translate(170,80)
    line(0,0,60,0)
  }
  
  function mouseClicked(){
    b = random(250)
    
  }