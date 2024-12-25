// JavaScript code for tags pop-up functionality
function showPopup() {
    const popup = document.getElementById("tags-popup");
    popup.style.display = "flex"; // Display the tags pop-up overlay
}

function closePopup() {
    const popup = document.getElementById("tags-popup");
    popup.style.display = "none"; // Hide the tags pop-up overlay
}

window.addEventListener("load", () => {
    showPopup();
});

