/**
 * Author: Adrian Taylor
 * Date: 2/19/2019
 * Created a slideshow of places and events customers can go.
 */


var sliderStuff = document.getElementById('slides');

var images = [
    './images/a',
    './images/b',
    './images/c',
    './images/d',
    './images/e'

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

var d = new Date();
var monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

var date = document.getElementById("date");
var time = document.getElementById("time");

function getDate() {
    date.innerHTML = monthNames[d.getMonth()] + " " + d.getDate() + ", " + d.getFullYear();
}



getDate();





