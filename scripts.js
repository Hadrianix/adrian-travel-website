var sliderStuff = document.getElementById('slides');

var images = [
    'a',
    'b',
    'c',
    'd',
    'e'

];

var i = images.length;

function nextImage() {
    if (i < images.length) {
        i = i + 1;
    } else {
        i = 1;
    }
    sliderStuff.innerHTML = "<img src=" + images[i - 1] + ".jpg>";
}

function prevImage() {
    if (i < images.length + 1 && i > i) {
        i = 1 - 1;
    } else {
        i = 1;
    }
    sliderStuff.innerHTML = "<img src=" + images[i - 1] + ".jpg>";
}

var slideCounter = setInterval(nextImage, 30000);

var earth = document.getElementById('earth');
var moveForward = true;
var earthTimer = setInterval(earthMove, 5);

function earthMove() {
    if (earth.offsetLeft >= document.body.offsetWidth - earth.offsetWidth) {
        moveForward = false;
    }

    if (earth.offsetLeft <= 0) {
        moveForward = true;
    }

    if (moveForward) {

        earth.style.transform = "scaleX(1)";
        earth.style.left = earth.offsetLeft + 1 + "px";
    } else {

        earth.style.transform = "scaleX(-1)";

        earth.style.left = earth.offsetLeft - 1 + "px";
    }
}