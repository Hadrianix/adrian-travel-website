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




// function theDate() {
//     var getDate = new Date();

//     var day = getDate.getDay();
//     var month = getDate.getMonth();
//     var year = getDate.getYear();

//     var d = getDate.getDate();

//     if (year < 1000)
//         year += 1900;

//     if (d < 10)
//         d = "0" + d;

//     var darr = new Array("Sunday",
//         "Monday",
//         "Tuesday",
//         "Wednesday",
//         "Thursday",
//         "Friday",
//         "Saturday");

//     var marr = new Array("January",
//         "February",
//         "March",
//         "April",
//         "May",
//         "June",
//         "July",
//         "Auguest",
//         "September",
//         "October",
//         "November",
//         "December"

//     );

//     document.write(""+darr[day]+ ",  "+marr[month]+" "+d", "+year"");
// }


// var dateObj = new Date();
// var month = dateObj.getUTCMonth() + 1; //months from 1-12
// var day = dateObj.getUTCDate();
// var year = dateObj.getUTCFullYear();

// newdate = year + "/" + month + "/" + day;



// document.write(new Date().getFullYear())




