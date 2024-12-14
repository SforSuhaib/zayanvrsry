// Set the target date for the countdown
const targetDate = new Date("December 15, 2024 00:00:00").getTime();

// Update the countdown every 1 second
const countdown = setInterval(function() {
  const now = new Date().getTime();
  const distance = targetDate - now;

  // Time calculations for days, hours, minutes, and seconds
  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Display the result in the "timer" element
  document.getElementById("timer").innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;

  // If the countdown is over, display the anniversary button
  if (distance < 0) {
    clearInterval(countdown);
    document.getElementById("message").innerHTML = "The special day has arrived!";
    document.getElementById("anniversary-message").style.display = "block"; // Show the button
  }
}, 1000);

// Event listener to show the note when the button is clicked
document.getElementById("celebrate-button").addEventListener("click", function() {
  document.getElementById("note").style.display = "block"; // Show the note
});
