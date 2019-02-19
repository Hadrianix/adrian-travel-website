/**
 * Author: Adrian Taylor
 * Date: 2/19/2019
 * Course: Web Dev 262
 * Project: Travel Website
 * 
 */

// Form Submission

var formReference = document.querySelector("#myForm");
var txtFirstName = document.querySelector("#firstName");
var txtLastName = document.querySelector("#lastName");
var txtAddress = document.querySelector("#address");
var txtCity = document.querySelector("#city");
var txtState = document.querySelector("#state");
var txtZip = document.querySelector("#zip");
var txtPhone = document.querySelector("#phone");
var txtEmail = document.querySelector("#email");
var txtFeedback = document.querySelector('#txtFeedback');
var errorDivs = document.getElementsByClassName("error");

formReference.addEventListener('submit', onFormSubmit);

function onFormSubmit(event) {

    var isValid = true;



    txtFeedback.innerHTML = "";


    for (var i = 0; i < errorDivs.length; i++) {
        errorDivs[i].innerHTML = "";
    }


    if (txtFirstName.value == "" || !isNaN(txtFirstName.value)) {
        isValid = false;

        txtFirstName.nextElementSibling.innerHTML = "Please enter a valid first name.";
    }
    if (txtLastName.value == "" || !isNaN(txtLastName.value)) {
        isValid = false;
        txtLastName.nextElementSibling.innerHTML = "Please enter a valid last name.";
    }

    if (txtAddress.value == "") {
        isValid = false;
        txtAddress.nextElementSibling.innerHTML = "Please enter a valid address.";
    }
    if (txtCity.value == "") {
        isValid = false;
        txtCity.nextElementSibling.innerHTML = "Please enter valid City.";
    }
    if (txtState.value == "") {
        isValid = false;
        txtState.nextElementSibling.innerHTML = "Please enter valid US State Name.";
    }


    if (txtZip.value == "" || isNaN(txtZip.value) || txtZip.value.length != 5) {
        isValid = false;
        txtZip.nextElementSibling.innerHTML = "Please enter a valid 5-digit zip code.";
    }

    if (txtPhone.value == "" || !isNaN(txtPhone.value) || txtPhone.value.length != 12) {
        isValid = false;
        txtPhone.nextElementSibling.innerHTML = "Please enter a valid 10 digit phone number, 123-456-7890.";
    }

    if (txtEmail.value == "" || txtEmail.indexOf("@") != 1 || txtEmail.indexOf(".") != 1) {
        isValid = false;
        txtEmail.nextElementSibling.innerHTML = "Please enter a valid e-mail address.";

    }


    if (!isValid) {
        event.preventDefault();
    }
    if (isValid) {
        var str = txtPhone.replace("-", "");
        return true;
    }
}

var d = new Date();
var monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

var date = document.getElementById("date");


function getDate() {
    date.innerHTML = monthNames[d.getMonth()] + " " + d.getDate() + ", " + d.getFullYear();
}



getDate();