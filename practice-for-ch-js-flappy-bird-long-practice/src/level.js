const CONSTANTS = {
  PIPE_SEPARATION: 220,
  PIPE_GAP: 150,
  // increment this for increasing difficulty
  PIPE_MOVEMENT: 5,
};

export default class Level {
  constructor(dimensions) {
    this.dimensions = dimensions;
    this.pipes = [
      { x: 0, y: this.randomGap() },
      { x: 220, y: this.randomGap() },
      { x: 440, y: this.randomGap() },
    ];
  }

  randomGap() {
    return Math.floor(Math.random() * 490);
  }

  animate(ctx) {
    this.drawBackground(ctx);
    this.drawPipes(ctx);
    this.movePipes();
  }

  drawBackground(ctx) {
    ctx.fillStyle = "skyblue";
    ctx.fillRect(0, 0, this.dimensions.width, this.dimensions.height);
  }

  movePipes() {
    for (let i = 0; i < 3; i++) {
      this.pipes[i].x -= CONSTANTS.PIPE_MOVEMENT;
      if (this.pipes[0].x < 0) {
        this.pipes.shift();
        this.pipes.push({
          x: this.pipes[this.pipes.length - 1].x + CONSTANTS.PIPE_SEPARATION,
          y: this.randomGap(),
        });
      }
    }
  }

  drawPipes(ctx) {
    for (let i = 0; i < 3; i++) {
      ctx.fillStyle = "green";
      ctx.fillRect(this.pipes[i].x, 0, 80, this.pipes[i].y);
      ctx.fillRect(
        this.pipes[i].x,
        this.pipes[i].y + CONSTANTS.PIPE_GAP,
        80,
        640
      );
    }
  }

  collidesWith(bounds) {
    // for (let obj of this.pipes) {

    // }
  }
}
