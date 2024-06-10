let myImage;

function preload() {
  myImage = loadImage("img/1.jpg");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function mouseClicked() {
  if (!myImage) {
    console.error("Image not loaded!");
    return;
  }
  else{
    myImage.resize(100, 100);
    image(myImage, mouseX, mouseY);
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}