const themeToggle = document.querySelector(".bi-circle-half");
const body = document.body;
const divs = document.querySelectorAll(".white-bg"); // Select divs with a white background

const savedTheme = localStorage.getItem("theme");
if (savedTheme) {
    body.classList.add(savedTheme);
    updateTheme(savedTheme);
}

themeToggle.addEventListener("click", () => {
    body.classList.toggle("dark-mode");
    
    const currentTheme = body.classList.contains("dark-mode") ? "dark-mode" : "";
    localStorage.setItem("theme", currentTheme);
    
    updateTheme(currentTheme);
});

// Function to update background & text colors
function updateTheme(theme) {
    divs.forEach(div => {
        if (theme === "dark-mode") {
            div.style.backgroundColor = "#333"; // Dark gray background
            div.style.color = "#fff"; // White text
        } else {
            div.style.backgroundColor = "#fff"; // White background
            div.style.color = "#000"; // Black text
        }
    });
}

