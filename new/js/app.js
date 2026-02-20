/* ============================================================
   app.js — Main app flow
   - Picks a random paragraph on load
   - Timer starts on first keypress
   - "Done" button lets user end early
   - "Try Again" reloads with a new random paragraph
   ============================================================ */

let currentPara = "";
let started = false;

/* Pick a random paragraph from paragraphs.js */
function getRandomParagraph() {
  const index = Math.floor(Math.random() * PARAGRAPHS.length);
  return PARAGRAPHS[index];
}

/* Called on page load — show typing page immediately */
function init() {
  currentPara = getRandomParagraph();

  document.getElementById("textDisplay").innerText = currentPara;
  updateTimerDisplay();

  document.getElementById("typing-page").style.display = "block";
  document.getElementById("result-page").style.display = "none";

  started = false;
  document.getElementById("typingArea").value = "";
  document.getElementById("typingArea").focus();
}

/* "Done" button — user finishes early */
function finishEarly() {
  if (!started) return;
  endExam();
}

/* End exam — stop timer, show results */
function endExam() {
  clearInterval(timerInterval);
  const typed = document.getElementById("typingArea").value;
  const elapsed = totalSeconds - timeLeft;
  calculateResults(typed, currentPara, elapsed > 0 ? elapsed : 1);
  document.getElementById("typing-page").style.display = "none";
  document.getElementById("result-page").style.display = "block";
}

/* "Try Again" button */
function tryAgain() {
  init();
}

/* Run on page load */
window.onload = init;
