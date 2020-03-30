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
                    heroAttackHelper("attack_1", "attack_2");
                    break;
                case 67:
                    heroAttackHelper("attack_2", "attack_1");
                    break;
                default:
                    break;
            }
        },
        keyup: (e) => {
            hero.state = (hero.inAction ?
                (hero.state === "attack_1" ? "attack_1" : "attack_2") :
                (hero.ready ? "readyStance" : "standing"));
        }
    }
}
/**
 * Check if hero is in ready stance and not currently in atk1 or atk2, if so then begin atk1. 
 * @param {""} atk1 -string
 * @param {""} atk2 -string
 */
function heroAttackHelper(atk1, atk2) {
    if (hero.ready && (hero.state !== atk1 || hero.state !== atk2)
        && !hero.inAction) {
        hero.inAction = true;
        hero.previousState = hero.state;
        hero.state = atk1;
    }

}
