    // Temporary verification authentication
    const checkbox = document.getElementById('human-check'); // selecting the checkbox element
    
    // an event listener for when the checkbox is clicked
    checkbox.addEventListener('change', function () {
        if (this.checked) {
            alert('Verification Successful! Flying you to Verse...'); // verification succesful alert

             // Add a slight delay (2 seconds) before redirecting
            setTimeout(() => {
            }, 2000); // 2 seconds delay
            window.location.href = 'about.html'; // redirecting to about.html when the checkbox is ticked
        }
    });