function updateTime() {
  const now = new Date();
  const options = {
    weekday: "long",
    year: "numeric",
    month: "short",
    day: "numeric",
  };
  document.getElementById("date").textContent = now.toLocaleDateString(
    "en-US",
    options
  );
  document.getElementById("time").textContent = now.toLocaleTimeString(
    "en-US",
    { hour: "2-digit", minute: "2-digit", second: "2-digit" }
  );
}

setInterval(updateTime, 1000);
updateTime();

const playButton = document.getElementById("play");
const audio = new Audio("./img/audio.mp3");
const playIcon = document.getElementById("play-icon");

function toggleMusic() {
  if (audio.paused) {
    audio.play();
    playIcon.src = "./img/volume_off.png";
    playIcon.style.transform = "rotate(360deg)";
  } else {
    audio.pause();
    playIcon.src = "./img/volume_up.png";
    playIcon.style.transform = "rotate(0deg)";
  }
}

playButton.addEventListener("click", toggleMusic);
