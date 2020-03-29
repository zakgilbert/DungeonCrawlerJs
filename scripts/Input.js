/**
 * Input.js includes listener functions
 */

let inputListeners = {
    mousemove: (e) => {
        mouse.moving = true;
        mouse.cords = getMousePos(canvas, e)
    },
    keydown: (e) => {
        switch (e.keyCode) {
            case 87:
                heroState = "walking";
                break;
            case 82:
                break;
            case 83:
                heroState = "running";
                break;
            default:
                break;
        }
        console.log(e.keyCode);
    },
    keyup: (e) => {
        switch (e.keyCode) {
            case 82:
                heroReady = !heroReady;
                break;
            default:
                break;
        }
        if (heroReady)
            heroState = "attackStance";
        else
            heroState = "standing";
    }

}
