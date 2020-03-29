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
                heroState = (heroReady ? "readyWalk" : "walking");
                break;
            case 69:
                heroReady = !heroReady;
                break;
            case 83:
                heroState = "running";
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
        heroState = (heroReady ? "readyStance" : "standing");
    }

}
