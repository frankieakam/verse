// JavaScript code for contact form pop-up functionality
function showPopup() {
    const popup = document.getElementById("contact-popup");
    popup.style.display = "flex"; // Display the contact form pop-up overlay
}

function closePopup() {
    const popup = document.getElementById("contact-popup");
    popup.style.display = "none"; // Hide the contact form pop-up overlay
}

window.addEventListener("load", () => {
    showPopup();
});

