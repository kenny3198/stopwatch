var seconds = 0;
var tens = 0;
const appendTens = document.querySelector("#tens");
const appendSeconds = document.querySelector("#seconds");
const startButton = document.querySelector("#button-start");
const stopButton = document.querySelector("#button-stop");
const resetButton = document.querySelector("#button-reset");

var interval;
  
function startTimer() {
    tens++; 
    if (tens < 9) {
        appendTens.innerHTML = "0" + tens;
    }
    if (tens > 9) {
        appendTens.innerHTML = tens;
    }
    if (tens > 99) {
        seconds++;
        appendSeconds.innerHTML = "0" + seconds;
        tens = 0;
        appendTens.innerHTML = "0" + 0;
    }
    if (seconds > 9) {
       appendSeconds.innerHTML = seconds;
    }
}
startButton.onclick = function () {
    interval = setInterval(startTimer)
}
stopButton.onclick = function() {
    clearInterval(interval)
}
resetButton.onclick = function () {
    clearInterval(interval)
    tens = 00;
    seconds = 00;
    appendSeconds.innerHTML = seconds
    appendTens.innerHTML = tens
}