// JavaScript code for tags pop-up functionality
function showPopup() {
    const popup = document.getElementById("subscribe-popup");
    popup.style.display = "flex"; // Display the subscribe pop-up overlay
}

function closePopup() {
    const popup = document.getElementById("subscribe-popup");
    popup.style.display = "none"; // Hide the subscribe pop-up overlay
}

window.addEventListener("load", () => {
    showPopup();
});