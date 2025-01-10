// Read verse pop-up functionality
function showPopup() {
    const popup = document.getElementById("rv-popup");
    popup.style.display = "flex"; // Display the read verse pop-up overlay
}

function closePopup() {
    const popup = document.getElementById("rv-popup");
    popup.style.display = "none"; // Hide the read verse pop-up overlay
}

window.addEventListener("load", () => {
    showPopup();
});



// Display saved verses shared functionality 
function displayVerses() {
    const readVerseContainer = document.getElementById('read-verse-container'); // Using getElementById for unique ID
    const verses = JSON.parse(localStorage.getItem('verses')) || [];
    
    // Clear existing content before displaying new verses
    readVerseContainer.innerHTML = '';

    verses.forEach(verse => {
        // Create the read verse box
        const readVerseBox = document.createElement('div');
        readVerseBox.classList.add('read-verse-box');
        
        // Add user photo preview if available
        if (verse.photo) {
            const photo = document.createElement('img');
            photo.src = verse.photo;
            photo.alt = `${verse.username}'s photo`;
            photo.classList.add('user-photo-preview');
            readVerseBox.appendChild(photo); // Append photo at the top
        }

        // Add the quote icons
        const quoteIconLeft = document.createElement('i');
        quoteIconLeft.classList.add('fa-solid', 'fa-quote-left');
        quoteIconLeft.style.color = '#89fffd';
        readVerseBox.appendChild(quoteIconLeft);

        // Add the verse text
        const verseText = document.createElement('p');
        verseText.textContent = verse.text;
        readVerseBox.appendChild(verseText);

        const quoteIconRight = document.createElement('i');
        quoteIconRight.classList.add('fa-solid', 'fa-quote-right');
        quoteIconRight.style.color = '#89fffd';
        readVerseBox.appendChild(quoteIconRight);

        // Add the username footer
        const username = document.createElement('footer');
        username.textContent = `— ${verse.username}`;
        readVerseBox.appendChild(username);

        // Add the emoji interaction buttons
        const emojiButtons = document.createElement('div');
        emojiButtons.classList.add('emoji-buttons');
 
        // Each emoji button

        // Upvote emoji
        const upvoteButton = document.createElement('button');
        upvoteButton.innerHTML = '👍'; 
        upvoteButton.title = 'Upvote';
        upvoteButton.classList.add('emoji-button');
 
        // Downvote emoji
        const downvoteButton = document.createElement('button');
        downvoteButton.innerHTML = '👎'; 
        downvoteButton.title = 'Downvote';
        downvoteButton.classList.add('emoji-button');

        // Inspiring emoji
        const inspiringButton = document.createElement('button');
        inspiringButton.innerHTML = '💡'; 
        inspiringButton.title = 'Inspiring';
        inspiringButton.classList.add('emoji-button');

        // Not Inspiring emoji
        const notInspiringButton = document.createElement('button');
        notInspiringButton.innerHTML = '❌';
        notInspiringButton.title = 'Not Inspiring';
        notInspiringButton.classList.add('emoji-button');

        // Append buttons to the emoji buttons container
        emojiButtons.appendChild(upvoteButton);
        emojiButtons.appendChild(downvoteButton);
        emojiButtons.appendChild(inspiringButton);
        emojiButtons.appendChild(notInspiringButton);
 
        // Append the emoji buttons container to the read verse box
        readVerseBox.appendChild(emojiButtons);
 
        // Optional: Add event listeners for button interactions
        upvoteButton.addEventListener('click', () => alert(`You upvoted "${verse.text}"`));
        downvoteButton.addEventListener('click', () => alert(`You downvoted "${verse.text}"`));
        inspiringButton.addEventListener('click', () => alert(`You found "${verse.text}" inspiring`));
        notInspiringButton.addEventListener('click', () => alert(`You found "${verse.text}" not inspiring`));

        // Append the read verse box to the container
        readVerseContainer.appendChild(readVerseBox);
    });
} 

// Call the displayVerses function when the page loads
window.addEventListener('load', displayVerses);



