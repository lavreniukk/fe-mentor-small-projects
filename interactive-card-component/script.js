const nameInput = document.getElementById("cardholder-name");
const nameDisplay = document.querySelector(".card-name-display");
const numInput = document.getElementById("card-number");
const numDisplay = document.querySelector(".card-num-display");
const monthDisplay = document.querySelector(".month");
const yearDisplay = document.querySelector(".year");
const monthInput = document.querySelector(".date-month");
const yearInput = document.querySelector(".date-year");
const cvcDisplay = document.querySelector(".card-cvv-display");
const cvcInput = document.getElementById("cvc");
const errName = document.getElementById("error-name-display");
const errNum = document.getElementById("error-num-display");
const errDate = document.getElementById("error-date-display");
const errCVC = document.getElementById("error-cvc-display");
const submissionMess = document.querySelector(".submit-message");
const submittedForm = document.querySelector("form");

function containsNum(string) {
    return /\d/.test(string);
}

function containsLetters(string) {
    return /[a-zA-Z]/g.test(string);
}

function nameValid() {
    if(nameInput.value === "") {
        nameInput.style.borderColor = "red";
        errName.innerHTML = "Can't be blank";
        return false;
    } else if (containsNum(nameInput.value)) {
        nameInput.style.borderColor = "red";
        errName.innerHTML = "Can't contain numbers";
        return false;
    } else {
        nameInput.style.borderColor = "hsl(270, 3%, 87%)";
        errName.innerHTML = "";
        return true;
    }
}

function inputName() {
    nameValid();
    nameDisplay.innerHTML = nameInput.value;
}

function numValid() {
    if (numInput.value === "") {
        numInput.style.borderColor = "red";
        numDisplay.innerHTML = "0000 0000 0000 0000";
        errNum.innerHTML = "Can't be blank";
        return false;
    } else if (containsLetters(numInput.value)) {
        numInput.style.borderColor = "red";
        errNum.innerHTML = "Wrong format, numbers only"
        return false;
    } else {
        numInput.style.borderColor = "hsl(270, 3%, 87%)";
        errNum.innerHTML = "";
        return true;
    }
}

function inputNum() {
    if(numValid()) {
        numDisplay.innerHTML = numInput.value;
    }
}

function dateValid() {
    if (monthInput.value === "" && yearInput.value === "") {
        monthInput.style.borderColor = "red";
        yearInput.style.borderColor = "red";
        errDate.innerHTML = "Can't be blank";
        return false;
    } else if (monthInput.value > 12 || yearInput.value > 23) {
        monthInput.style.borderColor = "red";
        yearInput.style.borderColor = "red";
        errDate.innerHTML = "Wrong date";
        return false;
    } else {
        monthInput.style.borderColor = "hsl(270, 3%, 87%)";
        yearInput.style.borderColor = "hsl(270, 3%, 87%)";
        errDate.innerHTML = "";
        return true;
    }
}

function inputMonth() {
    dateValid();
    monthDisplay.innerHTML = monthInput.value.substring(0,2);
}

function inputYear() {
    dateValid();
    yearDisplay.innerHTML = yearInput.value.substring(0,2);
}

function cvcValid() {
    if (cvcInput.value === "") {
        cvcInput.style.borderColor = "red";
        errCVC.innerHTML = "Can't be blank";
        return false;
    } else if (containsLetters(cvcInput.value)) {
        cvcInput.style.borderColor = "red";
        errCVC.innerHTML = "Wrong format";
        return false;
    } else if (cvcInput.value.length > 3) {
        cvcInput.style.borderColor = "red";
        errCVC.innerHTML = "Max 3 numbers";
        return false;
    } else {
        cvcInput.style.borderColor = "hsl(270, 3%, 87%)";
        errCVC.innerHTML = "";
        return true;
    }
}

function inputCVC() {
    if (cvcValid()) {
        cvcDisplay.innerHTML = cvcInput.value;
    }
}

function submissionCheck(event) {
    event.preventDefault();

    if (nameValid() && numValid() && dateValid() && cvcValid()) {
        submissionMess.style.visibility = "visible";
        submittedForm.style.visibility = "hidden";
    }
}

submittedForm.addEventListener('submit', submissionCheck);