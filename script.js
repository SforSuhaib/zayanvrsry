// Function to generate floating hearts
function createHearts() {
  for (let i = 0; i < 20; i++) {
    const heart = document.createElement("div");
    heart.classList.add("heart");
    heart.style.left = `${Math.random() * 100}vw`;
    heart.style.animationDuration = `${Math.random() * 3 + 3}s`;
    heart.innerHTML = "❤️";
    document.body.appendChild(heart);

    setTimeout(() => {
      heart.remove();
    }, 5000);
  }
}
setInterval(createHearts, 1000);

// Function to display images and messages
function showSurprise() {
  const container = document.getElementById("images-container");
  container.innerHTML = ""; // Clear previous content

  const messages = [
    "I love you more every day 💜",
    "You are my sunshine ☀️",
    "Thank you for being by my side 🌸",
    "Here's to many more adventures together 💍",
    "You make life beautiful 🥰",
  ];

  const images = [
    "https://via.placeholder.com/200/ffb6c1/000000?text=Memory+1",
    "https://via.placeholder.com/200/d8bfd8/000000?text=Memory+2",
    "https://via.placeholder.com/200/dda0dd/000000?text=Memory+3",
    "https://via.placeholder.com/200/e6e6fa/000000?text=Memory+4",
    "https://via.placeholder.com/200/f3e5f5/000000?text=Memory+5",
  ];

  for (let i = 0; i < images.length; i++) {
    const img = document.createElement("img");
    img.src = images[i];
    container.appendChild(img);

    const message = document.createElement("div");
    message.classList.add("message");
    message.textContent = messages[i];
    container.appendChild(message);
  }
}
