export default class Bird {
  constructor(dimensions) {
    this.velocity = 0;
    this.dimensions = dimensions;
    this.posX = this.dimensions.width / 3;
    this.posY = this.dimensions.height / 2;
  }

  drawBird(ctx) {
    ctx.fillStyle = "#FFFF00";
    ctx.fillRect(this.posX, this.posY, 40, 30);
  }

  animate(ctx) {
    this.drawBird(ctx);
  }
}
