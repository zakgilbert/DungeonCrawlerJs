const WIDTH = 720;
const HEIGHT = 576;

let mouse = { moving: false, cords: {}, angle: 0 };

/*
let heroState = "standing";
let heroReady = false;
let heroReadyCheck = true;
*/


const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

canvas.width = WIDTH;
canvas.height = HEIGHT;

let hero = new Hero("fry", 12, "pally");

let inputListeners = initiateInputListeners(hero);
canvas.addEventListener("mousemove", inputListeners.mousemove, false);
window.addEventListener("keydown", inputListeners.keydown, false);
window.addEventListener("keyup", inputListeners.keyup, false);



setInterval(() => {
    ctx.clearRect(0, 0, WIDTH, HEIGHT);
    mouse.angle = getMouseAngle(mouse.cords, hero.getCurrentSprite());
    hero.getCurrentSprite().animate(ctx, mouse);

    let curr = hero.getCurrentSprite();;
    ctx.fillStyle = "#FF0000";
    ctx.fillRect(getRectangleMid(curr.x, curr.frame_width), getRectangleMid(curr.y, curr.frame_height), 5, 5);
    ctx.fillRect(mouse.x, mouse.y, 5, 5);

}, 60);
