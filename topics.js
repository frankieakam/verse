// JavaScript code for topics pop-up functionality
function showPopup() {
    const popup = document.getElementById("topics-popup");
    popup.style.display = "flex"; // Display the topics pop-up overlay
}

function closePopup() {
    const popup = document.getElementById("topics-popup");
    popup.style.display = "none"; // Hide the topics pop-up overlay
}

window.addEventListener("load", () => {
    showPopup();
});