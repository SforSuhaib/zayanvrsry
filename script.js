// Set the date we're counting down to
var countDownDate = new Date("Dec 15, 2024 00:00:00").getTime();

// Update the countdown every 1 second
var x = setInterval(function() {
    var now = new Date().getTime();
    var distance = countDownDate - now;

    // Time calculations for days, hours, minutes, and seconds
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Display the countdown in the "countdown" div
    document.getElementById("countdown").innerHTML = days + "d " + hours + "h " + minutes + "m " + seconds + "s ";

    // If the countdown is finished, hide the timer and show the button
    if (distance < 0) {
        clearInterval(x);
        document.getElementById("timer").style.display = "none";
        document.getElementById("special-btn-container").style.display = "block";
    }
}, 1000);

// Function to show the image after button click
function showImage() {
    document.getElementById("special-btn").style.display = "none"; // Hide the button
    document.getElementById("image-container").style.display = "block"; // Show the image
}
