export default class enemyShip {
    constructor(gameWidth, gameHeight){
        this.image = document.getElementById("spaceship_img")

        this.position = {
            x:10,
            y:10
        }
        this.speed = {
            x: 2,
            y: 2
        }
        this.size = 100
        this.gameWidth = gameWidth
        this.gameHeight = gameHeight
    }

    draw(ctx) {
        ctx.drawImage(this.image, this.position.x, this.position.y, this.size, this.size)
        ctx.drawImage(this.image, this.position.x + 80, this.position.y, this.size, this.size)
        ctx.drawImage(this.image, this.position.x - 220, this.position.y, this.size, this.size)
        ctx.drawImage(this.image, this.position.x - 150, this.position.y, this.size, this.size)
        ctx.drawImage(this.image, this.position.x - 80, this.position.y, this.size, this.size)
        ctx.drawImage(this.image, this.position.x, this.position.y + 80, this.size, this.size)
        ctx.drawImage(this.image, this.position.x + 80, this.position.y + 80, this.size, this.size)
        ctx.drawImage(this.image, this.position.x - 220, this.position.y + 80, this.size, this.size)
        ctx.drawImage(this.image, this.position.x - 150, this.position.y + 80, this.size, this.size)
        ctx.drawImage(this.image, this.position.x - 80, this.position.y + 80, this.size, this.size)
    }


    update(deltaTime) {
         this.position.x += this.speed.x;

         if(this.position.x + this.size > this.gameWidth || this.position.x < 0){
             this.speed.x = -this.speed.x
         }
        //  if(this.position.y > this.gameHeight || this.position.y < 0){
        //     this.speed.y = -this.speed.y
        // }
    }
}