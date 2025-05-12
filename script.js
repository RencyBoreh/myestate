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


document.getElementById("myForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent page refresh

    let formValid = true;

    document.querySelectorAll("input, textarea").forEach(field => {
        if (!field.value.trim()) {  // Check if the field is empty
            formValid = false;
            field.classList.add("is-invalid");
            field.classList.remove("is-valid");
        } else {
            field.classList.remove("is-invalid");
            field.classList.add("is-valid");
        }
    });

    if (formValid) {
        // Show the success message
        document.getElementById("successMessage").style.display = "block";

        // Reset form after 3 seconds
        setTimeout(() => {
            document.getElementById("myForm").reset();
            document.getElementById("successMessage").style.display = "none";
        }, 3000);
    }
});

// Real-time validation while typing
document.querySelectorAll("input, textarea").forEach(field => {
    field.addEventListener("input", () => {
        field.classList.toggle("is-invalid", !field.value.trim());
        field.classList.toggle("is-valid", field.value.trim());
    });
});
