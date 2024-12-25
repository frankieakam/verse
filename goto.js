 // JavaScript code for go to pop-up functionality
 function showPopup() {
    const popup = document.getElementById("goto-popup");
    popup.style.display = "flex"; // Display the go to pop-up overlay
}

function closePopup() {
    const popup = document.getElementById("goto-popup");
    popup.style.display = "none"; // Hide the go to pop-up overlay
}

window.addEventListener("load", () => {
    showPopup();
});