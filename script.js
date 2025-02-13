// Set the date you started your relationship (February 2nd, 12:00 AM)
const startDate = new Date("2023-02-02T00:00:00"); 

function updateTime() {
    const now = new Date();
    const diff = now - startDate;

    // Calculate the time difference
    const hours = Math.floor(diff / 1000 / 60 / 60) % 24;
    const days = Math.floor(diff / 1000 / 60 / 60 / 24);
    const minutes = Math.floor(diff / 1000 / 60) % 60;

    // Format the time string (Days, Hours, Minutes)
    const timeString = `${days} days ${hours} hours ${minutes} minutes`;

    // Update the HTML with the calculated time
    const countTimeElement = document.getElementById("timer");
    countTimeElement.textContent = timeString;
}

// Update every second
setInterval(updateTime, 1000);

// Initialize the display
updateTime();