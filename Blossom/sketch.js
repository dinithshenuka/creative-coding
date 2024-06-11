let images = [];
let imageCount = 2;

// to load images
function preload() {
  let img1 = loadImage('img/1.png');
  let img2 = loadImage('img/2.png');
  images = [img1,img2];
}

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function mouseClicked() {
  if (images.length === 0) {
    console.error("Images not loaded!");
    return;
  }

  // Select a random image 
  let randomImage = random(images);

  // Resize
  randomImage.resize(100, 100);
  image(randomImage, mouseX, mouseY);
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}