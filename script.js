let timerInterval;
let timerRunning = false;
let tallyCount = 0;
let milliseconds = 0, seconds = 0, minutes = 0;

const display = document.getElementById('display');
const tallyDisplay = document.getElementById('tallyDisplay');
const startStopButton = document.getElementById('startStop');
const pauseButton = document.getElementById('pause');
const resetStopwatchButton = document.getElementById('resetStopwatch');
const decrementButton = document.getElementById('decrement');
const incrementButton = document.getElementById('increment');
const resetTallyButton = document.getElementById('resetTally');

function updateTimeDisplay() {
    const formattedMinutes = minutes.toString().padStart(2, '0');
    const formattedSeconds = seconds.toString().padStart(2, '0');
    const formattedMilliseconds = milliseconds.toString().padStart(3, '0');
    display.textContent = `${formattedMinutes}:${formattedSeconds}.${formattedMilliseconds}`;
}

function updateTallyDisplay() {
    tallyDisplay.textContent = tallyCount;
}

function startStopwatch() {
    if (!timerRunning) {
        timerInterval = setInterval(() => {
            milliseconds += 10;
            if (milliseconds === 1000) {
                milliseconds = 0;
                seconds++;
                if (seconds === 60) {
                    seconds = 0;
                    minutes++;
                }
            }
            updateTimeDisplay();
        }, 10);
        timerRunning = true;
        tallyCount++;
        updateTallyDisplay();
        startStopButton.style.display = 'none';
        pauseButton.style.display = 'inline-block';
    }
}

function pauseStopwatch() {
    clearInterval(timerInterval);
    timerRunning = false;
    startStopButton.style.display = 'inline-block';
    pauseButton.style.display = 'none';
}

function resetStopwatch() {
    clearInterval(timerInterval);
    timerRunning = false;
    milliseconds = 0;
    seconds = 0;
    minutes = 0;
    updateTimeDisplay();
    startStopButton.style.display = 'inline-block';
    pauseButton.style.display = 'none';
}

function decrementTally() {
    if (tallyCount > 0) {
        tallyCount--;
        updateTallyDisplay();
    }
}

function incrementTally() {
    tallyCount++;
    updateTallyDisplay();
}

function resetTally() {
    tallyCount = 0;
    updateTallyDisplay();
}

startStopButton.addEventListener('click', startStopwatch);
pauseButton.addEventListener('click', pauseStopwatch);
resetStopwatchButton.addEventListener('click', resetStopwatch);
decrementButton.addEventListener('click', decrementTally);
incrementButton.addEventListener('click', incrementTally);
resetTallyButton.addEventListener('click', resetTally);

updateTimeDisplay();
updateTallyDisplay();
