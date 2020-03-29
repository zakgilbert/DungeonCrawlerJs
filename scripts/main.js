const WIDTH = 720;
const HEIGHT = 576;

let mouse = { moving: false, cords: {}, angle: 0 };

let heroState = "standing";
let heroReady = false;


const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

canvas.width = WIDTH;
canvas.height = HEIGHT;

canvas.addEventListener("mousemove", inputListeners.mousemove, false);
window.addEventListener("keydown", inputListeners.keydown, false);
window.addEventListener("keyup", inputListeners.keyup, false);

let heroStanding = new sprite(0, 0, 992, 1280, 16, 16, "images/pally_stand.png", "hero");
let heroAttackStance = new sprite(0, 0, 640, 1712, 16, 8, "images/pally_ready.png", "hero");
let heroWalking = new sprite(0, 0, 1040, 1296, 16, 10, "images/pally_walk.png", "hero");
let heroRunning = new sprite(0, 0, 752, 1648, 16, 8, "images/pally_run.png", "hero");

let heroStates = {
    attackStance: heroAttackStance,
    walking: heroWalking,
    running: heroRunning,
    standing: heroStanding
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
