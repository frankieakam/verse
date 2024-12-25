// JavaScript code for privacy policy pop-up functionality
function showPopup() {
    const popup = document.getElementById("policies-popup");
    popup.style.display = "flex"; // Display the policies pop-up overlay
}

function closePopup() {
    const popup = document.getElementById("policies-popup");
    popup.style.display = "none"; // Hide the policies pop-up overlay
}

window.addEventListener("load", () => {
    showPopup();
});

