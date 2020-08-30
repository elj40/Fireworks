class Firework {
	constructor(x,y) {
		this.particles = [];
		let colour = {r: random(255),g: random(255),b: random(255)};
		this.particles.push(new Particle(x, y, colour,true));
		this.exploded = false;
	}
	update() {
		if (!this.exploded) {
			if (this.particles[0].vel.y >= 0) {
				let p = this.particles[0];
				p.vel = p5.Vector.random2D();
				p.firework = false;
				for (var i = 0; i < 50; i++) {
					this.particles.push(new Particle(p.pos.x, p.pos.y, this.colour,false));
				} 
				this.exploded = true;
			}
		}
		
		for (var i = this.particles.length - 1; i >= 0; i--) {
			this.particles[i].applyForce(grav);
			this.particles[i].update();
			if (this.particles[i].pos.y > height || this.particles[i].lifespan < 1) {
				this.particles.splice(i, 1);
			}
		}
		
	}
	show() {
		for (var i = this.particles.length - 1; i >= 0; i--) {
			this.particles[i].show();
		}
	}
}