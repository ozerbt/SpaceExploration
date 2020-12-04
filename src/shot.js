export default class Shot {
    constructor(game){
        this.image = document.getElementById("flame")

        this.position = {
            x:game.gameWidth / 2 - this.width / 2,
            y:game.gameHeight - this.height - 10
        }
        this.speed = {
            x: 2,
            y: 2
        }
        this.size = 100
        this.gameWidth = game.gameWidth
        this.gameHeight = game.gameHeight
    }

    draw(ctx) {
        ctx.drawImage(this.image, this.position.x, this.position.y, this.size, this.size)
    }


    update(deltaTime) {
         this.position.y += this.speed.y;

         if(this.position.y + this.size > this.gameWidth || this.position.y < 0){
             this.speed.y = -this.speed.y
         }
        //  if(this.position.y > this.gameHeight || this.position.y < 0){
        //     this.speed.y = -this.speed.y
        // }
    }
}