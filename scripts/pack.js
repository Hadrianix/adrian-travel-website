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


var d = new Date();
var monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

var date = document.getElementById("date");


function getDate() {
    date.innerHTML = monthNames[d.getMonth()] + " " + d.getDate() + ", " + d.getFullYear();
}



getDate();