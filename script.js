// Set the date and time we're counting down to: 12:05 PM on 15th December 2024
var countDownDate = new Date("Dec 15, 2024 12:05:00").getTime();

// Update the countdown every 1 second
var x = setInterval(function() {
    var now = new Date().getTime();
    var distance = countDownDate - now;

    // Calculate time left
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Display the timer
    document.getElementById("timer").innerHTML = days + "d " + hours + "h " + minutes + "m " + seconds + "s ";

    // If the countdown is over, show the button
    if (distance < 0) {
        clearInterval(x);
        document.getElementById("specialButton").style.display = "block";
    }
}, 1000);

// Event listener for button click
document.getElementById("specialButton").addEventListener("click", function() {
    // Hide the button after it's clicked
    document.getElementById("specialButton").style.display = "none";
    
    // Show the image after the button is clicked
    var img = document.createElement("img");
    img.src = "letter.jpg"; // Make sure the image is in the same folder
    img.alt = "Happy 2nd Anniversary!";
    document.body.appendChild(img);
});
