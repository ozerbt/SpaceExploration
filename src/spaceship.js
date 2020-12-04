export default class Spaceship {
    constructor(game) {
        this.gameWidth = game.gameWidth

        this.width = 50;

        this.height = 50;

        this.maxSpeed = 5

        this.speed = 0

        this.position = {
            x: game.gameWidth / 2 - this.width / 2,
            y: game.gameHeight - this.height - 10
        }
        this.image = document.getElementById("main_spaceship")
        this.flame_image = document.getElementById("flame")
    }

    moveLeft() {
        this.speed = -this.maxSpeed
    }

    moveRight(){
        this.speed = this.maxSpeed
    }
    draw(ctx){
        ctx.drawImage(this.image, this.position.x, this.position.y, this.width, this.height)
    }

    update(deltaTime){


        this.position.x += this.speed;
        if(this.position.x < 0){
           return this.position.x = 20
        };
        this.maxSpeed=5
        if(this.position.x + this.width > this.gameWidth){
            this.position.x = this.gameWidth - this.width

        }
    }

    stop() {
        this.speed = 0;
    }

}