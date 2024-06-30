/* 

Blossom - p5 project 1
30 Jun 2024

*/

let imageCount = 14;

let particles = [];		
let flowers = [];	 

function preload() {
  font = loadFont('/assets/MyUglyHandwriting-Regular.otf');
  
  
    for (let i = 0; i < imageCount; i++) {
        flowers[i] = loadImage("img/" + i + ".png");
    }
}


function setup() { 
  createCanvas(windowWidth-10, windowHeight-10);
  imageMode(CENTER);

} 

function draw() { 
 background(255);
  
  
  textSize(32);
  textFont(font);
  textAlign(CENTER, CENTER);
  text('Just give the screen a tap \nor drag \nor mouse click!', width / 2, height / 2);

  
  
  for (var i = particles.length-1; i >= 0; i--) {
  	particles[i].show();
    particles[i].drop();
    
    
    if (particles[i].y > height) {
    	particles.splice(i,1);
    }
    
     
    if (particles.length > 2000) {
      particles.shift();
    }
  }
  
}

function mouseDragged() {
  
	var newParticle = new Particle(flowers[round(random(0,imageCount-1))], mouseX, mouseY, random(5,80), random(1, 5));
	particles.push(newParticle);
}

function mousePressed() {
  
	var newParticle = new Particle(flowers[round(random(0,imageCount-1))], mouseX, mouseY, random(5,80), random(1, 5));
	particles.push(newParticle);
}

// touch

function touchStarted(){
  
	var newParticle = new Particle(flowers[round(random(0,imageCount-1))], mouseX, mouseY, random(5,80), random(1, 5));
	particles.push(newParticle);
}

function touchMoved(){
  
	var newParticle = new Particle(flowers[round(random(0,imageCount-1))], mouseX, mouseY, random(5,80), random(1, 5));
	particles.push(newParticle);
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}

// object declaration - constructor function
function Particle(t, x, y, si, sp) {
  this.content = t;
	this.x = x; 
  this.y = y;
  this.size = si;
  this.speed = sp;
}

// object methods
Particle.prototype = {
	constructor: Particle,
  
  // display the object
  show: function() {
    image(this.content, this.x, this.y, this.size, this.size);
  },
  
  // move the object downwards
  drop: function() {
  	this.y += this.speed;
  },
  
  
  
}