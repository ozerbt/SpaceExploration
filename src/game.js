import Spaceship from "/src/spaceship.js";
import inputHandler from "/src/input.js";
import enemyShip from "/src/enemy_spaceship.js"



export default class Game {


    constructor(gameWidth, gameHeight){
        this.gameWidth = gameWidth;
        this.gameHeight = gameHeight;



    }


        // spaceship.update(deltaTime)
    // spaceship.draw(ctx)

    // enemy_Ship.update(deltaTime)
    // enemy_Ship.draw(ctx)

    start() {
        this.enemy_ship = new enemyShip(this);
        this.spaceship = new Spaceship(this)

        this.gameObjects = [this.enemy_ship, this.spaceship]

        new inputHandler(this.spaceship)
        }

    update(deltaTime){

        this.gameObjects.forEach(object => object.update(deltaTime));

    }


    draw(ctx){

        this.gameObjects.forEach(object => object.draw(ctx));
    }
}