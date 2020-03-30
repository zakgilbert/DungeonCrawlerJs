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
                    hero.state = (hero.ready && !hero.inAction ? "readyWalk" : "walking");
                    break;
                case 69:
                    hero.ready = !hero.ready;
                    break;
                case 83:
                    if (!hero.inAction)
                        hero.state = "running";
                    break;
                case 81:
                    if (hero.ready && hero.state !== "attack_1" && !hero.inAction) {
                        hero.inAction = true;
                        hero.previousState = hero.state;
                        hero.state = "attack_1";
                    }
                    // q,
                    break;
                case 67:
                    // c,
                    break;
                default:
                    break;
            }
        },
        keyup: (e) => {
            hero.state = (hero.inAction ? 
                "attack_1" : (hero.ready ? "readyStance" : "standing"));
        }
    }
}
