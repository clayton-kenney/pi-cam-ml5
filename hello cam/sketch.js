let cam;
function setup() {
  createCanvas(640, 480);
  cam = createCapture(VIDEO);
  cam.size(640, 480);
  cam.hide();
}

function draw() {
  background(220);
  image(cam, 0, 0, 640, 480);
}