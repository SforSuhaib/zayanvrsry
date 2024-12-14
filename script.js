// Timer function to show countdown
const targetDate = new Date("Dec 15, 2024 12:00:00").getTime();
const timerElement = document.getElementById('timer');
const specialButton = document.getElementById('specialButton');

// Update the countdown every second
const interval = setInterval(function() {
    const now = new Date().getTime();
    const distance = targetDate - now;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    timerElement.innerHTML = days + "d " + hours + "h " + minutes + "m " + seconds + "s ";

    // If the countdown is over, show the button
    if (distance < 0) {
        clearInterval(interval);
        timerElement.innerHTML = "The wait is over!";
        specialButton.style.display = "block"; // Make the button appear
    }
}, 1000);

// Function to show the letter when button is clicked
function showLetter() {
    document.getElementById('letterContainer').style.display = "block"; // Show the letter
    specialButton.style.display = "none"; // Hide the button after click
}
