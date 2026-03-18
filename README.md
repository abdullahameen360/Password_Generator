# 🔐 Password Generator

A clean, minimal password generator built with vanilla HTML, CSS, and JavaScript — no frameworks, no dependencies.

![Password Generator Preview](https://img.shields.io/badge/status-live-brightgreen) ![HTML](https://img.shields.io/badge/HTML-5-orange) ![CSS](https://img.shields.io/badge/CSS-3-blue) ![JavaScript](https://img.shields.io/badge/JavaScript-ES6-yellow)

---

## Features

- **Adjustable length** — Slide between 4 and 32 characters
- **Character options** — Mix and match uppercase, lowercase, numbers, and symbols
- **Live strength meter** — Visual feedback (Weak / Fair / Medium / Strong) with color-coded bars
- **One-click copy** — Copies the generated password to clipboard instantly
- **Zero dependencies** — Pure vanilla JS, no libraries or build tools needed

- <img width="1181" height="1049" alt="image" src="https://github.com/user-attachments/assets/6a0cb2a2-b077-4d64-bc88-09e2abb1b174" />


---

##  Getting Started

1. **Clone the repo**
   ```bash
   git clone https://github.com/abdullahameen360/Password_Generator.git
   cd Password_Generator
   ```

2. **Open in browser**
   ```bash
   # Just open index.html directly — no server required
   open index.html
   ```

That's it. No installs, no build steps.

---

##  Project Structure

```
Password_Generator/
├── index.html      # App markup
├── style.css       # Styling & dark theme
└── script.js       # Password logic & UI interactions
```

---

## How It Works

| Feature | Logic |
|---|---|
| Character pool | Built dynamically based on which checkboxes are selected |
| Password generation | Random index into the pool, repeated for the chosen length |
| Strength scoring | Based on length thresholds + number of character types enabled |
| Clipboard copy | Uses the native `navigator.clipboard` API |

**Strength levels:**

| Score | Label | Color |
|---|---|---|
| 1 | WEAK | 🔴 Red |
| 2 | FAIR | 🟠 Orange |
| 3 | MEDIUM | 🟡 Yellow |
| 4 | STRONG | 🟢 Green |

---

##  Preview

```
┌─────────────────────────────────────┐
│         Password Generator          │
├─────────────────────────────────────┤
│  PTx1f5DaFX                      ⧉  │
├─────────────────────────────────────┤
│  Character Length              10   │
│  ████████░░░░░░░░░░░░░░░░░░░░░░░    │
│  ☑ Include Uppercase Letters        │
│  ☑ Include Lowercase Letters        │
│  ☑ Include Numbers                  │
│  ☐ Include Symbols                  │
│                                     │
│  STRENGTH              STRONG ████  │
│  [      GENERATE →               ]  │
└─────────────────────────────────────┘
```

---

## 👤 Author

**Abdullah Ameen**
- GitHub: [@abdullahameen360](https://github.com/abdullahameen360)

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).
