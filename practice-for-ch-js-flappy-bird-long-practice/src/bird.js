const CONSTANTS = {
  GRAVITY: 0.5,
  FLAP_SPEED: -8,
  TERMINAL_VEL: 12,
  BIRD_WIDTH: 40,
  BIRD_HEIGHT: 30,
};

export default class Bird {
  constructor(dimensions) {
    this.velocity = 0;
    this.dimensions = dimensions;
    this.posX = this.dimensions.width / 3;
    this.posY = this.dimensions.height / 2;
  }

  drawBird(ctx) {
    ctx.fillStyle = "#FFFF00";
    ctx.fillRect(
      this.posX,
      this.posY,
      CONSTANTS.BIRD_WIDTH,
      CONSTANTS.BIRD_HEIGHT
    );
  }

  animate(ctx) {
    this.move();
    this.drawBird(ctx);
  }

  move() {
    this.posY += this.velocity;
    // gravity
    this.velocity += CONSTANTS.GRAVITY;
  }

  flap() {
    this.velocity = CONSTANTS.FLAP_SPEED;
  }
}
