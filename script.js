// Countdown Timer - Set target date (December 15, 2024)
const targetDate = new Date("Dec 15, 2024 00:00:00").getTime();

// Function to update the countdown timer
function updateCountdown() {
    const now = new Date().getTime();
    const distance = targetDate - now;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Display the countdown
    document.getElementById("countdown").innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;

    // If the countdown is over, show the button
    if (distance < 0) {
        clearInterval(timerInterval);
        document.getElementById("countdown").innerHTML = "It's Time!";
        document.getElementById("explore-btn").style.display = "block";
    }
}

// Update countdown every second
const timerInterval = setInterval(updateCountdown, 1000);

