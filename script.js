const slider = document.getElementById("slider")
const lengthDisplay = document.getElementById("length-display")
const passInput = document.getElementById("pass")
const copyBtn = document.getElementById("copy-btn")
const generateBtn = document.getElementById("generate-btn")
const strengthText = document.getElementById("strength-text")
const bars = document.querySelectorAll(".bar")

const upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
const lower = "abcdefghijklmnopqrstuvwxyz"
const numbers = "0123456789"
const symbols = "!@#$%^&*()"

// Slider
slider.addEventListener("input", () => {
    lengthDisplay.textContent = slider.value
    const val = (slider.value - slider.min) / (slider.max - slider.min) * 100
    slider.style.background = `linear-gradient(to right, #a4ffaf ${val}%, #333 ${val}%)`
})

// Generate
generateBtn.addEventListener("click", generatePassword)

function generatePassword() {
    const includeUpper = document.getElementById("uppercase").checked
    const includeLower = document.getElementById("lowercase").checked
    const includeNumbers = document.getElementById("numbers").checked
    const includeSymbols = document.getElementById("symbols").checked

    let pool = ""
    if (includeUpper) pool += upper
    if (includeLower) pool += lower
    if (includeNumbers) pool += numbers
    if (includeSymbols) pool += symbols

    if (!pool) { alert("Select at least one option!"); return }

    let password = ""
    for (let i = 0; i < slider.value; i++) {
        password += pool[Math.floor(Math.random() * pool.length)]
    }

    passInput.value = password
    updateStrength(password, { includeUpper, includeLower, includeNumbers, includeSymbols })
}

// Strength
function updateStrength(password, options) {
    let score = 0
    if (password.length >= 8) score++
    if (password.length >= 14) score++
    if (options.includeUpper && options.includeLower) score++
    if (options.includeNumbers) score++
    if (options.includeSymbols) score++

    score = Math.min(Math.max(Math.ceil(score / 1.25), 1), 4)

    const labels = ["", "WEAK", "FAIR", "MEDIUM", "STRONG"]
    const colors = ["", "#f64c4c", "#fb7c2e", "#f8cd28", "#a4ffaf"]

    strengthText.textContent = labels[score]
    strengthText.style.color = colors[score]

    bars.forEach((bar, i) => {
        bar.style.background = i < score ? colors[score] : "transparent"
        bar.style.borderColor = i < score ? colors[score] : "#a4ffaf"
    })
}

// Copy
copyBtn.addEventListener("click", () => {
    if (!passInput.value) return
    navigator.clipboard.writeText(passInput.value)
    copyBtn.textContent = "✓"
    setTimeout(() => copyBtn.textContent = "⧉", 1500)
})