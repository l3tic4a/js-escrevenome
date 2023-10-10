function setup() {
    createCanvas(400, 400);
  background("pink");
  }
  
    function draw() {
    stroke( "#078A9B");
    fill("#D189DD");
    
    if(mouseIsPressed){
    rect(mouseX,mouseY, 20 ,20);   
  }
  }