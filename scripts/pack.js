var earth = document.getElementById('earth');
var moveForward = true;
var earthTimer = setInterval(earthMove, 5);

function earthMove() {
    if (earth.offsetLeft >= document.body.offsetWidth - earth.offsetWidth) {
        walkForward = false;
    }

    if (earth.offsetLeft <= 0) {
        walkForward = true;
    }

    if (walkForward) {

        earth.style.transform = "scaleX(1)";
        earth.style.left = earth.offsetLeft + 1 + "px";
    } else {

        earth.style.transform = "scaleX(-1)";

        earth.style.left = earth.offsetLeft - 1 + "px";
    }
}