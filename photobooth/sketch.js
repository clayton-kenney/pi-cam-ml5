let cam;
let img2;
let button;

function setup() {
  createCanvas(640, 600);
  cam = createCapture(VIDEO);
  cam.size(640, 480);
  button = createButton('Take a Selfie');
  button.position(275, 500, 50, 100);
  button.mouseClicked(takeShot);
    cam.hide();

  
}

function takeShot() {
  image(cam, 0, 0, 640, 480);
  filter(INVERT);

  saveCanvas('photobooth', 'jpg');
  cam.hide();
  
}
function draw() {
  background(220);
  image(cam, 0, 0, 640, 480);
  filter(INVERT);
  

}
