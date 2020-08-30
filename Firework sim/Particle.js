class Particle {
	constructor(x, y, colour, firework) {
		this.pos = createVector(x,y);
		this.vel = createVector(0,random(-10,-4));
		this.acc = createVector(0,0);
		this.lifespan = 255;
		this.colour = colour;
		this.firework = firework;
		
		if (!firework) {
			this.vel = p5.Vector.random2D();
			this.vel.mult(random(1,6));
		}
	}
	update() {
		this.vel.add(this.acc);
		this.pos.add(this.vel);
		this.acc.mult(0);
		
		if (!this.firework) {
			this.lifespan -= 5;
			this.vel.mult(0.9);
		}
	}
	
	show() {
		stroke(this.colour.r, this.colour.g, this.colour.b,this.lifespan);
		point(this.pos.x,this.pos.y)
	}
	
	applyForce(force) {
		this.acc.add(force);
	}
}