export default class inputHandler {

    constructor(spaceship, shot){
        document.addEventListener('keydown', (event) => {

            //65 A 68 D
            switch(event.keyCode){
                case 65:
                    spaceship.moveLeft()
                    break;
                
                case 68:
                    spaceship.moveRight();
                    break;
                
                // case 87:
                //     shot.update();
                //     break;
            }
        });

        document.addEventListener('keyup', (event) => {

            //65 A 68 D
            switch(event.keyCode){
                case 65:
                    if(spaceship.speed < 0)
                    spaceship.stop()
                    break;
                
                case 68:
                    if(spaceship.speed > 0)
                    spaceship.stop();
                    break;
            }
        })
    }

}
