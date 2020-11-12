export default class Spaceship {
    constructor(gameWidth, gameHeight) {
        this.gameWidth = gameWidth

        this.width = 150;

        this.height = 20;

        this.maxSpeed = 5

        this.speed = 0

        this.position = {
            x: gameWidth / 2 - this.width / 2,
            y: gameHeight - this.height - 10
        }
    }

    moveLeft() {
        this.speed = -this.maxSpeed
    }

    moveRight(){
        this.speed = this.maxSpeed
    }
    draw(ctx){
        ctx.fillStyle = "#0ff"
        //ctx.fillRect(this.position.x, this.position.y, this.width, this.height)
        ctx.beginPath();
        ctx.moveTo(this.position.x, this.position.y)
        //ctx.lineTo(this.position.x , this.position.y)
        ctx.lineTo(this.position.x + 50, this.position.y + 70)
        ctx.lineTo(this.position.x - 50, this.position.y + 70)
        ctx.closePath();
        ctx.fill();


    }

    update(deltaTime){

        if(!deltaTime) return;
        this.position.x += this.speed;
        if(this.position.x < 0) this.position.x = 0;
        if(this.position.x + this.width > this.gameWidth){
            this.position.x = this.gameWidth - this.width

        }
    }

}