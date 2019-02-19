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