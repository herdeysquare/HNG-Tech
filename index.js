function updateTimeAndDay() {
  const now = new Date();


  const timeUTC =
  now.getUTCHours().toString().padStart(2, '0') + ':' +
                    now.getUTCMinutes().toString().padStart(2, '0') + ':' +
                    now.getUTCSeconds().toString().padStart(2, '0');

  const day = now.toLocaleDateString("us-GB", {
    weekday: "long",
    timeZone: "UTC",
  });

  document.getElementById("currentTimeUTC").textContent = timeUTC;
  document.getElementById("currentDay").textContent = day;
}

setInterval(updateTimeAndDay, 1000);
updateTimeAndDay();
