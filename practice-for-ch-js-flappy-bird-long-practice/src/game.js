import Bird from "./bird";
import Level from "./level";
export default class FlappyBird {
  constructor(canvas) {
    this.ctx = canvas.getContext("2d");
    this.dimensions = { width: canvas.width, height: canvas.height };
    this.restart();
  }

  animate() {
    this.level.animate(this.ctx);
    this.bird.animate(this.ctx);
    if (this.running) {
      requestAnimationFrame(this.animate.bind(this));
    }
  }

  restart() {
    this.level = new Level(this.dimensions);
    this.bird = new Bird(this.dimensions);
    this.running = false;
  }

  play() {
    this.running = true;
    this.animate();
    setInterval(() => {
      let bounds = this.bird.getBounds();
      let collisionCheck = this.level.collidesWith(bounds);
      let outOfBoundsCheck = bounds.bottomRight > 640;
      if (outOfBoundsCheck || collisionCheck) {
        alert("Game Over!");
        this.restart();
      }
    }, 200);
  }

  click() {
    this.bird.flap();
  }
}
