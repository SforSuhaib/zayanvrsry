// Set the target date
const targetDate = new Date("December 15, 2024 00:00:00").getTime();

const timer = setInterval(function() {
    const now = new Date().getTime();
    const timeLeft = targetDate - now;

    // Time calculations
    const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

    // Display the result in the element with id="timer"
    document.getElementById("timer").innerHTML = 
        days + "d " + hours + "h " + minutes + "m " + seconds + "s ";

    // If the countdown is finished
    if (timeLeft < 0) {
        clearInterval(timer);
        document.getElementById("timer").innerHTML = "Surprise is Here!";
        document.getElementById("special-button").style.display = "block";
    }
}, 1000);
