var grav;
var fireworks = [];

function setup() {
	createCanvas(400,400);
	strokeWeight(4);
	
	grav = createVector(0,0.1);
	fireworks.push(new Firework(random(width), height));
}

function draw() {
	background(20,50);
	if (random() < 0.2) {
		fireworks.push(new Firework(random(width), height));
	}
	
	for (var i = fireworks.length - 1; i >= 0; i--) {
		//fireworks[i].applyForce(grav);
		//console.log(fireworks.length);
		fireworks[i].update();
		fireworks[i].show();
		
		if (fireworks[i].particles.length === 0) {
			fireworks.splice(i, 1);
		}
	}
	
	
}