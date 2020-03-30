/**
 * Input.js includes listener functions
 */

let inputListeners = {
    mousemove: (e) => {
        mouse.moving = true;
        mouse.cords = getMousePos(canvas, e)
    },
    // On key is pressed
    keydown: (e) => {
        switch (e.keycode) {
            case 87:
                hero.state = ((hero.ready && !hero.inction) ? "readywalk" : "walking");
                break;
            case 69:
                hero.ready = !hero.ready;
                break;
            case 83:
                if (!hero.inaction)
                    hero.state = "running";
                break;
            case 81:
                if (hero.ready && hero.state !== "attack_1" && !hero.InAction) {
                    hero.inAction = true;
                    hero.PreviousState = hero.State;
                    hero.state = "attack_1";
                }
                break;
            case 67:
                // c,
                break;
            default:
                break;
        }
    },
    // on key is released
    keyup: (e) => {
        hero.State = (hero.InAction ? "attack_1" : (hero.Ready ? "readyStance" : "standing"));
    }

}
