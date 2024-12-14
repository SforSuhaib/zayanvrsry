// Countdown Timer Script
const countdownDate = new Date("December 15, 2024 00:00:00").getTime();

// Update the countdown every 1 second
const timer = setInterval(function() {
    let now = new Date().getTime();
    let distance = countdownDate - now;

    // Calculate days, hours, minutes, and seconds
    let days = Math.floor(distance / (1000 * 60 * 60 * 24));
    let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Display the result
    document.getElementById("countdown").innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;

    // If the countdown is finished, show the button
    if (distance < 0) {
        clearInterval(timer);
        document.getElementById("special-btn-container").style.display = "block"; // Show the button
        document.getElementById("timer").style.display = "none"; // Hide the timer
    }
}, 1000);

// Show the note after button click
function showNote() {
    const noteContent = "This is the special note. You can customize it!";
    document.getElementById("note-content").textContent = noteContent;
    document.getElementById("note").style.display = "block"; // Show the note
    document.getElementById("special-btn").style.display = "none"; // Hide the button
}
