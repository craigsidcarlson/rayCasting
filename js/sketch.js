let walls = [];
let ray;
let particle;
function setup() {
  createCanvas(400, 400);
  const numWalls = 5;
  for (let i = 0; i < numWalls; i++) {
    const x1 = random(width);
    const y1 = random(height);
    const x2 = random(width);
    const y2 = random(height);
    walls.push(new Boundary(x1, y1, x2, y2));

  } 
  particle = new Particle();
}

function draw() {
  background(0);
  for (let wall of walls) {
    wall.show();
  }
  particle.update(mouseX, mouseY);
  particle.show();
  particle.look(walls);

  // ray.lookAt(mouseX, mouseY);

  // let pt = ray.cast(wall);

  // if (pt) {
  //   fill(255);
  //   ellipse(pt,x, pt.y, 8, 8);
  // }
}