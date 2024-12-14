// Set the date for the countdown (15th December)
const countdownDate = new Date("December 15, 2024 00:00:00").getTime();

// Update the countdown every second
let countdownFunction = setInterval(function() {
    const now = new Date().getTime();
    const distance = countdownDate - now;

    // Time calculations for days, hours, minutes, and seconds
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Display the result
    document.getElementById("countdown").innerHTML = days + "d " + hours + "h " + minutes + "m " + seconds + "s ";

    // If the countdown is over, show the "HAPPY 2ND ANNIVERSARY" button
    if (distance < 0) {
        clearInterval(countdownFunction);
        document.getElementById("countdown").innerHTML = "EXPIRED";
        document.getElementById("explore-btn").style.display = "inline-block";
    }
}, 1000);

// Show the note after the button is clicked
document.getElementById("explore-btn").addEventListener("click", function() {
    document.getElementById("note-container").style.display = "block";
});
