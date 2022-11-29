import FlappyBird from "./game";

const canvas = document.getElementById("bird-game");
let game = new FlappyBird(canvas);
game.play();
canvas.addEventListener("mousedown", game.click.bind(game));
