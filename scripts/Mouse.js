/** Mouse.js */

function getMouseAngleHelper(x1, y1, x2, y2) {
    return (getDegreeAngle(
        x1, y1, x2, y2) / 22.5);
}

function getMouseAngle(mouse, obj) {
    return Math.floor(getMouseAngleHelper(mouse.x, mouse.y,
        getRectangleMid(obj.x, obj.frame_width),
        getRectangleMid(obj.y, obj.frame_height)))
}
/**
 * Credit goes to Beachhouse on stack 
 * @param {*} canvas 
 * @param {*} evt 
 */
function getMousePos(canvas, evt) {
    var rect = canvas.getBoundingClientRect(), // abs. size of element
        scaleX = canvas.width / rect.width,    // relationship bitmap vs. element for X
        scaleY = canvas.height / rect.height;  // relationship bitmap vs. element for Y

    return {
        x: (evt.clientX - rect.left) * scaleX,   // scale mouse coordinates after they have
        y: (evt.clientY - rect.top) * scaleY     // been adjusted to be relative to element
    }
}