const WIDTH = 720;
const HEIGHT = 576;

let mouse = { moving: false, cords: {}, angle: 0 };


const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

canvas.width = WIDTH;
canvas.height = HEIGHT;

let hero = new Hero("frylock", 23, "Paladin");
canvas.addEventListener("mousemove", inputListeners.mousemove, false);
window.addEventListener("keydown", inputListeners.keydown, false);
window.addEventListener("keyup", inputListeners.keyup, false);




setInterval(() => {
    ctx.clearRect(0, 0, WIDTH, HEIGHT);
    let currentSprite = hero.getCurrentSprite();
    mouse.angle = getMouseAngle(mouse.cords, currentSprite);
    currentSprite.animate(ctx, mouse);
    let curr = currentSprite;
    ctx.fillStyle = "#FF0000";
    ctx.fillRect(getRectangleMid(curr.x, curr.frame_width), getRectangleMid(curr.y, curr.frame_height), 5, 5);
    ctx.fillRect(mouse.x, mouse.y, 5, 5);
}, 60);
