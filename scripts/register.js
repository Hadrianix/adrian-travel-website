/**
 * Author: Adrian Taylor
 * Date: 2/19/2019
 * Course: Web Dev 262
 * Project: Travel Website
 * 
 */

// footer date code

var d = new Date();
var monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

var date = document.getElementById("date");


function getDate() {
    date.innerHTML = monthNames[d.getMonth()] + " " + d.getDate() + ", " + d.getFullYear();
}



getDate();