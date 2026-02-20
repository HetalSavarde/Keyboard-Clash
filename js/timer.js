/* ============================================================
   timer.js — Countdown timer
   Change DEFAULT_MINUTES below to set how long each test lasts
   ============================================================ */

const DEFAULT_MINUTES = 2;

let timeLeft = 0;
let timerInterval;
let totalSeconds = DEFAULT_MINUTES * 60;

function startTimer() {
  timeLeft = totalSeconds;
  timerInterval = setInterval(() => {
    timeLeft--;
    updateTimerDisplay();
    if (timeLeft <= 0) {
      endExam();
    }
  }, 1000);
}

function updateTimerDisplay() {
  let m = Math.floor(timeLeft / 60);
  let s = timeLeft % 60;
  document.getElementById('timer').innerText =
    String(m).padStart(2, '0') + ':' + String(s).padStart(2, '0');
}
