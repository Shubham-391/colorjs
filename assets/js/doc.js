let body = document.querySelector('body');
let start = document.querySelector(".start");
let stopcolor = document.querySelector(".stop");
let maxcolorval = 0xFFFFFF;

function color() {
    let randomnumber = Math.floor(Math.random() * maxcolorval).toString(16);
    let randcolor = "#" + randomnumber.padStart(6, 0).toUpperCase();
    return randcolor;
}

let interval;

start.addEventListener("click", function startcolor() {
    if (!interval) {
        interval = setInterval(function () { document.body.style.background = color(); }, 1000);
    }
});
stopcolor.addEventListener("click", function stopcolor() {
    clearInterval(interval);
    interval = false;
});