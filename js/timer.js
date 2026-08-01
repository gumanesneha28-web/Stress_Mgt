let time = 25 * 60; // 25 minutes
let timer;
let running = false;

const timerDisplay = document.getElementById("timer");

// Update Timer Display
function updateDisplay() {
    let minutes = Math.floor(time / 60);
    let seconds = time % 60;

    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;

    timerDisplay.textContent = `${minutes}:${seconds}`;
}

// Start Timer
function startTimer() {

    if (running) return;

    running = true;

    timer = setInterval(() => {

        if (time > 0) {
            time--;
            updateDisplay();
        } else {

            clearInterval(timer);
            running = false;

            alert("🎉 Great Job! Your 25-minute study session is complete. Take a 5-minute break.");

        }

    }, 1000);

}

// Pause Timer
function pauseTimer() {

    clearInterval(timer);
    running = false;

}

// Reset Timer
function resetTimer() {

    clearInterval(timer);

    running = false;

    time = 25 * 60;

    updateDisplay();

}

// Initialize
updateDisplay();