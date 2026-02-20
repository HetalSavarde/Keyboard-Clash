# ⌨️ KEYBOARD CLASH

A typing speed test web app with an arcade/pixel art theme. Users are shown a random paragraph, and as soon as they start typing the timer begins. Results show WPM, accuracy, and errors at the end.

---

## 🚀 How to Run

No installs, no build tools needed.

1. Download the project folder
2. Double-click `index.html`
3. It opens in your browser and works immediately

---

## 🎮 How It Works (User Flow)

```
Open site → Random paragraph appears + timer ready
              ↓
         User starts typing → timer counts down
              ↓
    User clicks Done  OR  timer hits zero
              ↓
         Results shown (WPM, Accuracy, Errors)
              ↓
         Click Try Again → new paragraph, fresh timer
```

---

## 📁 Folder Structure

```
keyboard-clash/
│
├── index.html                  ← Open this to run the app
│
├── css/
│   ├── background.css          ← Page background colour/image
│   ├── layout.css              ← Container size, character positions
│   ├── components.css          ← Buttons, inputs, timer, result boxes
│   └── animations.css          ← Floating/bouncing/pulse effects
│
├── js/
│   ├── paragraphs.js           ← ✏️ ADD YOUR PARAGRAPHS HERE
│   ├── timer.js                ← Countdown logic + time limit setting
│   ├── scoring.js              ← WPM & accuracy calculation
│   ├── app.js                  ← Main flow (load, finish, try again)
│   └── typing.js               ← Keydown listener, paste lock
│
└── assets/
    └── characters/
        ├── left.png            ← Large character, bottom left
        ├── right.png           ← Large character, bottom right
        ├── top-left.png        ← Small mascot, top left
        └── top-right.png       ← Small mascot, top right
```

---

## ✏️ Common Things You'll Want to Edit

### Add or remove paragraphs
Open `js/paragraphs.js` and edit the array:

```js
const PARAGRAPHS = [
  "Your first paragraph here...",
  "Your second paragraph here...",
  // add as many as you want
];
```

A random one is picked every time the page loads or the user clicks Try Again.

---

### Change the time limit
Open `js/timer.js` and change line 6:

```js
const DEFAULT_MINUTES = 2; // change this number
```

---

### Change the background
Open `css/background.css`. To use an image, uncomment the block at the bottom:

```css
body {
  background-image: url('../assets/your-bg.jpg');
  background-size: cover;
  background-position: center;
}
```

---

### Move or resize character images
Open `css/layout.css`. Each character has its own block:

```css
.character-left      { bottom: -130px; left: -240px; width: 400px; }
.character-right     { bottom: -120px; right: -210px; width: 400px; }
.character-top-left  { top: 60px;  left: -80px;  width: 190px; }
.character-top-right { top: 30px;  right: -80px; width: 200px; }
```

Adjust `top`, `bottom`, `left`, `right`, and `width` to reposition.

---

### Change button or timer colours
Open `css/components.css`:
- Timer styles → search for `.timer`
- Green button → search for `.btn-primary`
- Blue button → search for `.btn-secondary`
- Result boxes → search for `.result-box`

---

### Add character images
Drop your PNG files into `assets/characters/` and make sure the filenames match what's in `index.html`:

```html
<img src="assets/characters/left.png"      ...>
<img src="assets/characters/right.png"     ...>
<img src="assets/characters/top-left.png"  ...>
<img src="assets/characters/top-right.png" ...>
```

If your file is named differently (e.g. `top_left.png`), update the `src` in `index.html` to match.

---

## 📊 How Scoring Works

| Metric | Formula |
|---|---|
| WPM | characters typed ÷ 5 ÷ minutes elapsed |
| Accuracy | correct characters ÷ total typed × 100 |
| Errors | characters typed that don't match the paragraph |

WPM uses elapsed time, so finishing early gives you a fair score — not based on the full timer.

---

## 🗂️ What Each File Does

| File | What to edit it for |
|---|---|
| `js/paragraphs.js` | Add/remove test paragraphs |
| `js/timer.js` | Change time limit |
| `js/scoring.js` | Change how WPM or accuracy is calculated |
| `js/app.js` | Change overall flow (load, finish, try again) |
| `js/typing.js` | Change paste rules or when timer starts |
| `css/background.css` | Page background colour or image |
| `css/layout.css` | Container size, character positions |
| `css/components.css` | Buttons, timer, inputs, result boxes |
| `css/animations.css` | Floating stars, bouncing, warning pulse |
| `index.html` | Page structure, character image src paths |
