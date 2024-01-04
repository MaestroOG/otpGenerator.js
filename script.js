const generateBtn = document.querySelector(".buttons button");
const otpDisplay = document.getElementById("otp");
const copyBtn = document.querySelectorAll(".buttons button")[1];
const alert = document.querySelector("p");
const numbers = "0123456789";
const length = 4;

// console.log(otp.innerHTML.length);

function generateOtp() {
    let otp = "";
    while (length > otp.length) {
        otp += numbers[Math.floor(Math.random() * numbers.length)]
    }

    otpDisplay.innerHTML = otp;

    console.log("ok");
    alert.innerHTML = "";
}

function copyOtp() {
    navigator.clipboard.writeText(otpDisplay.innerHTML);
    alert.innerHTML = "Copied To Clipboard!";
    setTimeout(() => {
        alert.innerHTML = "";
    }, 2500);
}
