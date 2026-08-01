// =========================
// Student Wellness Hub
// app.js
// =========================

// Dark Mode Toggle
const themeBtn = document.getElementById("themeBtn");

if (themeBtn) {
    themeBtn.addEventListener("click", () => {
        document.body.classList.toggle("dark");

        if (document.body.classList.contains("dark")) {
            themeBtn.innerHTML = "☀️";
        } else {
            themeBtn.innerHTML = "🌙";
        }
    });
}

// Motivational Quotes
const quotes = [
    "Believe in yourself. You are stronger than you think.",
    "Small progress is still progress.",
    "Success begins with self-belief.",
    "Stay positive, work hard, and make it happen.",
    "Take care of your mind. It powers your future.",
    "One day or day one. You decide.",
    "Don't stop until you're proud.",
    "Your only limit is your mindset.",
    "Focus on progress, not perfection.",
    "Every study session brings you closer to success."
];

const quote = document.getElementById("quote");

if (quote) {
    const random = Math.floor(Math.random() * quotes.length);
    quote.innerHTML = `"${quotes[random]}"`;
}

// Smooth Scroll
document.querySelectorAll("a[href^='#']").forEach(anchor => {
    anchor.addEventListener("click", function(e) {
        e.preventDefault();

        document.querySelector(this.getAttribute("href"))
            .scrollIntoView({
                behavior: "smooth"
            });
    });
});

// Welcome Message
window.addEventListener("load", () => {
    console.log("Student Wellness Hub Loaded Successfully!");
});