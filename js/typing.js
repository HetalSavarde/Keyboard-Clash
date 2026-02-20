/* ============================================================
   typing.js — Typing area controls
   Handles copy-paste lock and starting the timer on first key
   ============================================================ */

document.addEventListener('DOMContentLoaded', () => {
  const typingArea = document.getElementById('typingArea');

  // Disable copy, paste, cut
  ['copy', 'paste', 'cut'].forEach(evt => {
    typingArea.addEventListener(evt, e => e.preventDefault());
  });

  // Disable drag and drop
  typingArea.addEventListener('drop', e => e.preventDefault());

  // Start timer on first keypress
  typingArea.addEventListener('keydown', () => {
    if (!started) {
      started = true;
      startTimer();
    }
  });
});
