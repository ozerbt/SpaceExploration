import Spaceship from "/src/spaceship.js";
import inputHandler from "/src/input.js";

let canvas = document.getElementById("gameScreen")

// canvas.width = window.innerWidth;
// canvas.height = window.innerHeight;

let ctx = canvas.getContext('2d')

const GAME_WIDTH = 1500;
const GAME_HEIGHT = 800;


ctx.clearRect(0, 0, 1500, 800)


let spaceship = new Spaceship(GAME_WIDTH, GAME_HEIGHT)

new inputHandler(spaceship);

spaceship.draw(ctx);

let lastTime = 0;


function gameLoop(timestamp) {
    let deltaTime = timestamp - lastTime

    lastTime = timestamp;

    ctx.clearRect(0, 0, canvas.width, canvas.height)
    spaceship.update(deltaTime)
    spaceship.draw(ctx)

    requestAnimationFrame(gameLoop)
}

gameLoop();