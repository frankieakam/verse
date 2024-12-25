// Share a verse functionality 

// Preview a user photo on share a verse
document.getElementById('user-photo').addEventListener('change', function() {
    const file = this.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function(e) {
            const preview = document.getElementById('photo-preview');
            preview.style.display = 'block';
            preview.style.backgroundImage = `url(${e.target.result})`;
        };
        reader.readAsDataURL(file);
    }
});

// Get the elements for the user photo, user name, and verse
const postVerseBtn = document.getElementById('post-verse-btn');
const userPhotoInput = document.getElementById('user-photo');
const usernameInput = document.getElementById('username-input');
const verseInput = document.getElementById('verse-input');
const photoPreview = document.getElementById('photo-preview');

// Function to handle photo preview
userPhotoInput.addEventListener('change', function(event) {
    const file = event.target.files[0];
    const reader = new FileReader();
    
    reader.onload = function(e) {
        photoPreview.innerHTML = `<img src="${e.target.result}" alt="User Photo" class="user-photo-preview">`;
    }
    
    if (file) {
        reader.readAsDataURL(file);
    }
});

// Function to save the verse to localStorage
function saveVerseToLocalStorage() {
    const userPhoto = photoPreview.querySelector('img') ? photoPreview.querySelector('img').src : null;
    const username = usernameInput.value.trim();
    const verseText = verseInput.value.trim();
    
    // Check if the fields are filled out
    if (!username || !verseText) {
        alert('Cmon, Verser! Please fill in all the fields before posting your verse!');
        return;
    }
    
    // Retrieve existing verses from localStorage
    let verses = JSON.parse(localStorage.getItem('verses')) || [];
    
    // Create a new verse object
    const newVerse = {
        photo: userPhoto,
        username: username,
        text: verseText,
        date: new Date().toISOString()  // Optionally add a timestamp to sort or filter verses
    };
    
    // Add the new verse to the array
    verses.push(newVerse);
    
    // Save the updated verses back to localStorage
    localStorage.setItem('verses', JSON.stringify(verses));
    
    // Clear the input fields
    usernameInput.value = '';
    verseInput.value = '';
    photoPreview.innerHTML = ''; // Clear photo preview
    alert('Yoh, Verser! Your verse is now live on Verse!');
}

// Event listener for the Post Verse button
postVerseBtn.addEventListener('click', saveVerseToLocalStorage);

// Event listener for the character count in the verse textarea
verseInput.addEventListener('input', function() {
    const currentLength = verseInput.value.length;
    const maxLength = verseInput.getAttribute('maxlength');
    document.getElementById('char-counter').textContent = `${currentLength}/${maxLength}`;
});



