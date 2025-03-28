const musicBtn = document.getElementById("musicBtn");
const bgMusic = document.getElementById("bgMusic");

// Music toggle
musicBtn.addEventListener("click", () => {
  if (bgMusic.paused) {
    bgMusic.play();
    musicBtn.innerHTML = "Pause Music 💖";
  } else {
    bgMusic.pause();
    musicBtn.innerHTML = "Play Music 🎶";
  }
});

// Save on input
document.querySelectorAll("textarea").forEach(textarea => {
  const key = textarea.dataset.key;
  textarea.value = localStorage.getItem(key) || "";
  textarea.addEventListener("input", () => {
    localStorage.setItem(key, textarea.value);
  });
});

// Heart and Sunflower rain
const heartContainer = document.getElementById("heart-container");

function createHeart() {
  const heart = document.createElement("div");
  heart.classList.add("heart");

  // Randomly choose between 💖 and 🌻
  const emojis = ["💖", "🌻"];
  heart.innerText = emojis[Math.floor(Math.random() * emojis.length)];

  heart.style.left = Math.random() * 100 + "vw";
  heart.style.animationDuration = 2 + Math.random() * 3 + "s";

  document.body.appendChild(heart);

  setTimeout(() => {
    heart.remove();
  }, 5000);
}

setInterval(createHeart, 300);
