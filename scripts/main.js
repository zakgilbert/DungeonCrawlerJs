const WIDTH = 720;
const HEIGHT = 576;

let mouse = { moving: false, cords: {}, angle: 0 };

let heroState = "standing";
let enemyState = heroState;


const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

canvas.addEventListener("mousemove", (e) => {
    mouse.moving = true;
    mouse.cords = getMousePos(canvas, e);
}, false);
window.addEventListener("keydown", this.keydown, false);
window.addEventListener("keyup", (e) => {
    heroState = "standing";
}, false);

canvas.width = WIDTH;
canvas.height = HEIGHT;

function keydown(e) {
    switch (e.keyCode) {
        case 87:
            heroState = "walking";
            break;
        case 83:
            heroState = "running";
    }
}

let heroStanding = new sprite(0, 0, 640, 1712, 16, 8, "images/pally_ready.png", "hero");
let heroWalking = new sprite(0, 0, 1040, 1296, 16, 10, "images/pally_walk.png", "hero");
let heroRunning = new sprite(0, 0, 752, 1648, 16, 8, "images/pally_run.png", "hero");

let heroStates = {
    "standing": heroStanding,
    "walking": heroWalking,
    "running": heroRunning
};


setInterval(() => {
    ctx.clearRect(0, 0, WIDTH, HEIGHT);
    mouse.angle = getMouseAngle(mouse.cords, heroStates[heroState]);
    heroStates[heroState].animate(ctx, mouse);
    let curr = heroStates[heroState];
    ctx.fillStyle = "#FF0000";
    ctx.fillRect(getRectangleMid(curr.x, curr.frame_width), getRectangleMid(curr.y, curr.frame_height), 5, 5);
    ctx.fillRect(mouse.x, mouse.y, 5, 5);
}, 60);
