var person;
var sceneNum=0;

function setup() {
  createCanvas(640, 360);
  person = new Person();
}

function keyPressed(){
  if (key == ' '){
    var jump = createVector(0,-5);
    person.applyForce(jump);
  }else if(key=='q'){
sceneNum++
  }
}

function draw() {
  if(sceneNum===0){
    background(0,10,0);
    textSize(20);
    fill(50,200,30);
    text("Welcome to the 2D scroller!!!",100,100);
    fill(200,200,200);
    text("press Q to play!",200,300);
    //Character on title screen
  	rect(50,150,50,100);
    //Colour of enemy
    fill(400,0,0);
    //Enemy on tiltle screen
    rect(350,200,100,50);
    //angry face colour
    fill(400,0,0);
    //angry face
    rect(330,130,20,10);
    rect(400,130,20,10);
    rect(350,160,50,10);
  }else if(sceneNum===1){
    //changed background of game
  background(150);
  translate(-person.pos.x,0);
  var gravity = createVector(0,0.1);
  person.applyForce(gravity);
  if(mouseIsPressed){
  
  var force = createVector(-0.1,0);
  person.applyForce(force);
  }
  
  //translate(-person.pos.x,0);
    person.update();
  person.edges();
    person.display();
    //changed the colour of enemy
  fill(400,0,0);
  //Changed the size of "Enemy"
  rect(400, height-50,70,70);
  }else{
     if(sceneNum===2){
    background(50,100,200);
    fill(0,0,0);
    //text size up
    textSize(30);
    text("Thanks For Playing!!!",200,100);
    fill(200,200,200);
    //character on endscreen
    rect(50,200,100,100);
  }
  }
  }
