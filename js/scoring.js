/* ============================================================
   scoring.js — WPM, accuracy, error calculation
   Edit this file to change how results are calculated
   ============================================================ */

function calculateResults(typed, referenceText, elapsedSeconds) {
  let correct = 0;
  let errors = 0;

  for (let i = 0; i < typed.length; i++) {
    if (typed[i] === referenceText[i]) correct++;
    else errors++;
  }

  let minutes = elapsedSeconds / 60;
  let wpm = Math.round((typed.length / 5) / minutes);
  let acc = typed.length > 0 ? Math.max(0, Math.round((correct / typed.length) * 100)) : 0;

  document.getElementById('wpm').innerText      = '⚡ WPM: ' + wpm;
  document.getElementById('accuracy').innerText = '🎯 Accuracy: ' + acc + '%';
  document.getElementById('errors').innerText   = '❌ Errors: ' + errors;
}
