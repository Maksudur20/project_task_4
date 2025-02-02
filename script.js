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
