const HOURHAND = document.querySelector("#hour");
const MINUTEHAND = document.querySelector("#minute");
const SECONDHAND = document.querySelector("#second");

function runClock() {
let date = new Date();

let hours = date.getHours();
let minutes = date.getMinutes();
let seconds = date.getSeconds();

let minFullPosition = minutes * 360 / 60;
let secPosition = seconds * 360 / 60;
let minPosition = minFullPosition + (secPosition / 60);
let hrPosition = hours * 360 / 12 + (minFullPosition / 12);

HOURHAND.style.transform = "rotate(" + hrPosition + "deg)";
MINUTEHAND.style.transform = "rotate(" + minPosition + "deg)";
SECONDHAND.style.transform = "rotate(" + secPosition + "deg)";
}

const INTERVAL = setInterval(runClock, 1000);