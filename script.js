const HOURHAND = document.querySelector("#hour");
const MINUTEHAND = document.querySelector("#minute");
const SECONDHAND = document.querySelector("#second");


let date = new Date();

let hour = date.getHours();
let minute = date.getMinutes();
let second = date.getSeconds();

let minFull = minute * 360 / 60;
let secPosition = second * 360 / 60;
let minPosition = minFull + (secPosition / 60);
let hrPosition = hour * 360 / 60 + (minFull / 12);

HOURHAND.style.transform = "rotate(" + hrPosition + "deg)";
MINUTEHAND.style.transform = "rotate(" + minPosition + "deg)";
SECONDHAND.style.transform = "rotate(" + secPosition + "deg)";