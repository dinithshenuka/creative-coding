let images = [];
let imageCount = 2;

// to load images
function preload() {
  for (let i = 0; i < imageCount; i++) {
    images[i] = loadImage("img/" + i + ".png");
  }
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