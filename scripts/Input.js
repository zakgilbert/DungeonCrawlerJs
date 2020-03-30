/**
 * Input.js includes listener functions
 */
function initiateInputListeners(hero) {
    return {
        mousemove: (e) => {
            mouse.moving = true;
            mouse.cords = getMousePos(canvas, e)
        },
        keydown: (e) => {
            switch (e.keyCode) {
                case 87:
                    hero.state = (hero.ready ? "readyWalk" : "walking");
                    break;
                case 69:
                    hero.ready = !hero.ready;
                    break;
                case 83:
                    hero.state = "running";
                    break;
                case 81:
                    // q,
                    break;
                case 67:
                    // c,
                    break;
                default:
                    break;
            }
            console.log(e.keyCode);
        },
        keyup: (e) => {
            hero.state = (hero.ready ? "readyStance" : "standing");
        }
    }
}
