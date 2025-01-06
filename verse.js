// Verse pop-up functionality
function showPopup() {
    const popup = document.getElementById("syv-popup");
    popup.style.display = "flex"; // Display the go to pop-up overlay
}

function closePopup() {
    const popup = document.getElementById("syv-popup");
    popup.style.display = "none"; // Hide the go to pop-up overlay
}

window.addEventListener("load", () => {
    showPopup();
});



// Photo preview functionality
document.getElementById('user-photo').addEventListener('change', function() {
    const file = this.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function(e) {
            const preview = document.getElementById('photo-preview');
            preview.style.display = 'block';
            preview.style.backgroundImage = `url(${e.target.result})`; // Show the photo as background
        };
        reader.readAsDataURL(file);
    }
});

// Handle word count validation
const verseInput = document.getElementById('verse-input');
const charCounter = document.getElementById('char-counter');

// Function to update word count
verseInput.addEventListener('input', function() {
    const currentLength = verseInput.value.length;
    const maxLength = verseInput.getAttribute('maxlength');
    charCounter.textContent = `${currentLength}/${maxLength}`;
});

// Get form elements
const postVerseBtn = document.getElementById('post-verse-btn');
const userPhotoInput = document.getElementById('user-photo');
const usernameInput = document.getElementById('username-input');

// Function to save verse to localStorage
function saveVerseToLocalStorage() {
    const userPhoto = document.getElementById('photo-preview').style.backgroundImage || null;
    const username = usernameInput.value.trim();
    const verseText = verseInput.value.trim();

    // Debugging logs to check values
    console.log('userPhoto:', userPhoto);
    console.log('username:', username);
    console.log('verseText:', verseText);

    // Check if all fields are filled
    if (!username || !verseText || !userPhoto) {
        alert('Cmon, verser! Please fill in all the fields before posting your verse!');
        return;
    }

    // Check for internet connection
    if (!navigator.onLine) {
        alert('No internet connection. Please check your internet and try again.');
        return;
    }

    try {
        // Retrieve existing verses from localStorage
        let verses = JSON.parse(localStorage.getItem('verses')) || [];
        console.log('Existing verses in localStorage:', verses);

        // Create a new verse object
        const newVerse = {
            photo: userPhoto.replace(/url\(["']?/, '').replace(/["']?\)$/, ''), // Properly clean URL
            username: username,
            text: verseText,
            date: new Date().toISOString() // Add timestamp for ordering or sorting
        };

        console.log('New verse object:', newVerse);

         // Check if the number of verses exceeds the limit (e.g., 20)
        //  const MAX_VERSES = 20;
        //  if (verses.length >= MAX_VERSES) {
             // Remove the oldest verse (first one in the array)
        //      verses.shift();
        //  }

        // Add the new verse to the list of verses
        verses.push(newVerse);

        // Save the updated verses back to localStorage
        localStorage.setItem('verses', JSON.stringify(verses));

        // Clear input fields
        usernameInput.value = '';
        verseInput.value = '';
        document.getElementById('photo-preview').style.backgroundImage = ''; // Clear photo preview

        // Show success message
        alert('Yoh, verser! Your verse is now live on Verse!');
    } catch (error) {
        // Log the error to help debug
        console.error('Error saving to localStorage:', error);
        alert('Failed to submit the post at this time. Please try again later.');
    }
}

// Event listener for the Post Verse button
postVerseBtn.addEventListener('click', saveVerseToLocalStorage);
