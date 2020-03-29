
/* Utility.js */

function getMiddle(canvasDim, objDim) {
    return canvasDim / 2 - (objDim / 2);
}

function getRectangleMid(cord, len) {
    return cord + (len / 2);
}

function getRadianAngle(x1, y1, x2, y2) {
}

function getDegreeAngle(x1, y1, x2, y2) {
    let angle = Math.atan2(x2 - x1, y1- y2) * 180 / Math.PI;
    let dif = 0.0;
    if (angle < 0.0) {
        dif = (Math.abs(Math.abs(angle) - 180.0));
        return dif + 180.0;
    }
    else
        return angle;
}

