// Set the target date (15th December 2024, 12:30 PM)
var targetDate = new Date("December 15, 2024 12:30:00").getTime();

// Function to update the countdown timer
var countdownFunction = setInterval(function() {
    var now = new Date().getTime();
    var distance = targetDate - now;

    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Display the countdown
    document.getElementById("countdown").innerHTML = days + "d " + hours + "h " + minutes + "m " + seconds + "s ";

    // If the countdown is finished, display the button and hide the timer
    if (distance < 0) {
        clearInterval(countdownFunction);
        document.getElementById("timerContainer").style.display = "none"; // Hide the timer
        document.getElementById("buttonContainer").style.display = "block"; // Show the button
    }
}, 1000);

// Function to show the letter when button is clicked
function showLetter() {
    document.getElementById('letterContainer').style.display = "block"; // Show the letter
    document.getElementById('showLetterBtn').style.display = "none"; // Hide the button after click
}
