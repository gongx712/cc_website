function setup() {
    createCanvas(600, 600);
  }
  let t1=255
  let t2=255
  let t3=255
  let t4=255
  let t5=255
  
  function draw() {
    background(300);
    push()
     for(let i=0;i<30;i++)
      for(let j=0;j<30;j++){ 
        push()
        noStroke()
        fill(218,255,255,t1)
        rect(i*50,j*50,25)
        rect(i*50+25,j*50+25,25)
      }
    pop()
  
    push()
     for(let a=0;a<30;a++)
      for(let b=0;b<30;b++){ 
        push()
        noStroke()
        fill(155,207,255,t3)
        rect(a*50+25,b*50,25)
      rect(a*50,b*50-25,25)}
    pop()
    
    push()
     for(let e=0;e<30;e++)
      for(let f=0;f<30;f++){ 
        push()
        noStroke()
        fill(255,254,t4)
        circle(e*25+550,e*25,7)
        circle(e*25+525,e*25,7)
        circle(e*25+475,e*25,7)
        circle(e*25+450,e*25,7)
        circle(e*25+400,e*25,7)
        circle(e*25+375,e*25,7)
        circle(e*25+325,e*25,7)
        circle(e*25+300,e*25,7)
        circle(e*25+225,e*25,7)
        circle(e*25+100,e*25,7)
        circle(e*25+25,e*25,7)
        circle(e*25,e*25,7)
      circle(e*25-75,e*25,7)
      circle(e*25-100,e*25,7)
      circle(e*25-175,e*25,7)
      circle(e*25-200,e*25,7)
      circle(e*25-275,e*25,7)
        circle(e*25-300,e*25,7)
        circle(e*25-375,e*25,7)
        circle(e*25+150,e*25,7)
         circle(e*25+175,e*25,7)
         circle(e*25-225,e*25,7)
        circle(e*25-450,e*25,7)
        circle(e*25-475,e*25,7)
        circle(e*25-525,e*25,7)
        circle(e*25-550,e*25,7)
      }
    pop()
    
   
    push()
     for(let e=0;e<30;e++)
      for(let f=0;f<30;f++){ 
        push()
        noStroke()
        fill(117,159,255,t2)
        circle(e*25+125,e*25,7)
        circle(e*25-500,e*25,7)
        circle(e*25-425,e*25,7)
        circle(e*25-350,e*25,7)
        circle(e*25-325,e*25,7)
        circle(e*25-250,e*25,7)
       
        circle(e*25-150,e*25,7)
        circle(e*25-125,e*25,7)
        circle(e*25-25,e*25,7)
        circle(e*25-50,e*25,7)
        circle(e*25+50,e*25,7)
      circle(e*25+75,e*25,7)
      circle(e*25+200,e*25,7)
        circle(e*25+250,e*25,7)
       circle(e*25+275,e*25,7)
        circle(e*25+350,e*25,7)
         circle(e*25+425,e*25,7)
        circle(e*25+500,e*25,7)
        
      }
    pop()
  
  }
    function mouseMoved(){
      t1 = random(0,255)
      t2 = random(0,255)
      t3 = random(150,255)
      t4 = random(0,255)
    }